import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import PlaygroundPage from "./pages/PlaygroundPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="nebula-bg" />

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />}>
              <Route path=":sectionId" element={<Documentation />} />
            </Route>
            <Route
              path="/get-started"
              element={<Navigate to="/docs/get-started" replace />}
            />
            <Route path="/playground" element={<PlaygroundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
