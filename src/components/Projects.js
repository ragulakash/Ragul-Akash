import React from "react";

const projectData = [
  {
    title: "Personalized Medical Recommendation System",
    url: "https://github.com/ragulakash/Personalized-Medical-Recommendation-System",
    description:
      "A Flask web app that uses advanced machine learning to predict diseases based on user symptoms. It offers tailored medicine suggestions, prescription details, and fitness advice, all with a strong focus on privacy and continuous improvement. The system leverages multiple datasets and provides a user-friendly interface for personalized healthcare recommendations.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    fallback: { bg: "#e3f2fd", icon: "🩺" }
  },
  {
    title: "Cat and Dog Classifier",
    url: "https://github.com/ragulakash/Cat-and-Dog-Classifier",
    description:
      "A deep learning-based binary image classifier built in a Jupyter Notebook using TensorFlow/Keras. The model distinguishes between images of cats and dogs, covering data preprocessing, CNN model development, training, evaluation, and prediction visualization. The project demonstrates the end-to-end workflow of an image classification task.",
    image: "https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=400&q=80",
    fallback: { bg: "#fff3e0", icon: "🐾" }
  },
  {
    title: "Spam Classification using NLTK",
    url: "https://github.com/ragulakash/Spam-Classification-using-NLTK",
    description:
      "A machine learning project that utilizes the NLTK library to classify messages as spam or not spam. The project involves text preprocessing, feature extraction, and model training using various algorithms. It demonstrates practical NLP techniques for real-world spam detection tasks.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    fallback: { bg: "#fce4ec", icon: "✉️" }
  }
];

const ProjectImage = ({ src, alt, fallback }) => {
  const [error, setError] = React.useState(false);
  return error ? (
    <div style={{
      width: "100%",
      height: 160,
      minHeight: 160,
      maxHeight: 200,
      background: fallback.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 48,
      borderRadius: 16
    }}>
      {fallback.icon}
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16, minHeight: 160, maxHeight: 200 }}
      onError={() => setError(true)}
    />
  );
};

const Projects = () => (
  <div style={{
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    animation: "fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)"
  }}>
    <section
      id="projects"
      className="section projects-section glass-card"
      style={{
        width: "100%",
        maxWidth: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "3rem 1.5rem",
      }}
    >
      <h2 className="section-title" tabIndex={0}>
        Projects
      </h2>
      <div className="projects-list" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem", width: "100%" }}>
        {projectData.map((proj, i) => (
          <div
            key={proj.title}
            className="card project-item"
            style={{
              display: "flex",
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              alignItems: "stretch",
              gap: "2rem",
              maxWidth: 700,
              width: "100%",
              background: "linear-gradient(120deg, #f3e7fa 0%, #e3f2fd 100%)",
              borderRadius: 20,
              boxShadow: "0 4px 24px rgba(124,77,255,0.10)",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative"
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,77,255,0.18)";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,77,255,0.10)";
              e.currentTarget.style.transform = "none";
            }}
            onClick={() => window.open(proj.url, "_blank")}
          >
            <div style={{
              flex: "0 0 180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ede7f6",
              borderRadius: 16,
              overflow: "hidden",
              minHeight: 160,
              maxHeight: 200,
              boxShadow: "0 2px 8px rgba(124,77,255,0.08)",
              margin: "auto 0"
            }}>
              <ProjectImage src={proj.image} alt={proj.title} fallback={proj.fallback} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left", padding: "0.5rem 0" }}>
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>
                <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ color: "#7c4dff", textDecoration: "none", transition: "color 0.2s" }}>
                  {proj.title}
                </a>
              </h3>
              <p style={{ margin: "1rem 0 0 0", color: "#444", fontSize: "1.05rem", lineHeight: 1.6 }}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  </div>
);

export default Projects; 