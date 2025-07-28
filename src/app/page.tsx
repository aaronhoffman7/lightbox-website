"use client";
import { useEffect } from "react";
import { usePageTitle } from "./context/PageTitleContext";

export default function HomePage() {
  const [, setTitle] = usePageTitle();

  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  return (
    <main>
      {/* VIDEO BACKGROUND FIXED */}
      <section className="video-header">
        <video autoPlay muted loop playsInline className="video-background">
          <source src="/videos/droneWebsite.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay">
          {/* Tagline only */}
          <h1 className="tagline">Future-proofing the built environment</h1>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="site-container">
        <section id="about" className="page-section">
          <h2>About</h2>
          <p>Lightbox Energy helps future-proof the built environment through sustainable energy solutions.</p>
        </section>

        <section id="services" className="page-section">
          <h2>Services</h2>
          <p>Solar design, battery storage, microgrids, and more.</p>
        </section>

        <section id="projects" className="page-section">
          <h2>Projects</h2>
          <p>Explore our portfolio of renewable energy projects.</p>
        </section>

        <section id="contact" className="page-section">
          <h2>Contact</h2>
          <p>Email us at info@lightboxenergy.com</p>
        </section>
      </div>
    </main>
  );
}
