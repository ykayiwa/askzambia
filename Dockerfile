FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Build the app
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy full node_modules for packages that better-auth dynamically imports
# (standalone mode only traces static imports, missing CJS builds)
COPY --from=deps /app/node_modules/pg ./node_modules/pg
COPY --from=deps /app/node_modules/pg-types ./node_modules/pg-types
COPY --from=deps /app/node_modules/pg-protocol ./node_modules/pg-protocol
COPY --from=deps /app/node_modules/pg-pool ./node_modules/pg-pool
COPY --from=deps /app/node_modules/pg-connection-string ./node_modules/pg-connection-string
COPY --from=deps /app/node_modules/pg-int8 ./node_modules/pg-int8
COPY --from=deps /app/node_modules/pg-cloudflare ./node_modules/pg-cloudflare
COPY --from=deps /app/node_modules/pgpass ./node_modules/pgpass
COPY --from=deps /app/node_modules/postgres-array ./node_modules/postgres-array
COPY --from=deps /app/node_modules/postgres-bytea ./node_modules/postgres-bytea
COPY --from=deps /app/node_modules/postgres-date ./node_modules/postgres-date
COPY --from=deps /app/node_modules/postgres-interval ./node_modules/postgres-interval
COPY --from=deps /app/node_modules/postgres-range ./node_modules/postgres-range
COPY --from=deps /app/node_modules/buffer-writer ./node_modules/buffer-writer
COPY --from=deps /app/node_modules/packet-reader ./node_modules/packet-reader
COPY --from=deps /app/node_modules/obuf ./node_modules/obuf
COPY --from=deps /app/node_modules/split2 ./node_modules/split2
COPY --from=deps /app/node_modules/kysely ./node_modules/kysely

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
