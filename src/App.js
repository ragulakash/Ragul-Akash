import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AnimatedBlobs = () => (
  <>
    <div style={{
      position: "fixed",
      top: -40,
      left: -40,
      width: 480,
      height: 480,
      zIndex: 2,
      pointerEvents: "none",
      filter: "blur(40px)",
      opacity: 0.16,
      animation: "blobMove1 14s ease-in-out infinite alternate"
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 60% 40%, #b388ff 0%, #8ec5fc 100%)"
      }} />
    </div>
    <div style={{
      position: "fixed",
      bottom: -40,
      right: -40,
      width: 480,
      height: 480,
      zIndex: 2,
      pointerEvents: "none",
      filter: "blur(40px)",
      opacity: 0.13,
      animation: "blobMove2 18s ease-in-out infinite alternate"
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 60%, #7c4dff 0%, #fce4ec 100%)"
      }} />
    </div>
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      width: 220,
      height: 220,
      zIndex: 2,
      pointerEvents: "none",
      filter: "blur(32px)",
      opacity: 0.10,
      transform: "translate(-50%, -50%)",
      animation: "blobMove3 20s ease-in-out infinite alternate"
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, #64b5f6 0%, #ede7f6 100%)"
      }} />
    </div>
    <style>{`
      @keyframes blobMove1 {
        0% { transform: scale(1) translate(0,0); }
        100% { transform: scale(1.18) translate(60px, 80px); }
      }
      @keyframes blobMove2 {
        0% { transform: scale(1) translate(0,0); }
        100% { transform: scale(1.15) translate(-60px, -80px); }
      }
      @keyframes blobMove3 {
        0% { transform: scale(1) translate(0,0); }
        100% { transform: scale(1.08) translate(30px, -30px); }
      }
    `}</style>
  </>
);

const SideAccentBars = () => (
  <>
    <div className="side-accent-bar left-bar" />
    <div className="side-accent-bar right-bar" />
  </>
);

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <AnimatedBlobs />
      <SideAccentBars />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App; 