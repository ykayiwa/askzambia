"use client";

interface Source {
  title: string;
  url: string | null;
  snippet: string;
}

export function SourceCitation({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;

  return (
    <div className="mt-3 space-y-1.5">
      {sources.map((source, i) => (
        <div
          key={i}
          className="flex items-start gap-2 rounded-lg border border-[#d1e7dd] bg-[#f0faf4] px-3 py-2 text-xs"
        >
          <span className="mt-0.5 shrink-0">📄</span>
          <div className="min-w-0">
            <span className="font-medium text-[#198754]">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#198754]/30 hover:decoration-[#198754]"
                >
                  {source.title}
                </a>
              ) : (
                source.title
              )}
            </span>
            {source.snippet && (
              <p className="mt-0.5 line-clamp-2 text-gray-500">{source.snippet}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
