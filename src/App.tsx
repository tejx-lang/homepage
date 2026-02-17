import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Code, Github, ArrowRight } from "lucide-react";
import Playground from "./components/Playground";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="nebula-bg" />

      {/* Navigation */}
      <nav
        className="container"
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-1px" }}
        >
          Tej<span style={{ color: "var(--accent-primary)" }}>X</span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#features" style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
            Features
          </a>
          <a
            href="#playground"
            style={{ fontSize: "0.9rem", color: "#94a3b8" }}
          >
            Playground
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="glass-card"
            style={{
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="container"
        style={{ textAlign: "center", paddingTop: "6rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="glass-card"
            style={{
              display: "inline-flex",
              padding: "0.4rem 1rem",
              fontSize: "0.8rem",
              color: "var(--accent-primary)",
              marginBottom: "2rem",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            v1.0.0 is now live ✨
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            The Future of <br />
            <span className="gradient-text">Modern Scripting</span>
          </h1>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 3rem",
              color: "#94a3b8",
              fontSize: "1.2rem",
            }}
          >
            TejX is a high-performance, type-safe scripting language designed
            for humans and built for speed.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
          >
            <button
              className="glass-card"
              style={{
                background: "var(--accent-primary)",
                color: "white",
                padding: "1rem 2rem",
                fontWeight: 600,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button
              className="glass-card btn-outline"
              style={{
                padding: "1rem 2rem",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Built for performance.
          </h2>
          <p style={{ color: "#64748b" }}>
            Experience the power of a compiler with the simplicity of a script.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: <Zap color="#7c3aed" />,
              title: "Blazing Fast",
              desc: "Compiled with LLVM for native performance on any hardware.",
            },
            {
              icon: <Shield color="#3b82f6" />,
              title: "Type Safe",
              desc: "Advanced static analysis catches bugs before they even happen.",
            },
            {
              icon: <Cpu color="#10b981" />,
              title: "Modern Runtime",
              desc: "Native support for async/await, concurrency, and advanced data structures.",
            },
            {
              icon: <Code color="#f59e0b" />,
              title: "Intuitive Syntax",
              desc: "Familiar feel with powerful features like pattern matching and optional chaining.",
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              <div
                style={{
                  marginBottom: "1.5rem",
                  background: "rgba(255,255,255,0.05)",
                  padding: "1rem",
                  borderRadius: "16px",
                  width: "fit-content",
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                {feat.title}
              </h3>
              <p style={{ color: "#94a3b8" }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="playground" className="container" style={{ padding: "0" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Try it in your browser.
          </h2>
          <p style={{ color: "#64748b" }}>
            No installation required. Write, run, and experiment with TejX
            instantly.
          </p>
        </div>
        <Playground />
      </section>

      {/* Footer */}
      <footer
        className="container"
        style={{
          borderTop: "1px solid var(--glass-border)",
          padding: "4rem 0",
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          TejX
        </div>
        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
          © 2026 TejX Language Team. Built with speed and safety.
        </p>
      </footer>
    </div>
  );
};

export default App;
