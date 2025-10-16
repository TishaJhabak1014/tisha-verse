import React, { useState, useEffect } from 'react';

// Navigation Component
const Navigation = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  if (isMobile) {
    return (
      <nav style={{ position: 'fixed', top: 0, right: 0, zIndex: 50, padding: '1.5rem' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={toggleMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '24px',
              width: '30px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
          >
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'black',
              transition: 'all 0.3s ease-in-out',
              transform: isMenuOpen ? 'rotate(45deg) translate(10px, 5px)' : 'none'
            }} />
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'black',
              transition: 'all 0.3s ease-in-out',
              opacity: isMenuOpen ? 0 : 1
            }} />
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'black',
              transition: 'all 0.3s ease-in-out',
              transform: isMenuOpen ? 'rotate(-45deg) translate(10px, -5px)' : 'none'
            }} />
          </button>
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            width: 'fit-content',
            maxHeight: isMenuOpen ? '300px' : 0,
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out'
          }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                style={{
                  display: 'block',
                  padding: '25px',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  color: 'black',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'grey';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'black';
                  e.target.style.textDecoration = 'none';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '17vh'
    }}>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        fontSize: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: 'black',
                textDecoration: 'none',
                transition: 'all 300ms ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'grey';
                e.target.style.textDecoration = 'underline';
                e.target.style.textUnderlineOffset = '1rem';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'black';
                e.target.style.textDecoration = 'none';
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Profile Section
const ProfileSection = () => {
  return (
    <section id="profile" style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '5rem',
      height: '80vh',
      paddingTop: '4vh',
      margin: '0 10rem',
      boxSizing: 'border-box',
      minHeight: 'fit-content'
    }}>
      <div style={{
        display: 'flex',
        height: '400px',
        width: '400px',
        margin: 'auto 0'
      }}>
        <img
          src="https://api.dicebear.com/8.x/avataaars/svg?seed=Zoe&eyebrows=default,defaultNatural,sadConcernedNatural,unibrowNatural,upDown,upDownNatural&eyes=default&hairColor=724133,a55728,b58143,c93305,d6b370,e8e1e1,ecdcbf,f59797,2c1b18&skinColor=ae5d29,d08b5b,edb98a,f8d25c,614335,ffdbb4"
          alt="avatar"
        />
      </div>
      <div style={{
        alignSelf: 'center',
        textAlign: 'center'
      }}>
        <p style={{ textAlign: 'center', fontWeight: 600, margin: 0 }}>Hello, I'm</p>
        <h1 style={{ fontSize: '3rem', textAlign: 'center', margin: 0 }}>Tisha</h1>
        <p style={{ fontSize: '1.75rem', marginBottom: '1rem', margin: 0 }}>
          I love building tools that scalable & user-friendly!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => window.open(`${process.env.PUBLIC_URL}/assets/Tisha__pdf.pdf`)}
            style={{
              fontWeight: 600,
              transition: 'all 300ms ease',
              padding: '0.8rem',
              width: '9rem',
              borderRadius: '2rem',
              border: 'rgb(53, 53, 53) 0.1rem solid',
              background: 'none',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgb(53, 53, 53)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = 'black';
            }}
          >
            Download CV
          </button>
          <button
            onClick={() => window.location.href = '#contact'}
            style={{
              fontWeight: 600,
              transition: 'all 300ms ease',
              padding: '0.8rem',
              width: '9rem',
              borderRadius: '2rem',
              border: 'rgb(53, 53, 53) 0.1rem solid',
              background: 'rgb(53, 53, 53)',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgb(0, 0, 0)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgb(53, 53, 53)';
            }}
          >
            Contact Info
          </button>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          gap: '1rem'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
            alt="LinkedIn"
            style={{ cursor: 'pointer', height: '2rem' }}
            onClick={() => window.location.href = 'https://www.linkedin.com/in/tisha-jhabak-91a2a7206/'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/github.png`}
            alt="GitHub"
            style={{ cursor: 'pointer', height: '2rem' }}
            onClick={() => window.location.href = 'https://github.com/TishaJhabak1014'}
          />
        </div>
      </div>
    </section>
  );
};

// Terminal Component
const Terminal = () => {
  const [displayedStatements, setDisplayedStatements] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const statements = [
    { input: 'Tisha.currentLocation', return: '"Sydney, Australia"' },
    { input: 'Tisha.contactInfo', return: '["<a href="mailto:iamtisha22@gmail.com" style="color: #94dce9;">iamtisha22@gmail.com</a>", "<a href="https://www.linkedin.com/in/tisha-jhabak-91a2a7206/" style="color: #94dce9;">LinkedIn</a>", "<a href="https://github.com/TishaJhabak1014" style="color: #94dce9;">GitHub</a>"]' },
    { input: 'Tisha.resume', return: '"<a href="/Tisha__pdf.pdf" target="_blank" style="color: #94dce9;">Tisha.pdf</a>"' },
    { input: 'Tisha.blogs', return: '"<a href="https://medium.com/@jhabaktisha22" target="_blank" style="color: #94dce9;">Tisha@medium</a>"' },
    { input: 'Tisha.interests', return: '["travelling", "hiking", "MCU (Marvel Cinematic Universe)", "trying new cuisines"]' },
    { input: 'Tisha.education', return: '"B. Software Engineering (Honours) - The University of Sydney, NSW"' },
    { input: 'Tisha.skills', return: '["Java", "Python", "SQL", "JavaScript", "React", "Node.js", "Tensorflow", "Git"]' }
  ];

  useEffect(() => {
    setDisplayedStatements(statements);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#52546c',
      borderRadius: '10px',
      width: '80%',
      boxShadow: '30px 30px 30px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        background: 'linear-gradient(to bottom, #555 0%, #888 10%, #999 20%, #bbb 30%, #ddd 40%)',
        padding: '10px',
        borderRadius: '10px 10px 0 0'
      }}>
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#ff5f56', marginRight: '10px' }} />
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#ffbd2e', marginRight: '10px' }} />
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
      </div>
      <div style={{ padding: '50px', fontFamily: '"Source Code Pro", monospace' }}>
        {displayedStatements.map((statement, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div style={{ color: '#cfc1c1', fontWeight: 600 }}>
              &gt; {statement.input}
            </div>
            <div
              style={{ color: '#e4cc77' }}
              dangerouslySetInnerHTML={{ __html: statement.return }}
            />
          </div>
        ))}
        <div style={{ color: '#cfc1c1', fontWeight: 800 }}>
          &gt; {showCursor && '|'}
        </div>
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginBottom: '5rem'
    }}>
      <p style={{ textAlign: 'center', fontWeight: 600, margin: 0 }}>Learn More</p>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '50px', margin: '0 0 50px 0' }}>About me</h1>
      <Terminal />
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div style={{
      background: 'rgb(250, 250, 250)',
      border: 'none',
      boxShadow: '30px 30px 30px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      borderRadius: '2rem',
      textAlign: 'center',
      height: '90vh',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <img
          src={`${process.env.PUBLIC_URL}/${project.image}`}
          alt={project.title}
          style={{
            borderRadius: '2rem',
            width: '90%',
            height: '200px',
            margin: '0 auto'
          }}
        />
        <p style={{
          padding: '8px',
          textAlign: 'justify',
          lineHeight: 1.5,
          height: '200px',
          margin: 0
        }}>
          {project.description}
        </p>
      </div>
      <h2 style={{
        margin: '1rem',
        color: 'black',
        fontSize: '1.75rem',
        fontWeight: 600
      }}>
        {project.title}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={() => window.open(project.github, '_blank')}
          style={{
            color: 'black',
            boxShadow: '30px 30px 30px rgba(0, 0, 0, 0.1)',
            fontWeight: 600,
            transition: 'all 300ms ease',
            padding: '0.8rem',
            width: '9rem',
            borderRadius: '2rem',
            border: 'rgb(53, 53, 53) 0.1rem solid',
            background: 'none',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgb(53, 53, 53)';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
            e.target.style.color = 'black';
          }}
        >
          View Source
        </button>
        {project.demo && (
          <button
            onClick={() => window.open(project.demo, '_blank')}
            style={{
              color: 'black',
              boxShadow: '30px 30px 30px rgba(0, 0, 0, 0.1)',
              fontWeight: 600,
              transition: 'all 300ms ease',
              padding: '0.8rem',
              width: '9rem',
              borderRadius: '2rem',
              border: 'rgb(53, 53, 53) 0.1rem solid',
              background: 'none',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgb(53, 53, 53)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = 'black';
            }}
          >
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hue Hunt',
      image: 'assets/hue-hunt.png',
      description: 'Hue Hunt is a fun Chrome extension that simplifies color picking tasks for designers, developers, and anyone seeking inspiration from the colors around them. With Hue Hunt, users can effortlessly capture any color on their screen, copy or reset their saved history in clicks!',
      github: 'https://github.com/TishaJhabak1014/hue-hunt',
      demo: 'https://drive.google.com/file/d/1VSIjNL4RHVdcjRLKx54cZqa90lmeGOJ6/view?usp=sharing'
    },
    {
      title: 'Canvas Craft',
      image: 'assets/canvascraft.png',
      description: 'Transform your images effortlessly with this Image Editor in JavaScript. Apply filters, adjust brightness, rotate, flip, and save your edits seamlessly!',
      github: 'https://github.com/TishaJhabak1014/canvas-craft',
      demo: 'https://tishajhabak1014.github.io/canvas-craft/'
    },
    {
      title: 'Concussion Action Plan',
      image: 'assets/capp.png',
      description: 'CAPApp: Revolutionizing Concussion Care. Our mission? To make identifying and managing concussions as easy as a tap on your smartphone. With intuitive design and powerful detection features, CAPApp is your trusted ally in athlete safety.',
      github: 'https://bitbucket.org/soft3888m1201p05/soft3888_m12_01_p05/src/main/',
      demo: 'https://drive.google.com/file/d/1_yg5f8vFvWJq3iTWd6-y-elcifogMnMO/view?usp=drive_link'
    },
    {
      title: 'ReVibe',
      image: 'assets/revibe.png',
      description: 'Empowering sustainable living with ReVibe: Track your waste reduction journey and earn rewards by scanning reusable items at partnered shops! This app has been developed with flutter technology, as a part of Google Solution Challenge 2024\'s targeting Sustainable Development Goals.',
      github: 'https://github.com/TishaJhabak1014/ReVibe',
      demo: 'https://www.youtube.com/watch?v=1LDtl2BBLfc'
    },
    {
      title: 'Pixcelerator',
      image: 'assets/project-2.png',
      description: 'Pixcelerator offers users a captivating journey into the realm of visual artistry. From the mesmerizing allure of neural style transfers to the whimsical charm of cartoonification, Pixelerator invites users to explore digital creativity!',
      github: 'https://github.com/TishaJhabak1014/pixcelerator',
      demo: 'https://github.com/TishaJhabak1014/pixcelerator'
    },
    {
      title: 'Campus Eats',
      image: 'assets/project-3.png',
      description: 'CampusEats revolutionizes how students dine near USYD. With seamless integration of Google API, we provide tailored food recommendations at your fingertips. Say goodbye to indecision and hello to culinary bliss with CampusEats!',
      github: 'https://github.com/TishaJhabak1014/campus-eats',
      demo: null
    },
    {
      title: 'Doodlew',
      image: 'assets/doodlew.png',
      description: 'A user-friendly drawing app for quick sketches and doodles. Simple, intuitive, and perfect for unleashing your creativity! Implementing methods acquired from Practical Javascript, such as formulating requirements, iterating, and organizing the application as an MVC, allowing me to establish a stronger groundwork.',
      github: 'https://github.com/TishaJhabak1014/doodlew/',
      demo: 'https://tishajhabak1014.github.io/doodlew/'
    },
    {
      title: 'Lexical Lasso',
      image: 'assets/lexicallasso.png',
      description: 'Lexical Lasso is a captivating Hangman game implementation where players rope in words by guessing letters, all to the tune of Wild West-inspired melodies. Enjoy some time of wordplay fun, and keep your guesses sharp as the music plays!',
      github: 'https://github.com/TishaJhabak1014/lexical-lasso',
      demo: 'https://tishajhabak1014.github.io/lexical-lasso'
    }
  ];

  return (
    <section id="projects" style={{
      position: 'relative',
      paddingTop: '4vh',
      margin: '0 10rem',
      boxSizing: 'border-box',
      minHeight: 'fit-content'
    }}>
      <p style={{ textAlign: 'center', fontWeight: 600, margin: 0 }}>Check Out</p>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', margin: 0 }}>My Projects</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{ flex: '1', minWidth: '300px' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/arrow.png`}
        alt="Arrow"
        style={{
          position: 'absolute',
          right: '-5rem',
          bottom: '2.5rem',
          height: '2rem',
          cursor: 'pointer',
          transform: 'rotate(180deg)'
        }}
        onClick={() => window.location.href = '#profile'}
      />
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '70vh',
      marginTop: '100px',
      margin: '100px 10rem 0 10rem'
    }}>
      <p style={{ textAlign: 'center', fontWeight: 600, margin: 0 }}>Get in Touch?</p>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', margin: 0 }}>Reach Out</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '2rem',
        border: 'rgb(53, 53, 53) 0.1rem solid',
        borderColor: 'rgb(163, 163, 163)',
        background: 'rgb(250, 250, 250)',
        margin: '2rem auto',
        padding: '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          margin: '1rem'
        }}>
          <img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Email" style={{ height: '2.5rem' }} />
          <p style={{ fontSize: 'larger', margin: 0 }}>
            <a href="mailto:iamtisha22@gmail.com" style={{ color: 'rgb(85, 85, 85)', textDecoration: 'none' }}>
              iamtisha22@gmail.com
            </a>
          </p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          margin: '1rem'
        }}>
          <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" style={{ height: '2rem' }} />
          <p style={{ fontSize: 'larger', margin: 0 }}>
            <a href="https://www.linkedin.com/in/tisha-jhabak-91a2a7206/" style={{ color: 'rgb(85, 85, 85)', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ height: '26vh', margin: '0 1rem' }}>
      <p style={{ textAlign: 'center', margin: 0 }}>Thanks for dropping by : )</p>
      <br />
      <p style={{ textAlign: 'center', margin: 0 }}>Copyright © 2022-{currentYear} Tisha Jhabak. All Rights Reserved.</p>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#f1e4d9',
      margin: 0,
      padding: 0
    }}>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
            background-color: #f1e4d9;
          }
          
          p {
            color: rgb(85, 85, 85);
          }
          
          h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <Navigation isMobile={isMobile} />
      <ProfileSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}