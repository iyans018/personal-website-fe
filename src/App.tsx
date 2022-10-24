import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, BottomNav } from './components/global';
import { Home, Projects, Articles, AboutMe } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
