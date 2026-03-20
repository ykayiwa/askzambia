import Link from "next/link";
import { ZambiaFlag } from "./ZambiaFlag";

export function Footer() {
  return (
    <footer className="bg-[#16213e] px-6 py-12 text-white/55">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 text-[1.05rem] font-bold text-white">
          <ZambiaFlag size={30} />
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
