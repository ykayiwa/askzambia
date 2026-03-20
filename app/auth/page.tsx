"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

export default function AuthPage() {
  const router = useRouter();
  const isOffice = typeof window !== "undefined" && window.location.hostname.startsWith("office.");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const result = await authClient.signIn.email({
          email,
          password,
        });
        if (result.error) {
          setError(result.error.message ?? "Login failed. Please check your credentials.");
          setLoading(false);
          return;
        }
      } else {
        const result = await authClient.signUp.email({
          email,
          password,
          name: name || email.split("@")[0],
        });
        if (result.error) {
          setError(result.error.message ?? "Sign up failed. Please try again.");
          setLoading(false);
          return;
        }
      }
      // Redirect to admin dashboard on office subdomain, otherwise to chat
      const isOffice = window.location.hostname.startsWith("office.");
      router.push(isOffice ? "/admin" : "/chat");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7f5] px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <ZambiaFlag size={40} />
            <span className="text-2xl font-extrabold tracking-tight text-[#198754]">
              AskZambia
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-[#e0e8e0] bg-white p-8 shadow-sm">
          {/* Toggle — hidden on admin/office domain */}
          {!isOffice && (
            <div className="mb-6 flex rounded-lg bg-[#f5f7f5] p-1">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
                className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all ${
                  isLogin
                    ? "bg-white text-[#198754] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
                className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all ${
                  !isLogin
                    ? "bg-white text-[#198754] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#e0e8e0] px-4 py-2.5 text-sm text-[#0f1f14] outline-none transition-colors placeholder:text-gray-400 focus:border-[#198754] focus:ring-2 focus:ring-[#198754]/20"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#e0e8e0] px-4 py-2.5 text-sm text-[#0f1f14] outline-none transition-colors placeholder:text-gray-400 focus:border-[#198754] focus:ring-2 focus:ring-[#198754]/20"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-[#e0e8e0] px-4 py-2.5 text-sm text-[#0f1f14] outline-none transition-colors placeholder:text-gray-400 focus:border-[#198754] focus:ring-2 focus:ring-[#198754]/20"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-[#198754] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#146c43] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to AskZambia&apos;s Terms of Service.
        </p>
      </div>
    </div>
  );
}
