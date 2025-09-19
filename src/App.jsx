import React from 'react'
const B = import.meta.env.BASE_URL; // '/sai-krishnas/' in production
export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container hero">
          <img className="avatar" src="/sai-krishnas/images/headshot.jpg" alt="Profile photo" />
          <div>
            <h1 className="title">Sai Krishna</h1>
            <p className="tag">Software Engineer & Data Enthusiast — Backend, Unix, Data Analysis</p>
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
          <p>Software Engineer focused on backend and data work, combining Python, SQL,and Unix to buildreliable systems and surface actionable insights; passionate about debugging, automation, and measurable impact.</p>
          <p>Analyst Trainee at Cognizant; prior team lead at Datavalley.</p>
          <p>Skilled in Python, SQL, Unix, backend development, debugging, testing, automation, and data analysis.</p>
        </section>
        <section className="container">
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
    </div>
    </section>
          <h2>Projects</h2>
          <div className="grid">
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
          <h2>Open Source</h2>
          <div className="grid">
            <a className="card" href="https://github.com/Mirthinti/snapcraft"><h3>Snapcraft</h3><p>Linux packaging tooling (fork).</p></a>
            <a className="card" href="https://github.com/Mirthinti/oh-my-bash"><h3>Oh My Bash</h3><p>Bash config framework (fork).</p></a>
            <a className="card" href="https://github.com/Mirthinti/Automation-scripts"><h3>Automation-scripts</h3><p>Python automation (fork).</p></a>
          </div>
        </section>
     <section className="container">
  <h2>Charts</h2>
  <div className="grid charts-grid">
    <img className="card charts-img" src={`${B}images/sales-2025.png`} alt="Monthly Sales 2025" />
    <img className="card charts-img" src={`${B}images/categories-2025.png`} alt="Category distribution" />
    <img className="card charts-img" src={`${B}images/traffic-2025.png`} alt="Traffic sources 2025" />
  </div>
</section>
      </main>
      <footer className="site-footer">
        <div className="container"><p>© {new Date().getFullYear()} Sai Krishna • Email · LinkedIn · GitHub</p></div>
      </footer>
    </div>
  )
}
 
