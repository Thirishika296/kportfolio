import "./App.css";
import krishnaPhoto from "./assets/krishna-photo.jpg";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <a href="#home" className="logo">
          <img
            src={krishnaPhoto}
            alt="Krishna Kanth"
            className="nav-photo"
          />

          <span>
            KRISHNA KANTH<span className="gold-dot"></span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Contact Me
        </a>

      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">

          {/* LEFT */}
          <div className="hero-left">

            <h1>
              Krishna Kanth S
            </h1>

            <h2>
              Civil Engineer
            </h2>

            {/* PROFESSIONAL TAGLINE */}
            <div className="hero-tagline">
              Structural Design
              <span>|</span>
              Construction Planning
              <span>|</span>
              BIM
            </div>

            <p className="hero-description">
             Civil Engineering graduate focused on structural design, construction practices, and innovative engineering solutions, with a commitment to quality, sustainability, and professional excellence.
            </p>


            {/* BUTTONS */}
            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn primary-btn"
              >
                View Projects →
              </a>

              <a
                href="/Krishna-Kanth-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline-btn"
              >
                View Resume →
              </a>

              <a
                href="/Krishna-Kanth-Resume.pdf"
                download
                className="btn download-btn"
              >
                Download ↓
              </a>

            </div>


            {/* CONTACT */}
            <div className="hero-contact">

              <a href="mailto:krishna2005kd@gmail.com">
                krishna2005kd@gmail.com
              </a>

              <span>•</span>

              <a href="tel:7448964646">
                74489 64646
              </a>

            </div>

          </div>


          {/* ================= RIGHT PROFESSIONAL CARD ================= */}
          <div className="hero-right">

            <div className="professional-card">

              {/* CARD TOP */}
              <div className="card-header">

                <span className="card-number">
                  01
                </span>

                <span className="card-label">
                  CIVIL ENGINEERING
                </span>

              </div>


              {/* CARD MAIN */}
              <div className="card-content">

                <p className="card-small-title">
                  DESIGN • ENGINEERING • CONSTRUCTION
                </p>

                <h3>
                  CIVIL
                  <br />
                  <span>ENGINEERING</span>
                </h3>

                <div className="card-divider"></div>


                {/* PROFESSIONAL AREAS */}
                <div className="professional-list">

                  <div className="professional-item">
                    <span>01</span>
                    <p>STRUCTURAL DESIGN</p>
                  </div>

                  <div className="professional-item">
                    <span>02</span>
                    <p>CONSTRUCTION</p>
                  </div>

                  <div className="professional-item">
                    <span>03</span>
                    <p>CONSTRUCTION PLANNING</p>
                  </div>

                  <div className="professional-item">
                    <span>04</span>
                    <p>BIM &amp; 3D MODELING</p>
                  </div>

                </div>

              </div>


              {/* SOFTWARE */}
              <div className="card-footer">

                <span>AUTOCAD</span>
                <span>STAAD.PRO</span>
                <span>REVIT</span>

              </div>


              {/* BACKGROUND LETTER */}
              <div className="card-watermark">
                CE
              </div>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="section about-section" id="about">

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Engineering knowledge
              <br />
              with a practical mindset.
            </h2>

          </div>


          <div className="about-content">

            <p>
              I’m Krishna Kanth S, a Civil Engineering graduate with a strong foundation in structural engineering, construction practices, and engineering design. I’m passionate about transforming technical knowledge into practical solutions and building a career through continuous learning, precision, and professional excellence.
            </p>


            {/* ABOUT STATS */}
            <div className="stats">

              <div className="stat">
                <span>DEGREE</span>
                <strong>B.E. CIVIL</strong>
              </div>

              <div className="stat">
                <span>CGPA</span>
                <strong>6.20</strong>
              </div>

              <div className="stat">
                <span>GRADUATION</span>
                <strong>2026</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section className="section skills-section" id="skills">

          <div className="section-heading">

            <p className="eyebrow">
              TECHNICAL EXPERTISE
            </p>

            <h2>
              Tools &amp; skills for
              <br />
              modern engineering.
            </h2>

          </div>


          <div className="skills-grid">

            {/* AUTOCAD */}
            <div className="skill-card">

              <div className="skill-icon">
                AC
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  01
                </span>

                <h3>
                  AutoCAD
                </h3>

                <p>
                  Engineering drawings, drafting and technical layouts.
                </p>

              </div>

            </div>


            {/* STAAD */}
            <div className="skill-card">

              <div className="skill-icon">
                ST
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  02
                </span>

                <h3>
                  STAAD.Pro
                </h3>

                <p>
                  Structural analysis and basic structural modelling.
                </p>

              </div>

            </div>


            {/* REVIT */}
            <div className="skill-card">

              <div className="skill-icon">
                RV
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  03
                </span>

                <h3>
                  Revit
                </h3>

                <p>
                  BIM workflows, 3D modelling and building design.
                </p>

              </div>

            </div>


            {/* ENGINEERING DRAWING */}
            <div className="skill-card">

              <div className="skill-icon">
                ED
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  04
                </span>

                <h3>
                  Engineering Drawing
                </h3>

                <p>
                  Technical drawings, visualization and design concepts.
                </p>

              </div>

            </div>


            {/* MS OFFICE */}
            <div className="skill-card">

              <div className="skill-icon">
                MS
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  05
                </span>

                <h3>
                  MS Office
                </h3>

                <p>
                  Documentation, reports, presentations and spreadsheets.
                </p>

              </div>

            </div>


            {/* CONSTRUCTION */}
            <div className="skill-card">

              <div className="skill-icon">
                CP
              </div>

              <div className="skill-info">

                <span className="skill-number">
                  06
                </span>

                <h3>
                  Construction Planning
                </h3>

                <p>
                  Basic knowledge of construction methods and planning.
                </p>

              </div>

            </div>

          </div>


          {/* SOFT SKILLS */}
          <div className="soft-skills">

            <span>Communication</span>
            <span>Teamwork</span>
            <span>Adaptability</span>
            <span>Problem Solving</span>
            <span>Active Listening</span>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}
        <section
          className="section education-section"
          id="education"
        >

          <div className="section-heading">

            <p className="eyebrow">
              EDUCATION
            </p>

            <h2>
              Academic background.
            </h2>

          </div>


          <div className="timeline">

            <div className="education-item">

              <div className="education-year">
                2022 — 2026
              </div>

              <div className="education-details">

                <h3>
                  B.E. Civil Engineering
                </h3>

                <h4>
                  Sri Krishna College of Technology
                </h4>

                <p>
                  CGPA: <strong>6.20</strong>
                </p>

              </div>

            </div>


            <div className="education-item">

              <div className="education-year">
                2021 — 2022
              </div>

              <div className="education-details">

                <h3>
                  Higher Secondary Certificate
                </h3>

                <h4>
                  Sri Vidhya Giri Matriculation Higher Secondary School
                </h4>

                <p>
                  Percentage: <strong>58%</strong>
                </p>

              </div>

            </div>


            <div className="education-item">

              <div className="education-year">
                2019 — 2020
              </div>

              <div className="education-details">

                <h3>
                  Secondary School Leaving Certificate
                </h3>

                <h4>
                  Sri Vidhya Giri Matriculation Higher Secondary School
                </h4>

                <p>
                  Percentage: <strong>84%</strong>
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROJECT ================= */}
        <section
          className="section project-section"
          id="projects"
        >

          <div className="section-heading">

            <p className="eyebrow">
              FEATURED PROJECT
            </p>

            <h2>
              From research to
              <br />
              sustainable construction.
            </h2>

          </div>


          <div className="project-card">

            {/* PROJECT HEADER */}
            <div className="project-header">

              <div>
                <span className="project-number">
                  01
                </span>

                <p>
                  FINAL YEAR / ACADEMIC PROJECT
                </p>
              </div>

              <span className="project-status">
                SUSTAINABLE CONSTRUCTION
              </span>

            </div>


            <h3>
              Experimental Study of Concrete Using
              STP Sludge and Plastic Waste
            </h3>


            {/* PROJECT CASE STUDY */}
            <div className="project-case-study">

              <div className="case-item">

                <span>
                  PROJECT OBJECTIVE
                </span>

                <p>
                  To investigate the feasibility of using STP sludge and
                  plastic waste as alternative materials in concrete and
                  explore sustainable construction possibilities.
                </p>

              </div>


              <div className="case-item">

                <span>
                  MATERIALS USED
                </span>

                <p>
                  Concrete materials, STP sludge and plastic waste were
                  studied as part of the experimental investigation.
                </p>

              </div>


              <div className="case-item">

                <span>
                  MY ROLE
                </span>

                <p>
                  Participated in project planning, material study,
                  experimental work, observation and documentation of
                  results.
                </p>

              </div>


              <div className="case-item">

                <span>
                  RESULT / OUTCOME
                </span>

                <p>
                  The study provided practical understanding of waste
                  utilization in concrete and its potential contribution
                  to sustainable construction practices.
                </p>

              </div>

            </div>


            {/* PROJECT TAGS */}
            <div className="project-tags">

              <span>Concrete Technology</span>
              <span>Waste Management</span>
              <span>STP Sludge</span>
              <span>Plastic Waste</span>
              <span>Sustainable Construction</span>
              <span>Experimental Study</span>

            </div>

          </div>

        </section>


        {/* ================= CERTIFICATIONS ================= */}
        <section className="section certifications-section">

          <div className="section-heading">

            <p className="eyebrow">
              CERTIFICATIONS
            </p>

            <h2>
              Continuous learning.
            </h2>

          </div>


          <div className="cert-grid">

            <div className="cert-card">
              <span>01</span>
              <h3>
                Technical English For Engineers
              </h3>
            </div>

            <div className="cert-card">
              <span>02</span>
              <h3>
                Introduction to Civil Engineering Profession
              </h3>
            </div>

            <div className="cert-card">
              <span>03</span>
              <h3>
                Building Materials and Composites
              </h3>
            </div>

            <div className="cert-card">
              <span>04</span>
              <h3>
                Construction Methods And Equipment Management
              </h3>
            </div>

            <div className="cert-card">
              <span>05</span>
              <h3>
                Housing Policy &amp; Planning
              </h3>
            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section
          className="contact-section"
          id="contact"
        >

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Available for
            <br />
            Civil Engineering Opportunities.
          </h2>

          <p className="contact-description">
            Looking for an entry-level opportunity where technical
            knowledge, design skills and a willingness to learn can
            contribute to meaningful engineering projects.
          </p>


          <div className="contact-grid">

            <a
              href="tel:7448964646"
              className="contact-box"
            >

              <span>
                PHONE
              </span>

              <strong>
                74489 64646
              </strong>

            </a>


            <a
              href="mailto:krishna2005kd@gmail.com"
              className="contact-box"
            >

              <span>
                EMAIL
              </span>

              <strong>
                krishna2005kd@gmail.com
              </strong>

            </a>


            <div className="contact-box">

              <span>
                LOCATION
              </span>

              <strong>
                Karaikudi, Tamil Nadu
              </strong>

            </div>

          </div>


        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <h3>
          KRISHNA KANTH S
        </h3>

        <p>
          CIVIL ENGINEER
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 Krishna Kanth S. All Rights Reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;