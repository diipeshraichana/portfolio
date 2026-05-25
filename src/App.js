import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact/index";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume/index";

const App = () => {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResumeData = async () => {
      try {
        const response = await axios.get("./resumeData.json");
        setResumeData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    getResumeData();

    console.clear();
    console.log(
      "%cHi there 👋",
      "color: #7ee787; font-size: 28px; font-weight: 700; font-family: 'JetBrains Mono', monospace;"
    );
    console.log(
      "%cIf you're a recruiter, hiring manager, or fellow engineer poking around — welcome.",
      "color: #c9d1d9; font-size: 14px; font-family: 'JetBrains Mono', monospace;"
    );
    console.log(
      "%cReach out: diipeshraichana09@gmail.com  ·  https://www.linkedin.com/in/diipesh-raichana-091b6979",
      "color: #79c0ff; font-size: 13px; font-family: 'JetBrains Mono', monospace;"
    );
  }, []);

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Something went wrong loading the portfolio.</h2>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  if (!resumeData) return null;

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
