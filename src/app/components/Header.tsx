"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [shrinkHeader, setShrinkHeader] = useState(false);

  // Toggle shrink when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShrinkHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${shrinkHeader ? "shrink" : ""}`}>
      <div className="header-inner">

        {/* Logo wrapped in a link */}
        <Link href="#top" scroll={true} className="header-logo">
          <Image
            src="/photos/path2.jpg"
            alt="Lightbox Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>

        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
