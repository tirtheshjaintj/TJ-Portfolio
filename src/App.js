import './App.css';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Project from './components/Project';
import Scroller from './components/Scroller';
import ModeBall from './components/ModeBall';
import Footer from './components/Footer';
import Space from './components/Space';
import AllProjects from './components/AllProjects';
import Education from './components/Education';
import Category from './components/Category';
import Hero from './components/Hero';
import Modeblock from './components/Modeblock';

function App() {

  const [status, setStatus] = useState(0);
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
    }
  }

  const textLoad = () => {
    const text = document.querySelector(".sec-text");
    setTimeout(() => {
      text.textContent = " Programmer";
    }, 0);
    setTimeout(() => {
      text.textContent = " Web Developer";
    }, 4000);
    setTimeout(() => {
      text.textContent = " Mobile Developer";
    }, 8000);
  }

  useEffect(function () {

    if (!localStorage.getItem("darkmode")) {
      localStorage.setItem("darkmode", "on");
    }
    tilt();
    speak();
    if (localStorage.getItem("darkmode") === "on") {
      mode();
    }
    textLoad();
    setInterval(textLoad, 12000);
    window.onload = function () {
      var images = document.getElementsByTagName('img');
      for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('contextmenu', (event) => {
          event.preventDefault();
        });
      }
    };
  }, []);

  function mode() {
    let modes = document.querySelector("#modes");
    if (status === 0) {
      modes.innerHTML = `<style>
    body{
    background-color: #141c3a;
    color:white;
   }
   .minbox{
    background-color: #222;
    border-left: 0.1px white solid;
    box-shadow: 0px 0px 5px white;
   }
   .minbox3{
    border-left: none;
    border-radius:25px 0  0 25px;
    }
    .minbox2{
      border-radius:0 25px 25px 0;
    }
.bigbox3 .projects .card {
    background-color: #222;
    box-shadow: 0px 0px 5px white;
    color:white;
}
  .box4{
      box-shadow: 0px 0px 5px white;
  }
  @media (max-width:1024px){
    .minbox,.minbox2{
      border-left:none;
      border-radius:25px;
    }
  }</style>`;

      setStatus(1);
      localStorage.setItem("darkmode", "on");
    }
    else {
      modes.innerHTML = "";
      setStatus(0);
      localStorage.setItem("darkmode", "off");
    }
    install();
  }

  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
  });

  async function install() {
    try {
      if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          deferredPrompt = null;
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  };

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
      <Modeblock/>
    </>
  );
}

export default App;
