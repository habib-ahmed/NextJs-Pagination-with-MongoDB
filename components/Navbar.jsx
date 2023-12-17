"use client";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "";

  return (
    <header className="bg-gray-200 dark:bg-gray-800 shadow">
      <div className="container mx-auto md:w-2/3 px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Site Title
        </Link>

        <nav className="flex gap-2 text-lg font-medium">
          {navLinks.map(({ name, path }, index) => {
            const isActive = path === pathname;
            return (
              <Link
                key={index}
                href={path}
                data-active={isActive}
                className={`p-3 hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
