import React from "react";
import { motion } from "framer-motion";

const CodeShowcase: React.FC = () => {
  const codeSnippet = `// Simple, fast, and safe
func fib(n: int) -> int {
    if n <= 1 {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

func main() {
    print("Fibonacci(10): " + fib(10));
}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="rounded-xl overflow-hidden bg-[#0F1117] border border-white/10 shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-auto text-xs text-gray-500 font-mono">main.tx</div>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed">
            <code className="text-gray-300">
              {codeSnippet.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-gray-700 w-8 flex-shrink-0 select-none text-right pr-4">
                    {i + 1}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(
                          /\b(func|return|if|else|let|const)\b/g,
                          '<span class="text-purple-400 font-bold">$1</span>',
                        )
                        .replace(
                          /\b(int|string|bool)\b/g,
                          '<span class="text-yellow-400">$1</span>',
                        )
                        .replace(
                          /("(?:[^"\\]|\\.)*")/g,
                          '<span class="text-green-400">$1</span>',
                        )
                        .replace(
                          /(\/\/.*)/g,
                          '<span class="text-gray-500 italic">$1</span>',
                        )
                        .replace(
                          /\b(main|fib|print)\b/g,
                          '<span class="text-blue-400">$1</span>',
                        ),
                    }}
                  />
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeShowcase;
