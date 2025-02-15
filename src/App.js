// App.js
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// Components
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Attach data-theme to <html> or <body>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
