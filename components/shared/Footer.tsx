import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#16213e] px-6 py-12 text-white/55">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 text-[1.05rem] font-bold text-white">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[#198754]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
          AskZambia
        </div>
        <nav className="flex flex-wrap gap-7">
          {["About", "Privacy", "Terms", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[0.84rem] text-white/45 transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
        <p className="mt-4 w-full text-center text-[0.76rem] opacity-50">
          Africa&apos;s First National AI Knowledge Platform &middot; &copy; {new Date().getFullYear()} AskZambia. All information is sourced from verified Zambian government and official sources.
        </p>
      </div>
    </footer>
  );
}
