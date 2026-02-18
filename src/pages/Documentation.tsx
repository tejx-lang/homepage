import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  ChevronRight,
  Code,
  Layers,
  Shield,
  Zap,
  Menu,
  X,
  Info,
  Box,
  Activity,
  Server,
  List,
  AlertTriangle,
  Package,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import GetStarted from "./GetStarted";
import CodeBlock from "../components/CodeBlock";

interface DocSection {
  id: string;
  title: string;
  icon: any;
  subsections?: { id: string; title: string }[];
  content: React.ReactNode;
}

const Documentation: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = sectionId || "intro";

  const sections: DocSection[] = [
    {
      id: "intro",
      title: "Introduction",
      icon: Book,
      subsections: [
        { id: "overview", title: "Overview" },
        { id: "principles", title: "Core Principles" },
      ],
      content: (
        <>
          <div className="mb-12">
            <h2
              id="overview"
              className="text-4xl md:text-5xl font-black mb-6 tracking-tight gradient-text"
            >
              Introduction
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">
              TejX is a next-generation, multithreaded programming language
              engineered for performance and safety. Built on the LLVM 18
              infrastructure, it offers the ergonomic simplicity of TypeScript
              while providing the raw power and deterministic resource
              management of C++ and Rust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Zap,
                title: "Near-Native Performance",
                desc: "Compiled directly to machine code via LLVM with aggressive optimizations.",
                color: "text-purple-400",
                bg: "bg-purple-500/10",
              },
              {
                icon: Shield,
                title: "Safety Without GC",
                desc: "A strict ownership-based memory model prevents leaks and races at compile-time.",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                icon: Layers,
                title: "Native Concurrency",
                desc: "First-class support for multithreading and parallel execution on modern hardware.",
                color: "text-green-400",
                bg: "bg-green-500/10",
              },
              {
                icon: Code,
                title: "Familiar DX",
                desc: "TypeScript-inspired syntax ensures a shallow learning curve for modern developers.",
                color: "text-yellow-400",
                bg: "bg-yellow-500/10",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${feat.bg} ${feat.color} flex items-center justify-center mb-4`}
                >
                  <feat.icon size={20} />
                </div>
                <h4 className="font-bold mb-2">{feat.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          <section id="why-tejx" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">
                ?
              </span>
              Why TejX?
            </h3>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
              <p>
                Modern application development is often a trade-off between
                developer productivity and system performance. Languages like
                JavaScript and Python offer great ergonomics but rely on heavy
                runtimes and garbage collection. Conversely, C++ and Rust
                provide maximum performance but come with a steep learning curve
                and complex syntax.
              </p>
              <p>
                <strong>TejX bridges this gap.</strong> It is designed for
                developers who need the speed of a systems language without
                sacrificing the clean, expressive syntax of modern web
                technologies. Whether you are building high-frequency trading
                systems, game engines, or high-throughput backend services, TejX
                provides the tools you need to succeed.
              </p>
            </div>
          </section>

          <section id="principles" className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Performance by Default",
                  content:
                    "Every language feature is designed to be zero-cost. We prioritize efficient machine code generation and minimal runtime overhead.",
                },
                {
                  title: "Safety at Compile-Time",
                  content:
                    "Using a sophisticated borrow checker, TejX catches memory errors, data races, and NULL pointer exceptions before your code even runs.",
                },
                {
                  title: "Pragmatic Tooling",
                  content:
                    "A systems language shouldn't be hard to use. We aim for the best-in-class compiler diagnostics and a seamless developer experience.",
                },
              ].map((p, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight
                      className="text-purple-500 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-200 mb-1">{p.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {p.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ),
    },
    {
      id: "get-started",
      title: "Get Started",
      icon: Zap,
      subsections: [
        { id: "install", title: "Quick Install" },
        { id: "init", title: "Setup Project" },
        { id: "example", title: "Create Example" },
        { id: "run", title: "Build & Run" },
      ],
      content: <GetStarted />,
    },
    {
      id: "basics",
      title: "Language Basics",
      icon: Code,
      subsections: [
        { id: "variables", title: "Variables" },
        { id: "control-flow", title: "Control Flow" },
      ],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Language Basics
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get familiar with the core syntax and grammar of TejX.
          </p>

          <section id="variables" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Variables & Data Types</h3>
            <p className="text-gray-400 mb-4">
              TejX supports strong static typing with powerful inference. Use{" "}
              <code className="text-purple-400">let</code> for mutable variables
              and <code className="text-purple-400">const</code> for constants.
            </p>
            <CodeBlock
              filename="variables.tx"
              code={`// Primitive Types
let count: int = 10;
let price: float = 99.99;
let isActive: bool = true;
let message: string = "Hello Nova";

// Type Inference
let x = 100; // inferred as int
let name = "TejX"; // inferred as string

// Constants
const PI = 3.14159;
const MAX_USERS = 1000;

// Scoping
{
    let local = "I am local";
    print(local);
}
// print(local); // Error: local is undefined here`}
            />
          </section>

          <section id="operators" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Operators</h3>
            <p className="text-gray-400 mb-4">
              Full suite of arithmetic, relational, and logical operators.
            </p>
            <CodeBlock
              code={`// Arithmetic
let sum = 10 + 5;
let diff = 10 - 5;
let prod = 10 * 5;
let quot = 10 / 2;
let mod = 10 % 3;

// Compound Assignment
let x = 10;
x += 5; // 15
x *= 2; // 30

// Logical
let res = (x > 10) && (x < 100);
let isValid = !res || true;

// Type Check
if (typeof(x) == "int") {
    print("x is an integer");
}`}
            />
          </section>

          <section id="control-flow">
            <h3 className="text-2xl font-bold mb-4">Control Flow</h3>
            <p className="text-gray-400 mb-4">
              Comprehensive control structures for program logic.
            </p>

            <h4 className="text-lg font-bold mb-2 text-purple-300">
              Conditionals
            </h4>
            <CodeBlock
              code={`let score = 85;

if (score >= 90) {
    print("Grade: A");
} else if (score >= 80) {
    print("Grade: B");
} else {
    print("Grade: C");
}

// Switch Statement
switch (score) {
    case 100: print("Perfect!"); break;
    case 0: print("Failed"); break;
    default: print("Score is ", score);
}`}
            />

            <h4 className="text-lg font-bold mb-2 text-purple-300">Loops</h4>
            <CodeBlock
              code={`// C-Style For Loop
for (let i = 0; i < 5; i++) {
    if (i == 2) continue; // Skip 2
    if (i == 4) break;    // Stop at 4
    print("i: ", i);
}

// While Loop
let j = 0;
while (j < 3) {
    print("j: ", j);
    j++;
}

// For-Of Loop (Iterables)
let items = [10, 20, 30];
for (let item of items) {
    print("Item: ", item);
}`}
            />
          </section>

          <section
            id="basics-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="basics_demo.tx"
              runCommand="tejx run basics_demo.tx"
              code={`function main() {
    let name = "TejX User";
    let score = 95;

    print("Hello, ", name);

    if (score > 90) {
        print("Rank: S");
    } else {
        print("Rank: A");
    }

    print("Counting down:");
    // C-style loop
    for(let i = 3; i > 0; i--) {
        print(i);
    }
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "functions",
      title: "Functions",
      icon: Zap,
      subsections: [
        { id: "func-basics", title: "Basics" },
        { id: "func-entry", title: "Entry Point" },
      ],
      content: (
        <>
          <h2
            id="func-basics"
            className="text-4xl font-black mb-6 tracking-tight"
          >
            Functions
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            First-class functions with support for lambdas and closures.
          </p>
          <div className="mb-6">
            <CodeBlock
              filename="functions.tx"
              code={`// Named Function with Return Type
function add(a: int, b: int):int {
    return a + b;
}

// Default Arguments
function greet(name: string = "Guest") {
    print("Hello, ", name);
}

// Arrow Functions (Lambdas)
let square = (x: int) => x * x;

// Higher-Order Functions
function process(val: int, op: (n: int) => int) {
    return op(val);
}

// Closures
function makeAdder(base: int):(int) => int {
    return (n: int) => base + n;
}

let add5 = makeAdder(5);
print(add5(10)); // 15`}
            />
          </div>

          <section
            id="funcs-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="funcs_demo.tx"
              runCommand="tejx run funcs_demo.tx"
              code={`function add(a: int, b: int):int {
    return a + b;
}

function process(n: int, op: (x: int) => int):int {
    return op(n);
}

function main() {
    let res = add(10, 20);
    print("Add: ", res);

    let square = (x: int) => x * x;
    print("Square 5: ", process(5, square));
}`}
            />
          </section>
          <div
            id="func-entry"
            className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 mb-8"
          >
            <h4 className="flex items-center gap-2 font-bold text-blue-300 mb-2">
              <Info size={18} /> Entry Point
            </h4>
            <p className="text-sm text-gray-400">
              Every TejX program requires a{" "}
              <code className="text-white font-bold">function main()</code> as
              its starting point.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "data-structures",
      title: "Data Structures",
      icon: List,
      subsections: [
        { id: "arrays", title: "Arrays" },
        { id: "structs-obj", title: "Structs & Objects" },
        { id: "collections", title: "Collections" },
      ],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Data Structures
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Efficient primitives and standard collections.
          </p>

          <section id="arrays" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Arrays</h3>
            <p className="text-gray-400 mb-4">
              Dynamic, growable arrays with a rich standard library of methods.
            </p>
            <CodeBlock
              code={`// Creation
let numbers: int[] = [1, 2, 3];
let names = ["Alice", "Bob"];

// Access & Mutation
let first = numbers[0];
numbers[1] = 99;

// Methods
numbers.push(4);             // Append: [1, 99, 3, 4]
let last = numbers.pop();    // Remove last: 4
let len = numbers.length;    // Property: 3

// Functional Methods
let doubled = numbers.map(x => x * 2);
let evens = numbers.filter(x => x % 2 == 0);
let total = 0;
numbers.forEach(x => total += x);

// Spread Operator
let merged = [...numbers, 100, 200];

// Destructuring
let [head, ...tail] = merged;`}
            />
          </section>

          <section id="structs-obj" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Structs (Anonymous Objects)
            </h3>
            <p className="text-gray-400 mb-4">
              Lightweight data structures for organizing related data.
            </p>
            <CodeBlock
              code={`// Object Literal
let user = {
    id: 1,
    name: "TejX",
    metadata: {
        role: "admin",
        active: true
    }
};

// Access
print(user.name);
print(user.metadata.role);

// Destructuring
let { name, metadata: { role } } = user;
print(name, role); // TejX admin

// Array of Objects
let users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];`}
            />
          </section>

          <section id="collections">
            <h3 className="text-2xl font-bold mb-4">Standard Collections</h3>
            <p className="text-gray-400 mb-4">
              High-performance data structures available in{" "}
              <code className="text-purple-400">std:collections</code>.
            </p>
            <CodeBlock
              filename="collections_demo.tx"
              code={`import { Stack, Queue, Map, Set } from "std:collections";

// Stack (LIFO)
let s = new Stack();
s.push(10);
s.push(20);
print(s.pop()); // 20

// Queue (FIFO)
let q = new Queue();
q.enqueue("Task 1");
q.dequeue();

// Map (Key-Value)
let config = new Map();
config.put("port", 8080);
config.put("host", "localhost");
print(config.at("port"));

// Set (Unique Values)
let unique = new Set();
unique.add(1);
unique.add(1); // Duplicate ignored
print(unique.size()); // 1`}
            />
          </section>

          <section
            id="ds-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="ds_demo.tx"
              runCommand="tejx run ds_demo.tx"
              code={`import { Stack, Map } from "std:collections";

function main() {
    // Array
    let nums = [10, 20, 30];
    nums.push(40);
    print("Array[3]: ", nums[3]);

    // Stack
    let s = new Stack();
    s.push("First");
    s.push("Second");
    print("Pop Stack: ", s.pop());

    // Map
    let scores = new Map();
    scores.put("Alice", 100);
    print("Alice Score: ", scores.at("Alice"));
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "errors",
      title: "Error Handling",
      icon: AlertTriangle,
      subsections: [
        { id: "try-catch", title: "Try/Catch" },
        { id: "custom-errors", title: "Custom Errors" },
      ],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Error Handling
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Robust error handling with try-catch and custom error types.
          </p>

          <section id="try-catch" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Try, Catch, Finally</h3>
            <p className="text-gray-400 mb-4">
              Safe error propagation and resource cleanup.
            </p>
            <CodeBlock
              code={`function divide(a: int, b: int):int {
    if (b == 0) {
        throw "Division by zero";
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    print(result);
} catch (e) {
    print("Error caught: ", e);
} finally {
    print("Execution complete");
}

// Nested Try-Catch matches scopes correctly
try {
    try {
        throw "Inner error";
    } catch(e) {
        throw e; // Rethrow
    }
} catch(e) {
    print("Handled in outer block");
}`}
            />
          </section>

          <section id="custom-errors">
            <h3 className="text-2xl font-bold mb-4">Custom Errors</h3>
            <p className="text-gray-400 mb-4">
              Extend the base <code>Error</code> class for typed exception
              handling.
            </p>
            <CodeBlock
              code={`class HttpError extends Error {
    statusCode: int;

    constructor(message: string, code: int) {
        super(message);
        this.statusCode = code;
    }
}

try {
    throw new HttpError("Not Found", 404);
} catch (e) {
    if (e.statusCode == 404) {
        print("Page not found");
    }
    print("Error: ", e.message);
}`}
            />
          </section>

          <section
            id="errors-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="errors_demo.tx"
              runCommand="tejx run errors_demo.tx"
              code={`class AuthError extends Error {
    constructor(msg: string) { super(msg); }
}

function login(token: string) {
    if (token == "") throw new AuthError("Empty Token");
    print("Logged in with ", token);
}

function main() {
    try {
        login("");
    } catch (e) {
        if (e instanceof AuthError) {
            print("Auth Failed: ", e.message);
        } else {
            print("Unknown Error: ", e);
        }
    } finally {
        print("Login attempt finished.");
    }
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "modules",
      title: "Modules",
      icon: Package,
      subsections: [{ id: "imports", title: "Imports & Exports" }],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">Modules</h2>
          <p className="text-xl text-gray-400 mb-8">
            Organize code into reusable files.
          </p>

          <section id="imports">
            <h3 className="text-2xl font-bold mb-4">Imports & Exports</h3>
            <CodeBlock
              filename="math.tx"
              code={`// Named Export
export function add(a: int, b: int):int {
    return a + b;
}

// Export Constant
export const PI = 3.14;

// Default Export
export default function multiply(a: int, b: int) => a * b;`}
            />
            <CodeBlock
              filename="main.tx"
              code={`import mul, { add, PI } from "./math.tx";

print(add(10, 20));
print(mul(5, 5));`}
            />
          </section>

          <section
            id="modules-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="modules_demo.tx"
              runCommand="tejx run modules_demo.tx"
              code={`// --- file: math_utils.tx ---
// export function double(n: int):int { return n * 2; }

// --- file: modules_demo.tx ---
import { double } from "./math_utils.tx";

function main() {
    // Assuming math_utils.tx exists
    // print("Double 10: ", double(10));
    
    // For this single-file demo, we simulate logic:
    print("Module system allows splitting code.");
    print("Use 'import' to bring in exported functions.");
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "memory",
      title: "Memory Model",
      icon: Layers,
      subsections: [{ id: "memory-rules", title: "Ownership Rules" }],
      content: (
        <>
          <h2
            id="memory-rules"
            className="text-4xl font-black mb-6 tracking-tight"
          >
            Memory Model
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Predictable resource management through single-ownership.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            TejX avoids the pauses associated with Garbage Collection by using a
            strictly defined ownership system. Every object has exactly one
            owner at any given time.
          </p>
          <div className="glass-card p-8 border-purple-500/20 mb-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Shield size={120} />
            </div>
            <h4 className="text-xl font-bold mb-4">Ownership Rules</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  1
                </span>
                <span>
                  Each value in TejX has a variable that’s called its{" "}
                  <strong>owner</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  2
                </span>
                <span>There can only be one owner at a time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  3
                </span>
                <span>
                  When the owner goes out of scope, the value will be{" "}
                  <strong>dropped</strong> (freed).
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "oop",
      title: "Object Oriented",
      icon: Box,
      subsections: [
        { id: "classes", title: "Classes" },
        { id: "interfaces", title: "Interfaces" },
        { id: "extensions", title: "Extensions" },
      ],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Object Oriented
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Build complex systems with Classes, Interfaces, and Extensions.
          </p>

          <section id="classes" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Classes & Inheritance</h3>
            <CodeBlock
              code={`class Animal {
    name: string;
    
    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Method
    speak(): void {
        print(this.name, " makes a noise.");
    }

    // Static Method
    static create(name: string):Animal {
        return new Animal(name);
    }
}

// Inheritance
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Method Override
    speak(): void {
        print("Woof! I am a ", this.breed);
    }
}

let d = new Dog("Buddy", "Golden Retriever");
d.speak();`}
            />
          </section>

          <section id="interfaces" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Interfaces</h3>
            <CodeBlock
              code={`interface Printable {
    print(): void;
}

class User implements Printable {
    name: string;
    constructor(n: string) { this.name = n; }
    print(): void {
        print("User: ", this.name);
    }
}
`}
            />
          </section>

          <section id="extensions">
            <h3 className="text-2xl font-bold mb-4">Extensions</h3>
            <p className="text-gray-400 mb-4">
              Add methods to existing classes without modifying them.
            </p>
            <CodeBlock
              code={`extension User {
    greet(): void {
        print("Hello, ", this.name);
    }
}`}
            />
          </section>

          <section
            id="oop-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="oop_demo.tx"
              runCommand="tejx run oop_demo.tx"
              code={`interface Shape {
    area(): float;
}

class Circle implements Shape {
    radius: float;
    constructor(r: float) { this.radius = r; }
    
    area(): float {
        return 3.14 * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    w: float; h: float;
    constructor(w: float, h: float) { this.w = w; this.h = h; }

    area(): float { return this.w * this.h; }
}

function main() {
    let shapes: Shape[] = [
        new Circle(5.0),
        new Rectangle(4.0, 6.0)
    ];

    shapes.forEach(s => {
        print("Area: ", s.area());
    });
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "async",
      title: "Async & Concurrency",
      icon: Activity,
      subsections: [{ id: "async-await", title: "Async/Await" }],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Async & Concurrency
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Non-blocking I/O with a single-threaded event loop.
          </p>

          <section id="async-await">
            <h3 className="text-2xl font-bold mb-4">Async/Await & Promises</h3>
            <CodeBlock
              code={`import std:fs;
import std:time;

async function fetchData() {
    print("Fetching...");
    // Mock network delay
    await time.sleep(1000); 
    return "Data Loaded";
}

async function main() {
    // Await promise resolution
    let data = await fetchData();
    print(data);

    // Parallel Execution
    let [res1, res2] = await Promise.all([
        fetchData(),
        fetchData()
    ]);
}`}
            />
          </section>

          <section
            id="async-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="async_demo.tx"
              runCommand="tejx run async_demo.tx"
              code={`import std:time;

async function task(id: int):int {
    print("Start Task ", id);
    await time.sleep(500); // Simulate work
    print("End Task ", id);
    return id * 10;
}

async function main() {
    print("Running tasks parallelly...");
    
    let [r1, r2] = await Promise.all([
        task(1),
        task(2)
    ]);

    print("Results: ", r1, ", ", r2);
}`}
            />
          </section>
        </>
      ),
    },
    {
      id: "stdlib",
      title: "Standard Library",
      icon: Server,
      subsections: [
        { id: "fs", title: "File System" },
        { id: "net", title: "Networking" },
      ],
      content: (
        <>
          <h2 className="text-4xl font-black mb-6 tracking-tight">
            Standard Library
          </h2>

          <section id="fs" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">File System (std:fs)</h3>
            <CodeBlock
              code={`import fs from "std:fs";

// Synchronous Read/Write
fs.writeFileSync("log.txt", "System Start");
let logs = fs.readFileSync("log.txt");

// Directory Operations
if (!fs.exists("data")) {
    fs.mkdir("data");
}

let files = fs.readdir("data");`}
            />
          </section>

          <section id="net">
            <h3 className="text-2xl font-bold mb-4">Networking (std:net)</h3>
            <CodeBlock
              code={`import http from "std:http";
import net from "std:net";

// HTTP GET
async function getStatus() {
    let res = await http.get("https://api.tejx.org/status");
    print("Status: ", res.statusCode);
    print("Body: ", res.body);
}

// TCP Server
let server = net.createServer((socket) => {
    socket.write("Welcome to TejX Server\\n");
    socket.on("data", (data) => print("Received:", data));
});
server.listen(8080);`}
            />
          </section>

          <section
            id="stdlib-example"
            className="mt-8 pt-8 border-t border-white/5"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              <Zap size={18} className="inline mr-2" />
              Complete Example
            </h3>
            <CodeBlock
              filename="stdlib_demo.tx"
              runCommand="tejx run stdlib_demo.tx"
              code={`import fs from "std:fs";
import http from "std:http";

async function main() {
    // File I/O
    fs.writeFileSync("test.txt", "TejX is fast!");
    let content = fs.readFileSync("test.txt");
    print("File Content: ", content);

    // Networking
    print("Fetching tejx.org...");
    try {
        let res = await http.get("https://tejx.org");
        print("Status: ", res.statusCode);
    } catch(e) {
        print("Network error: ", e.message);
    }
}`}
            />
          </section>
        </>
      ),
    },
  ];

  const scrollToSection = (id: string) => {
    navigate(`/docs/${id}`);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSubsection = (sectionId: string, subsectionId: string) => {
    setIsSidebarOpen(false);
    if (activeSection !== sectionId) {
      navigate(`/docs/${sectionId}`);
      // Wait for navigation and render
      setTimeout(() => {
        const element = document.getElementById(subsectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(subsectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-purple-600 text-white shadow-2xl"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="container flex items-start gap-12 py-12 relative">
        {/* Sidebar */}
        <aside
          className={`
          fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none
          md:sticky md:top-24 md:block md:w-72 md:shrink-0 h-fit
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <div className="p-8 md:p-0">
            <div className="flex items-center gap-3 mb-10 px-2">
              <Book className="text-purple-500" />
              <span className="text-xl font-black uppercase tracking-[0.2em]">
                Docs
              </span>
            </div>
            <nav className="space-y-8">
              {/* Core Documentation Links */}
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-4 px-2">
                  Content
                </p>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                          activeSection === section.id
                            ? "bg-purple-500/10 text-white font-bold border border-purple-500/20 shadow-lg shadow-purple-500/5"
                            : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <section.icon
                            size={18}
                            className={
                              activeSection === section.id
                                ? "text-purple-500"
                                : "text-gray-500"
                            }
                          />
                          <span>{section.title}</span>
                        </div>
                        {activeSection === section.id && (
                          <motion.div
                            layoutId="active-indicator"
                            className="w-1 h-4 bg-purple-500 rounded-full"
                          />
                        )}
                      </button>

                      {/* Subsections */}
                      <AnimatePresence>
                        {activeSection === section.id &&
                          section.subsections && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-9 mt-1 flex flex-col gap-1 overflow-hidden border-l border-white/5 py-1"
                            >
                              {section.subsections.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={() =>
                                    scrollToSubsection(section.id, sub.id)
                                  }
                                  className="w-full text-left px-3 py-1.5 text-[11px] text-gray-500 hover:text-purple-400 transition-colors hover:bg-white/5 rounded-lg"
                                >
                                  {sub.title}
                                </button>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-grow max-w-4xl pt-4 transition-all duration-300 ${isSidebarOpen ? "blur-sm md:blur-none" : ""}`}
        >
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {sections.find((s) => s.id === activeSection)?.content}

            {/* Pagination Controls */}
            <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-sm">
              <div className="text-gray-500 font-mono flex items-center gap-2">
                <Zap size={14} className="text-purple-500" />
                TejX Documentation v1.0
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-400 hover:text-white flex items-center gap-2 group"
              >
                Back to Top{" "}
                <ChevronRight
                  size={14}
                  className="-rotate-90 text-purple-500 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
