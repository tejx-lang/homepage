import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  runCommand?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  filename,
  runCommand,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] my-6 group">
      {(filename || runCommand) && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-xs font-mono text-gray-400 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {filename && <span>{filename}</span>}
          </div>
          {runCommand && (
            <div className="flex items-center gap-2 text-green-400">
              <Terminal size={12} />
              <span className="font-bold">{runCommand}</span>
            </div>
          )}
        </div>
      )}

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>

        <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-4 font-mono text-sm overflow-x-auto`}
              style={{ ...style, backgroundColor: "transparent" }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 select-none text-gray-600 text-right pr-4 opacity-50">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
