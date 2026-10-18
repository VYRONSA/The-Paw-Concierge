"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book now", primary: true },
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="The Paw Concierge home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">♧</span>
          <span className="brand-copy"><strong>The Paw Concierge</strong><small>Trusted care. Happier pets.</small></span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} className={link.primary ? "nav-cta" : ""} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
