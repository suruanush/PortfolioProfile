import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { FaHome, FaUser } from 'react-icons/fa';
import './App.css'
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${activeSection !== 'home' ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <span className="logo-text">ANUSH</span>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li>
                <button 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <div 
            className={`hamburger ${menuOpen ? 'open' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Anush Suru</span></h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-text">Building exceptional digital experiences with modern web technologies</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Developer working" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <img 
                  src="https://media-hosting.imagekit.io/66edd442b31b4f56/IMG_20250321_231432 (1).jpg?Expires=1839739858&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zig~SiXsrIUb1v7wsvM3sGyKSnxakuOQK~7EMTA-U1~RuM6p~QbPCD7qadVyegLRiLYJHeLfsxbp1xQM3iPEIiEQpURtQ9NZ7tlJGvlfGFJGmI2V0EYgJEi3098DHzfoWjX~YLyCw6G7qSL4T7qSBOw55gHGCIhkwPV7doNsn4Y8970dPN8fz5YSPC5~8x9gBS81gaBMmBb~9GAluaIBhROamejszMf2F5XjoIQUuquR2646kX8mP9OP-ocPf5nh1jXnnGZV9EZj8uIP7B4Os51T8MvqMiQOhtj06mjQVRdIuET9OCgEBf-JdfRUghbjP053i1f9zUzXrLrPqGOZdA__" 
                  alt="Profile Photo" 
                />
              </div>
            </div>
            <div className="about-text">
              <h3>Full Stack Developer</h3>
              <p>Aspiring Full Stack Developer eager to contribute my foundational knowledge of web development to build complete applications. My Computer Science background has provided me with a strong understanding of programming principles and a solid grasp of JavaScript and related front-end technologies. I am passionate about creating user-friendly interfaces and am keen to learn and apply my skills in developing robust back-end systems.</p>
              <p>I am a highly motivated individual with a strong desire to learn and grow within a dynamic development environment. I am enthusiastic about tackling complex problems and contributing to innovative projects. My goal is to leverage my academic foundation and eagerness to learn from experienced professionals to become a valuable asset in building efficient and effective web applications.</p>
              <div className="about-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Anush Suru</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">suruanush@gmail.com</span>
                </div>
               
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Hyderabad, INDIA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/suruanush" className="social-link"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anushsuru" className="social-link"><FaLinkedin /></a>
                <a href="https://x.com/AnushSuru?t=1JJ4Ft46y3dQMFRDS3I88w&s=09" className="social-link"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <div className="skills-container">

          <div className="skills-category">
              <h3 className="category-title">Programming Languages</h3>
              <SkillItem name="C++" percent={83} />
              <SkillItem name="Python" percent={75} />
              <SkillItem name="Java" percent={70} />
            </div>

            <div className="skills-category">
              <h3 className="category-title">Frontend</h3>
              <SkillItem name="HTML5" percent={95} />
              <SkillItem name="CSS3" percent={90} />
              <SkillItem name="JavaScript (ES6+)" percent={92} />
              <SkillItem name="React.js" percent={88} />
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">Backend</h3>
              <SkillItem name="Node.js" percent={85} />
              <SkillItem name="Express.js" percent={83} />
              <SkillItem name="RESTful APIs" percent={87} />
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">Database & Tools</h3>
              <SkillItem name="MySQL" percent={80} />
              <SkillItem name="MongoDB" percent={78} />
              <SkillItem name="Git/GitHub" percent={90} />
              <SkillItem name="Visual Studio" percent={70} />
            </div>

            <div className="skills-category">
              <h3 className="category-title">Soft Skills</h3>
              <SkillItem name="Problem Solving" percent={85} />
              <SkillItem name="Communication" percent={83} />
              <SkillItem name="Time Management" percent={87} />   
              <SkillItem name="Teamwork" percent={87} />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <div className="projects-grid">
            <ProjectCard 
              title="Library-Management" 
              description="Manage library resources and user interactions efficiently with this comprehensive system."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-JLiKzJgyGBtO7t-abQDRYpvzEBoPCxkzw&s"
              tags={['HTML5', 'CSS3', 'JavaScript', 'REST API']}
            />
           
            <ProjectCard 
              title="Wikipedia Website" 
              description="Explore a vast collection of collaboratively edited articles and information on virtually any topic. Discover knowledge with Wikipedia."
              image="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/07/wikipedia.jpg"
              tags={['JavaScript','HTML5', 'CSS3', 'API Integration']}
            />
            <ProjectCard 
              title="Weather App" 
              description="Real-time weather and forecast app using public APIs, built with JavaScript, HTML5, and CSS3."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
              tags={['JavaScript', 'API Integration','HTML5', 'CSS3']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <div className="contact-content">
            <div className="contact-info">
              <InfoCard 
                icon={<FaEnvelope />} 
                title="Email" 
                content="suruanush@gmail.com" 
              />
              <InfoCard 
                icon={<FaPhone />} 
                title="Phone" 
                content="+91 8340064809" 
              />
              <InfoCard 
                icon={<FaMapMarkerAlt />} 
                title="Location" 
                content="Hyderabad, INDIA" 
              />
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">ANUSH</span>
              <p>Full Stack Developer</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/suruanush"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anushsuru"><FaLinkedin /></a>
                <a href="https://x.com/AnushSuru?t=1JJ4Ft46y3dQMFRDS3I88w&s=09"><FaTwitter /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
          </div>
        </div>
      </footer>
    </div>
  );
};

// Skill Item Component
const SkillItem = ({ name, percent }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-links">
          <a href="#" className="project-link"><FaExternalLinkAlt /></a>
          <a href="https://github.com/suruanush/Library-Management" className="project-link"><FaGithub /></a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Info Card Component
const InfoCard = ({ icon, title, content }) => {
  return (
    <div className="info-card">
      <div className="info-icon">
        {icon}
      </div>
      <div className="info-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default App;