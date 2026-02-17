import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Terminal } from "lucide-react";
import { compiler } from "../lib/compiler";

const DEFAULT_CODE = `// Welcome to TejX Playground
let user = "Alice";
let score = 100;

let message = \`User \${user} has a score of \${score}\`;
print(message);

// Modern features
let data: object = {
  config: {
    setting: "Enabled"
  }
};

let setting = data?.config?.setting ?? "Default";
print("Setting: ", setting);
`;

const Playground: React.FC = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    compiler.init();
  }, []);

  const runCode = async () => {
    setIsRunning(true);
    const result = await compiler.compile(code);
    setOutput(result.output);
    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
  };

  return (
    <div
      className="playground-container glass-card"
      style={{
        padding: "1rem",
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="playground-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          alignItems: "center",
          flexShrink: 0, // Prevent header from shrinking
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Terminal size={20} className="accent-text" />
          <span style={{ fontWeight: 600 }}>TejX Playground</span>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={resetCode}
            className="btn-secondary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#94a3b8",
            }}
          >
            <RotateCcw size={16} /> Reset
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="btn-primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "var(--accent-primary)",
              padding: "0.5rem 1.2rem",
              borderRadius: "12px",
              fontWeight: 600,
              opacity: isRunning ? 0.7 : 1,
            }}
          >
            <Play size={16} fill="white" /> {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div
        className="editor-layout"
        style={{
          display: "flex",
          gap: "1rem",
          flex: 1, // Fill available space
          minHeight: 0, // CRITICAL for flex height inheritance
        }}
      >
        <div
          style={{
            flex: 1.5,
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid var(--glass-border)",
            position: "relative", // Required for absolute child
            minHeight: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Editor
              height="100%"
              defaultLanguage="typescript"
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "var(--font-mono)",
                automaticLayout: true,
                scrollBeyondLastLine: false,
                lineNumbers: "on",
                roundedSelection: true,
                padding: { top: 0, bottom: 0 },
                fixedOverflowWidgets: true,
              }}
            />
          </div>
        </div>
        <div
          className="console-output"
          style={{
            flex: 1,
            height: "100%",
            background: "#000",
            borderRadius: "12px",
            padding: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            border: "1px solid var(--glass-border)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              color: "#64748b",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            Output
          </div>
          {output.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.startsWith("[") ? "#7c3aed" : "#fff",
                marginBottom: "0.2rem",
              }}
            >
              <span style={{ color: "#444", marginRight: "0.5rem" }}>
                {">"}
              </span>
              {line}
            </div>
          ))}
          {output.length === 0 && (
            <div style={{ color: "#444" }}>
              Empty output. Press "Run" to execute.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
