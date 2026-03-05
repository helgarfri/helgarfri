// App.js
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import SidebarNav from "./components/SidebarNav";

import bgImage from "./assets/helgarfri.jpg";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      {/* Full-screen fixed background – always visible, entire app */}
      <div
        className="appBg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      <div className="appBgOverlay" aria-hidden />

      <Header />
      <SidebarNav />
      <main className="mainContent">
        <Introduction />
        <Skills />
        <Projects />
        <Socials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
