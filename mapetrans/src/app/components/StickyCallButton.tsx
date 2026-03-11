"use client";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+33634605799"
      aria-label="Appeler MAPETRANS LD"
      className="
        fixed bottom-0 left-0 right-0 z-50
        flex items-center justify-center gap-3
        bg-amber-500 hover:bg-amber-400 active:bg-amber-600
        text-black font-bold
        py-4 px-6
        text-base tracking-wide
        transition-colors duration-200
        md:hidden
        shadow-[0_-4px_24px_rgba(0,0,0,0.35)]
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
          clipRule="evenodd"
        />
      </svg>
      Appeler — 06 34 60 57 99
    </a>
  );
}
