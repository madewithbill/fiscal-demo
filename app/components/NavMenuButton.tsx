"use client";

export default function NavMenuButton({
  onClick,
  navState,
}: {
  onClick: VoidFunction;
  navState: boolean;
}) {
  return (
    <button onClick={onClick} className="-mr-6 p-6 md:hidden">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="7.5"
          width="14"
          height="1"
          rx="0.5"
          className={`origin-center duration-300 ease-out ${!navState ? "-translate-y-1" : "rotate-45"}`}
        ></rect>
        <rect
          x="1"
          y="7.5"
          width="14"
          height="1"
          rx="0.5"
          className={`origin-center duration-300 ease-out ${!navState ? "translate-y-1" : "-rotate-45"} `}
        ></rect>
      </svg>
    </button>
  );
}
