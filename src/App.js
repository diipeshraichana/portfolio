import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact/index";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume/index";

const App = (props) => {
  const [resumeData, setResumeData ] = useState(null);

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    getResumeData();
    console.clear();
    console.log("%c¯\\_(ツ)_/¯", "color: blue; font-size: 70px");
		console.log("%cThere's nothing here...", "color: blue; font-size: 20px");
		console.log("%cHey.. Close this window if you'r not aware about it!!", "color: red; font-size: 20px");
  }, [])


  const getResumeData = async () => {
    const data = await axios.get('./resumeData.json');
    setResumeData(data.data);
  }

  return (
    <>
    {
      resumeData && 
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    }
    </>
    );
}

export default App;
