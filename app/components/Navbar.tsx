import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full px-4">
      <div className="m-auto max-w-7xl py-6">
        <div className="flex items-center justify-between text-sm">
          <Image
            src="/fiscal-logo.svg"
            alt="Fiscal wordmark."
            width={55}
            height={18}
            unoptimized
          />
          <nav className="flex items-center gap-4 font-medium">
            <ul className="flex items-center gap-4">
              <li>Product</li>
              <li>Our Company</li>
            </ul>
            <a
              className="rounded-sm bg-white px-3 py-2.5 leading-none text-[#060606]"
              href=""
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
