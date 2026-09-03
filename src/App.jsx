import React from 'react'
export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container hero">
          <img className="avatar" src="/sai-krishnas/images/headshot.jpg" alt="Profile photo" />
          <div>
            <h1 className="title">Sai Krishna</h1>
            <p className="tag">Backend Engineer in Progress — Python, Cloud, Automation</p>
            <div className="cta">
              <a className="btn" href="mailto:msaikrishna1073@gmail.com">Email</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/sai-krishna-mirthinti">LinkedIn</a>
              <a className="btn ghost" href="https://github.com/Mirthinti">GitHub</a>
              <a className="btn" href="/sai-krishnas/resume/Sai-krishhna_Resume.pdf" download>Download Resume</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="container">
          <h2>About</h2>
          <p><strong>I build software that turns messy problems into working systems.</strong></p>
          <p>I'm a software engineer focused on Python, backend engineering, and data — the kind of work where you take something manual, scattered, or repetitive and turn it into something automated, reliable, and unattended.</p>
          <p>At Cognizant, I built and deployed a production automation that replaced a 5x/day manual reporting process across a 3-shift team — real data, real edge cases, real debugging. Alongside that, I work daily with Python, SQL, and Unix, and I'm currently working toward the AWS Certified Solutions Architect certification to deepen my grasp of how systems actually run in production.</p>
          <p>Outside of work, I'm building with FastAPI, PostgreSQL, and APIs — learning by shipping, breaking, and fixing things, not just reading about them.</p>
          <p>My goal isn't to collect technologies. It's to become the engineer who can take an idea from <strong>problem → architecture → code → deployment → impact.</strong></p>
          <p>Currently looking for opportunities to contribute to backend, software, or data engineering — and grow alongside a team building something people actually use.</p>
        </section>

        <section className="container">
          <h2>Skills</h2>
          <div className="skills">
            <span className="badge">Python</span>
            <span className="badge">MySQL</span>
            <span className="badge">Bash</span>
            <span className="badge">PL/SQL</span>
            <span className="badge">Data Analysis</span>
            <span className="badge">Unix</span>
            <span className="badge">Git</span>
            <span className="badge">React</span>
            <span className="badge">javascript</span>
            <span className="badge">Django</span>
            <span className="badge">MongoDB</span>
            <span className="badge">FastAPI</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Oracle Cloud Infrastructure</span>
            <span className="badge">Google Cloud</span>
          </div>
        </section>

        <section className="container">
          <h2>Certifications</h2>
          <div className="skills">
            <a className="badge" href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=39AC59568BE2579FF2C162BB079146DCEBE53544418A5A2731E3C140E51B7A95" target="_blank" rel="noreferrer">
              Oracle Cloud Infrastructure Certified Architect Associate
            </a>
            <span className="badge">AWS Certified Solutions Architect – Associate (in progress)</span>
            <span className="badge">Google Associate Cloud Engineer (in progress)</span>
          </div>
        </section>

        <section className="container">
          <h2>Projects</h2>
          <div className="grid">
            <a className="card" href="https://github.com/Mirthinti/ams-sla-automation">
              <img src="/sai-krishnas/images/ams-sla-code.png" alt="SLA automation code" />
              <h3>AMS SLA Breach Automation</h3>
              <p>Python, pandas, openpyxl — Automated daily SLA breach reporting for enterprise incident management, replacing a 5x/day manual process across 3 shifts. Scheduled and unattended via Windows Task Scheduler.</p>
            </a>
            <a className="card" href="https://github.com/Mirthinti/Online-Examination-System">
              <img src="/sai-krishnas/images/exam-dashboard-1.jpg" alt="Online Examination dashboard" />
              <h3>Online Examination System</h3>
              <p>Python, Django, SQL — Secure login, automated grading, ~30% faster DB after query tuning.</p>
            </a>
            <a className="card" href="https://github.com/Mirthinti/Secret-Message-encryption-and-decryption-using-Python">
              <img src="/sai-krishnas/images/secret-gui.jpg" alt="Secret message GUI" />
              <h3>Secret Message Tool</h3>
              <p>Python, Tkinter — Base64 encrypt/decrypt with input checks.</p>
            </a>
            <a className="card" href="https://github.com/Mirthinti/data-Analysis-and-Insights">
              <img src="/sai-krishnas/images/sales-2025.png" alt="Monthly sales chart" />
              <h3>Data Analysis & Insights</h3>
              <p>EDA with sales, category, and traffic charts.</p>
            </a>
            <a className="card" href="https://github.com/Mirthinti/BookReviewAPI">
              <img src="/sai-krishnas/images/book-review-sheet.jpg" alt="Book review sheet" />
              <h3>Book Review API</h3>
              <p>Node.js, Express, MongoDB — JWT auth, CRUD, controllers, middleware.</p>
            </a>
          </div>
        </section>

        <section className="container">
          <h2>Open Source Contributions</h2>
          <div className="grid">
            <a className="card" href="https://github.com/Mirthinti/Automation-scripts">
              <h3>Automation-scripts</h3>
              <p>Contributed Python automation scripts to an open-source repo.</p>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container"><p>© {new Date().getFullYear()} Sai Krishna • Email · LinkedIn · GitHub</p></div>
      </footer>
    </div>
  )
}
