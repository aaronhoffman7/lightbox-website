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
          <h1 className="tagline">Future-proofing the built environment</h1>
        </div>
      </section>

 {/* SERVICES SECTION */}
      <section id="services" className="page-section services">
        <div className="services-content">
          <div className="section-text">
            <h2>SERVICES</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/photos/banneker.jpg" alt="Solar Energy" />
                <h3>Solar, Energy Storage, Green Infrastructure</h3>
                <p>
                  Our investment-grade assessments will quantify the potential for improving your roofs,
                  parking areas, and open land. 
                </p>
              </div>

              <div className="service-card">
                <img src="/photos/feasibility.jpg" alt="Optimization" />
                <h3>Optimization</h3>
                <p>We help you maximize the value of your land, roof, and parking areas.</p>
              </div>

              <div className="service-card">
                <img src="/photos/wilson.jpg" alt="Deployment" />
                <h3>Deployment</h3>
                <p>We oversee the design, construction, and ongoing management of your sustainability projects.</p>
              </div>

              <div className="service-card">
                <img src="/photos/om.jpg" alt="Operations and Maintenance" />
                <h3>Operations & Maintenance</h3>
                <p>We ensure optimal performance of your energy systems and green infrastructure.</p>
              </div>

              <div className="service-card">
                <img src="/photos/greenroof2.jpg" alt="Green Roof" />
                <h3>Green Roof Stewardship</h3>
                <p>Our team ensures your green roof&apos;s performance, compliance, and beauty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="page-section about">
        <div className="about-content">
          <div className="section-text">
            <h2>ABOUT</h2>
            <p>
              Lightbox is an energy and sustainability infrastructure deployment firm. We specialize in
              distributed energy resources, energy storage, conservation, and green infrastructure. Our
              services help clients achieve sustainability and resiliency goals while improving facility
              performance and saving money.
            </p>
            <p>
              Whether you are pursuing Net-Zero Energy, LEED, another certification, or simply a healthier
              bottom line for your building, we create customized solutions to meet the project&apos;s needs.
            </p>
          </div>
          <div className="about-image">
            <img src="/photos/greenroof.jpg" alt="Green Roof and Solar Panels" />
          </div>
        </div>
      </section>

     

      {/* PROJECTS SECTION */}
    <section id="projects" className="page-section projects">
    <div className="section-text">
      <h2>PROJECTS</h2>
      {/* New wrapper around the blocks */}
     <div className="project-list">
  {/* Project 1 */}
  <div className="project-block">
    <img src="/photos/smartroof.jpg" alt="SmartRoof Program" />
    <div className="project-details">
      <h3>SmartRoof Program,<br />Washington, DC Department of General Services</h3>
      <ul>
        <li>On-going multi-year program providing solar PV feasibility, system design, and owner’s rep services during construction.</li>
        <li>Nation’s first roof-based clean technology program with solar PV and vegetated roofs.</li>
        <li>Largest on-site municipal solar procurement in US history (~12MW on 50 sites).</li>
        <li>1M square feet and counting in new vegetated green roof installations.</li>
      </ul>
    </div>
  </div>

  {/* Project 2 */}
  <div className="project-block">
     <img src="/photos/aacps.jpg" alt="Anne Arundel Schools Solar" />
    <div className="project-details">
      <h3>Anne Arundel County Public Schools (Maryland)</h3>
      <ul>
        <li>Provided technical feasibility, financial planning, design, and procurement services for school rooftop solar.</li>
        <li>Portfolio currently in development with schools under construction in 2025.</li>
      </ul>
    </div>
  </div>

  {/* Project 3 */}
  <div className="project-block">
    <img src="/photos/wmata.jpg" alt="WMATA Solar Program" />
    <div className="project-details">
      <h3>Solar Program, Washington Metro Transit Authority</h3>
      <ul>
        <li>First PV deployment of its kind for a transportation authority.</li>
        <li>Enables solar potential across all WMATA assets – roofs, lots, garages.</li>
        <li>~9MW of solar capacity planned across 9 parking lots.</li>
        <li>Technical and financial analysis across MD, DC, and VA.</li>
      </ul>
    </div>
  </div>

  {/* Project 4 */}
  <div className="project-block">
    <img src="/photos/whitehouse.jpg" alt="White House Solar Challenge" />
    <div className="project-details">
      <h3>White House’s Capital Solar Challenge, General Services Administration, Washington, DC</h3>
      <ul>
        <li>Waterproofing and financial consulting increased solar potential by 1 MW.</li>
        <li>Identified major cost reductions and strategies for PV systems and SREC treatment.</li>
      </ul>
    </div>
  </div>
</div>
  </div>
</section>



      {/* CONTACT SECTION */}
      <section id="contact" className="page-section contact">
        <div className="contact-content">
          <div className="section-text">
            <h2>CONTACT</h2>
            <p>Email us at info@lightboxenergy.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
