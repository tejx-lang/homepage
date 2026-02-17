import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  Play,
  Code,
  FileCode,
  Cpu,
  Zap,
  Shield,
  Command,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CodeBlock: React.FC<{
  code: string;
  language?: string;
  label?: string;
  showLineNumbers?: boolean;
}> = ({ code, language = "bash", label, showLineNumbers = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#050505] my-6 shadow-2xl transition-all duration-300 hover:border-purple-500/30"
    >
      <div className="flex justify-between items-center px-4 py-3 bg-white/5 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 px-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <div className="flex items-center gap-2">
            {language === "bash" ? (
              <Terminal size={14} className="text-purple-400" />
            ) : (
              <FileCode size={14} className="text-blue-400" />
            )}
            <span className="text-[10px] text-gray-400 font-mono font-bold tracking-widest uppercase">
              {label || language}
            </span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="relative overflow-hidden group/btn text-gray-400 hover:text-white transition-all flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="flex items-center gap-2 text-green-400"
              >
                <Check size={14} strokeWidth={3} />
                <span>Copied</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="flex items-center gap-2"
              >
                <Copy size={14} />
                <span>Copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="p-6 overflow-x-auto custom-scrollbar bg-gradient-to-b from-transparent to-purple-500/5">
        <pre className="font-mono text-[13px] md:text-sm text-gray-300 whitespace-pre leading-relaxed flex">
          {showLineNumbers && (
            <div className="pr-4 text-gray-600 select-none text-right flex-shrink-0 border-r border-white/5 mr-4">
              {lines.map((_, idx) => (
                <div key={idx}>{idx + 1}</div>
              ))}
            </div>
          )}
          <code className="block flex-grow">{code.trim()}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const StepSection: React.FC<{
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
  isLast?: boolean;
}> = ({ number, title, description, children, isLast }) => (
  <div className="relative pl-12 md:pl-20 mb-20">
    {/* Progress Line */}
    {!isLast && (
      <div className="absolute left-[23px] md:left-[39px] top-12 bottom-[-80px] w-px bg-gradient-to-b from-purple-500 to-transparent opacity-30" />
    )}

    {/* Step Badge */}
    <div className="absolute left-0 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-[#0a0a0a] border-2 border-purple-500/50 flex items-center justify-center text-lg md:text-2xl font-black text-white shadow-2xl">
          {number}
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="mb-6">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative">
        {/* Ambient glow */}
        <div className="absolute -inset-10 bg-purple-500/5 rounded-[40px] blur-3xl -z-10" />
        {children}
      </div>
    </motion.div>
  </div>
);

const FeatureTag: React.FC<{ icon: any; label: string; color: string }> = ({
  icon: Icon,
  label,
  color,
}) => (
  <div
    className={`flex items-center gap-2 px-3 py-1 rounded-full border ${color} bg-opacity-10 backdrop-blur-sm text-xs font-bold uppercase tracking-wider`}
  >
    <Icon size={14} />
    <span>{label}</span>
  </div>
);

const GetStarted: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020202] text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-8 backdrop-blur-md">
              <Zap size={16} fill="currentColor" />
              <span className="tracking-widest uppercase">
                Quick Start v1.0
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              Build the <span className="gradient-text">Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              TejX is a high-performance, single-threaded language designed for
              simplicity and speed. Get it running in seconds.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Requirement Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              { icon: Shield, title: "Verified", desc: "Signed binary" },
              { icon: Zap, title: "Zero Config", desc: "No env setup" },
              { icon: Cpu, title: "Universal", desc: "Linux / macOS" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-purple-500/50 transition-all"
              >
                <item.icon
                  className="text-purple-500 mb-4 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-12">
            <StepSection
              number={1}
              title="Global Install"
              description="One command to rule them all. The installer automatically configures the LLVM backend and your binary path."
            >
              <div className="glass-card p-1 border border-white/10 bg-black/40 shadow-inner">
                <CodeBlock
                  label="cURL"
                  code="curl -fsSL https://tejx.dev/install.sh | sh"
                />
              </div>
              <div className="mt-6 flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <HelpCircle
                  className="text-purple-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  Running on Windows? We recommend using{" "}
                  <span className="text-white font-bold">WSL2</span> for the
                  best performance and compatibility with our LLVM-based
                  toolchain.
                </p>
              </div>
            </StepSection>

            <StepSection
              number={2}
              title="Initialize Project"
              description="TejX projects are lightweight. No large node_modules or heavy configurations needed."
            >
              <CodeBlock
                label="Terminal"
                code="mkdir my-awesome-project && cd my-awesome-project"
              />
              <div className="mt-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                <div className="relative glass-card bg-black/80 border border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileCode className="text-blue-500" size={24} />
                    <div>
                      <h5 className="font-bold">main.tx</h5>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">
                        Binary Entry Point
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 text-xs font-mono bg-white/5 rounded-lg border border-white/10 text-gray-400">
                    UTF-8 Encoded
                  </div>
                </div>
              </div>
            </StepSection>

            <StepSection
              number={3}
              title="Logic & Syntax"
              description="Type systems that help, not hinder. Write your entry point with a familiar but powerful syntax."
            >
              <CodeBlock
                showLineNumbers
                language="tejx"
                label="main.tx"
                code={`// Welcome to the TejX entry point
func main() {
    let message = "Engine started";
    print(message);
    
    let sum = add(5, 7);
    print("Computed result: " + sum);
}

func add(a: int, b: int) -> int {
    return a + b;
}`}
              />
              <div className="flex flex-wrap gap-3 mt-4">
                <FeatureTag
                  icon={Zap}
                  label="Direct LLVM Emit"
                  color="border-yellow-500/30 text-yellow-400"
                />
                <FeatureTag
                  icon={Shield}
                  label="Static Types"
                  color="border-blue-500/30 text-blue-400"
                />
              </div>
            </StepSection>

            <StepSection
              number={4}
              title="Blast Off"
              description="The TejX compiler performs deep optimisations before emitting machine code. Experience the speed."
              isLast
            >
              <CodeBlock label="Terminal" code="tejx run main.tx" />

              <div className="mt-8 space-y-4">
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 font-mono text-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 mb-4 pb-4 border-b border-white/5">
                    <Command size={14} />
                    <span className="uppercase text-[10px] font-bold tracking-widest">
                      Standard Output
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-purple-400">Engine started</p>
                    <p className="text-white">Computed result: 12</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 px-2">
                  <Check size={12} className="text-green-500" />
                  <span>Compilation finished in 42ms</span>
                </div>
              </div>
            </StepSection>
          </div>

          {/* CTA Section */}
          <div className="mt-40 text-center pb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
              Where to <span className="gradient-text">Go Next?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link to="/docs" className="group relative">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500 to-blue-600 rounded-[32px] blur-sm opacity-20 group-hover:opacity-100 transition duration-500" />
                <div className="relative glass-card p-10 flex flex-col items-center gap-6 h-full border border-white/10 bg-[#080808]/90 group-hover:bg-[#0a0a0a] transition duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition duration-500">
                    <Code size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Deep Dive Docs</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Explore the language reference, standard library, and
                      advanced compiler flags.
                    </p>
                  </div>
                  <div className="mt-4 text-purple-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore API <ArrowRight size={18} />
                  </div>
                </div>
              </Link>

              <Link to="/playground" className="group relative">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-emerald-600 rounded-[32px] blur-sm opacity-20 group-hover:opacity-100 transition duration-500" />
                <div className="relative glass-card p-10 flex flex-col items-center gap-6 h-full border border-white/10 bg-[#080808]/90 group-hover:bg-[#0a0a0a] transition duration-300">
                  <div className="w-16 h-16 rounded-3xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition duration-500">
                    <Play size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Live Playground</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Test your ideas instantly in the browser using our
                      WASM-compiled engine.
                    </p>
                  </div>
                  <div className="mt-4 text-blue-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Open Lab <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
