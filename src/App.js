// App.js
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import SidebarNav from "./components/SidebarNav";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <div className="appAtmosphere" aria-hidden />

      <SidebarNav />
      <main className="mainContent">
        <Introduction />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Hobbies />
        <div className="contactBand">
          <Socials />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
