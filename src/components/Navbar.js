import React, { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function getSectionOffsets() {
  return navItems.map(item => {
    const el = document.getElementById(item.id);
    if (!el) return { id: item.id, top: Infinity };
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { id: item.id, top: rect.top + scrollTop };
  });
}

const Navbar = () => {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = getSectionOffsets();
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const offset = 120;
      let current = navItems[0].id;
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPos + offset >= offsets[i].top) {
          current = offsets[i].id;
        }
      }
      setActive(current);
      // Set .active class on section titles
      document.querySelectorAll('.section-title').forEach(el => {
        const section = el.closest('section');
        if (section && section.id === current) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar glass-card" style={{
      position: "fixed",
      top: 24,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 100,
      width: "90%",
      maxWidth: 1100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      borderRadius: 24,
      boxShadow: "0 4px 24px rgba(124,77,255,0.10)",
      backdropFilter: "blur(12px)",
      background: "rgba(255,255,255,0.75)",
      margin: "0 auto 2.5rem auto",
      transition: "box-shadow 0.2s, background 0.2s"
    }}>
      <div className="navbar-logo" style={{ fontWeight: 900, fontSize: "1.5rem", color: "#7c4dff", letterSpacing: 2 }}>
        Portfolio
      </div>
      <ul className="navbar-links" style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {navItems.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link${active === item.id ? " active" : ""}`}
            >
              <span className="nav-link-text">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 