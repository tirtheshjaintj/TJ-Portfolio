import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import ModeBall from "./components/ModeBall";
import Footer from "./components/Footer";
import Space from "./components/Space";
import AllProjects from "./components/AllProjects";
import Education from "./components/Education";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Modeblock from "./components/Modeblock";
import axios from "axios";
import Chatbot from "./components/ChatBot";
function App() {
  const [status, setStatus] = useState(1);
  const getBrowserInfo = () => {
    const ua = window.navigator.userAgent;
    return ua.includes("Edg") ? "Microsoft Edge" :
      ua.includes("Chrome") ? "Google Chrome" :
        ua.includes("Safari") && !ua.includes("Chrome") ? "Apple Safari" :
          ua.includes("Firefox") ? "Mozilla Firefox" :
            ua.includes("Trident/") || ua.includes("MSIE") ? "Microsoft Internet Explorer" :
              ua.includes("Opera") || ua.includes("OPR") ? "Opera" : "Unknown";
  };

  // Get operating system information
  const getOsInfo = () => {
    const platform = window.navigator.platform;
    return platform.includes("Win") ? "Windows" :
      platform.includes("Mac") ? "MacOS" :
        platform.includes("Linux") ? "Linux" :
          platform.includes("iPhone") || platform.includes("iPad") ? "iOS" :
            platform.includes("Android") ? "Android" : "Unknown";
  };

  // Get user language
  const getUserLanguage = () => {
    return window.navigator.language || window.navigator.userLanguage;
  };

  // Fetch user location data
  const fetchUserLocation = async () => {
    try {
      const { data } = await axios.get('https://ipapi.co/json/');
      return data;
    } catch (error) {
      return {};
    }
  };

  function tilt() {
    let el = document.getElementById("avatar");
    const height = el.clientHeight;
    const width = el.clientWidth;
    el.addEventListener('mousemove', handleMove);
    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 12 * ((xVal - width / 2) / width);
      const xRotation = -12 * ((yVal - height / 2) / height);
      const string = 'perspective(1000px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      el.style.transform = string
    }
    el.addEventListener('mouseout', function () {
      el.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)'
    })
    el.addEventListener('mousedown', function () {
      el.style.transform = 'perspective(1000px) scale(0.9) rotateX(0) rotateY(0)'
    })
    el.addEventListener('mouseup', function () {
      el.style.transform = 'perspective(1000px) scale(1.1) rotateX(0) rotateY(0)'
    })
  }

  function speak() {
    const currentTime = new Date().getHours();
    let greeting = "";
    if (currentTime >= 5 && currentTime < 12) {
      greeting = "Good morning";
    } else if (currentTime >= 12 && currentTime < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("avatar").onclick = () => {
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(greeting);
      synth.speak(utterThis);
    };
  }


  // Call the function to start the typewriter effect
  const textLoad = () => {
    const text = document.querySelector(".sec-text");
    const texts = ["Tirthesh Jain", "Programmer", "Web Developer", "Mobile Developer"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const type = () => {
      if (isDeleting) {
        currentText = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
      }
      text.textContent = currentText;
      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }
      const typingSpeed = isDeleting ? 100 : 150;
      setTimeout(type, typingSpeed);
    };

    type();
  };

  const fetchData = async () => {
    const browser = getBrowserInfo();
    const os = getOsInfo();
    const language = getUserLanguage();
    try {
        const userLocation =await fetchUserLocation();
        const userData = {
            platform: os,
            os: os,
            browser: browser,
            ip: userLocation.ip||"Unknown",
            country: userLocation.country||"Unknown",
            state: userLocation.region||"Unknown",
            city: userLocation.city||"Unknown",
            coord: userLocation.latitude+","+userLocation.longitude||"Unknown",
            provider: userLocation.org||"Unknown",
            postal: userLocation.postal,
            timezone: userLocation.timezone||"Unknown",
            language: language
        };
        const { data } = await axios.post(`https://tj-url-backend.vercel.app/url/RXv2Es3Qb`, userData);
    } catch (error) {
        console.log(error);
    }
};

  useEffect(function () {
    tilt();
    speak();
    textLoad();
    if(localStorage.getItem("darkmode")=="off"){
      mode();
    }
    fetchData();
  }, []);

  function mode() {
    let modes = document.querySelector("#modes");
    if (status === 0) {
      modes.innerHTML = `<link rel="stylesheet" href="dark.css">`;
      setStatus(1);
      localStorage.setItem("darkmode", "on");      
    } else {
      modes.innerHTML = "";
      setStatus(0);
      localStorage.setItem("darkmode", "off");
    }
  }

  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
  });

  async function install() {
    try {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          deferredPrompt = null;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar onclick={install} />
      <Hero install={install} />
      <Category install={install} />
      <Space />
      <Scroller />
      <Education install={install} />
      <AllProjects />
      <Space />
      <a name="contact"></a>
      <Scroller />
      <Footer install={install} />
      <ModeBall mode={mode} />
      <Chatbot/>
      <Modeblock />
    </>
  );
}

export default App;
