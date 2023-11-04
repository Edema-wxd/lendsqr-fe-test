"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <header></header>
      <div>
        <nav>Dashboard</nav>
        <Link
          href={"/login"}
          className={`link ${pathname === "/login" ? "active" : ""}`}
        >
          Random
        </Link>
        {children}
      </div>
    </div>
  );
}
