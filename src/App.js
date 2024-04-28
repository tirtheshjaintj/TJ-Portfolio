import './App.css';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Project from './components/Project';
import Scroller from './components/Scroller';

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
 
    if(!localStorage.getItem("darkmode")){
       localStorage.setItem("darkmode","on");
    }
    tilt();
    speak();
    if(localStorage.getItem("darkmode")==="on"){
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
      localStorage.setItem("darkmode","on");
    }
    else {
      modes.innerHTML = "";
      setStatus(0);
      localStorage.setItem("darkmode","off");
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
      <div className="box1" onClick={install}>
        <h1 >Programmer, Web Developer & Mobile Developer</h1>
        <p>I am Tirthesh Jain a {new Date().getFullYear() - 2004} y/o programmer who find it fun to make useful apps for myself and the World🌏.</p>
        <img src="avatar.svg" className="tilt" alt="Tirthesh Jain" id="avatar" title="Tirthesh Jain" style={{display: "block"}} />
        <img src="basee.svg" id="base"  alt="Tirthesh Jain" title="Tirthesh Jain" />
      </div>
      <a name="skill"></a>
      <div className="box2" onClick={install} >
        <h2>Hi, I’m Tirthesh. Nice to meet you.</h2>
        <br />
        <p>I am Tirthesh Jain a {new Date().getFullYear() - 2004}  y/o programmer who find it fun to make useful apps for myself and the World.I have multiple projects in various fields like android app development and web app development.</p>
      </div>
      <div className="bigbox1">
        <div className="box3">
          <div className="minbox minbox2">
            <h3>Mobile Developer</h3>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <h4>Technologies I Know</h4>
            <p>XML <br />Volley <br />  Recycler View <br /> ROOM Database <br /> WebView <br /> React Native <br /> Java</p>
            <a href="https://global.app.mi.com/developer?id=1103244&publisherName=Tirthesh%20Jain&lo=IN&la=en" target="_blank" rel="noreferrer">View My Apps</a>
          </div>
          <div className="minbox">
            <h3>Web Developer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Technologies I Know</h4>
            <p>HTML  <br /> CSS <br /> JavaScript <br /> PHP <br /> MySQL <br /> ReactJS <br />NodeJS</p>
            <a href="#projects">View My WebApps</a>
          </div>

          <div className=" minbox3 minbox">
            <h3>Programmer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the real world.</p>
            <h4>Technologies I Know</h4>
            <p> JavaScript <br /> C++ <br /> PHP <br /> MySQL <br /> MongoDB <br />Java <br />Python</p>
            <a href="https://www.linkedin.com/in/tirtheshjaintj/" target="_blank" rel="noreferrer">View My LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="space">
      </div>
<Scroller/>
<div className="space">

      </div>
      <a name="education"></a>
      <div className="box2" onClick={install}>
        <h2>Let's Know About My Education.</h2>
        <br />
        <p>I have completed my schooling from B.V.M Chandigarh Road School Ludhiana.
          <br />Now I am pursuing B.tech CSE Batch (2022-2026) from PCTE Ludhiana College.
        </p>
      </div>
      <a name="projects"></a>
      <div className="bigbox3" >
        <h2>My Projects</h2>
        <div className="projects">
          <div className="container mx-auto mt-4">
            <div className="row">
              
            <Project
                title="TJ Chit Chat"
                tech="ReactJS NodeJS MongoDB Render Socket.io"
                description="Introducing TJ Chit Chat, a real-time chatting platform built with the powerful combination of Sockets and MERN stack technologies in it. 💬"
                live="https://tj-chit-chat-5.onrender.com"
                code="https://github.com/tirtheshjaintj/TJ-Chit-Chat"
                img="https://cdn3.vectorstock.com/i/1000x1000/36/97/approved-chat-app-icon-vector-28873697.jpg"
              />

              <Project
                title="TJ GPT AI"
                tech="HTML CSS JavaScript ChatGPT AJAX PHP"
                description="I'm thrilled to announce the launch of TJ GPT, a groundbreaking project that harnesses the power of AI to improve your chat experience! 🤖"
                live="https://tjgpt.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/React%20JS/tjgpt"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65db279d4e6242c5d7b34910/screenshot_2024-02-25-11-42-25-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="Android Apps"
                tech="JAVA Volley XML WebView"
                description="I'm thrilled to announce the launch of TJ Android Apps, a groundbreaking project that harnesses the power of Android and make useful apps for the world."
                live="https://global.app.mi.com/developer?id=1103244&publisherName=Tirthesh%20Jain&lo=IN&la=en"
                code="https://play.google.com/store/apps/dev?id=7869079839064125604"
                img="https://miro.medium.com/v2/resize:fit:828/format:webp/1*LdWKbRYYFY50OTfaRQsMtA.jpeg"
              />

             <Project
                title="TJ Notebook"
                tech="ReactJS NodeJS MongoDB Axios Vercel"
                description="I'm thrilled to announce the launch of TJ Notebook, a groundbreaking project that harnesses the power of Notes Saving Online Privately seamelessly"
                live="https://tj-notebook-front.vercel.app"
                code="https://github.com/tirtheshjaintj/TJ-Notebook"
                img="https://media.slidesgo.com/storage/22533988/conversions/0-online-notebook-thumb.jpg"
              />

<Project
                title="TJ Code Editor"
                tech="HTML CSS JavaScript LocalStorage"
                description="As someone who loves coding, I've always wanted a tool that makes the experience seamless, and I'm thrilled to introduce something that does just that."
                live="https://tjcode.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/CodeEditor"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65bf2a7b229ee6213cc5688c/screenshot_2024-02-04-06-11-09-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ Image Search"
                tech="HTML CSS JavaScript Fetch AJAX"
                description="With an insatiable passion for creativity and technology, I've developed a powerful image search engine that leverages the incredible Unsplash API as its source."
                live="https://tjimages.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Images"
                img="https://d33wubrfki0l68.cloudfront.net/6597c6970537cf9edde738ca/screenshot_2024-01-05-09-06-34-0000.webp"
              />

              <Project
                title="TJ Weather App"
                tech="HTML CSS JavaScript OpenWeather API"
                description="Built with a passion for providing accurate and user-friendly weather information, TJ Weather App brings you real-time updates with a sleek and intuitive design."
                live="https://tjweather.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJWeather"
                img="https://d33wubrfki0l68.cloudfront.net/659d458f0e2397b1ae17379a/screenshot_2024-01-09-13-09-38-0000.webp"
              />

              <Project
                title="TJ PhotoBooth"
                tech="HTML CSS JavaScript UserMedia Canvas"
                description="At TJ PhotoBooth, we're not just capturing moments; we're creating unforgettable experiences using cutting-edge technologies like HTML, CSS, JavaScript, Canvas."
                live="https://tjcamera.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20PhotoBooth"
                img="https://tjcamera.netlify.app/Screenshot_12-1-2024_182037_tjcamera.netlify.app.jpeg"
              />

              <Project
                title="TJ Mole Game"
                tech="HTML CSS JavaScript Random"
                description="TJ Whack-a-Mole isn't just about technology—it's about fun! We've crafted an addictive gameplay experience that stays true to the classic Whack-a-Mole."
                live="https://tjmole.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJMoleGame"
                img="https://d33wubrfki0l68.cloudfront.net/659e8ca1aa92d5d9f622d57c/screenshot_2024-01-10-12-25-08-0000.webp"
              />

              <Project
                title="TJ Voting System"
                tech="HTML CSS PHP MySQL"
                description="I'm thrilled to announce the launch of TJ Voting System, a groundbreaking project that harnesses the power of Voting. Which makes the process of voting easier and efficient ."
                live="https://tirtheshjain.000webhostapp.com/hackathon/home.php"
                code="https://github.com/tirtheshjaintj/Hackathonn"
                img="https://tirtheshjain.000webhostapp.com/hackathon/techno.webp"
              />

              <Project
                title="TJ Dictionary"
                tech="HTML CSS JavaScript FetchAPI"
                description="I am thrilled to announce the launch of TJ Dictionary, a powerful and intuitive english dictionary application designed to streamline your daily literature."
                live="https://tjword.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Dictionary"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65bf7693f555904f8c48cb0d/screenshot_2024-02-04-11-35-49-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ Text Editor"
                tech="HTML CSS JavaScript ReactJS"
                description="I am thrilled to announce the launch of TJ Text Editor, a powerful and intuitive text editor application designed to streamline your daily text editing."
                live="https://tjtext.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/React%20JS/textutils"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65c4d7c173d8f205955913b9/screenshot_2024-02-08-13-31-45-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ Drum Kit"
                tech="HTML CSS JavaScript "
                description="I am thrilled to announce the launch of TJ Drum kit, a powerful and intuitive online drum application designed to streamline your daily drum playing."
                live="https://tjdrum.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Drum%20Kit"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65a56b641c6b6512885ad9e7/screenshot_2024-01-15-17-29-11-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ ToDo App"
                tech="HTML CSS JavaScript LocalStorage"
                description="I am thrilled to announce the launch of TJ ToDo App, a powerful and intuitive task management application designed to streamline your daily workflow."
                live="https://tjtodo.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/ToDoApp"
                img="https://d33wubrfki0l68.cloudfront.net/6599881519fbf1f147432236/screenshot_2024-01-06-17-04-24-0000.webp"
              />

              <Project
                title="TJ Password Generator"
                tech="HTML CSS JavaScript"
                description="At TJ Password Generator, we believe that cybersecurity should be as visually appealing as it is robust. Why compromise when you can have both? 💼💡"
                live="https://tjpass.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Password%20Generator"
                img="https://d33wubrfki0l68.cloudfront.net/65a0378dbec86d2250b52534/screenshot_2024-01-11-18-46-39-0000.webp"
              />

              <Project
                title="TJ Calculator"
                tech="HTML CSS JavaScript"
                description="We are committed to continuous improvement. If you have any suggestions, feedback, or feature requests, feel free to drop a comment or message. TJ Calculator even better!"
                live="https://tjcalc.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Calculator"
                img="https://d33wubrfki0l68.cloudfront.net/659d81a9aa92d527ac22d4db/screenshot_2024-01-09-17-26-04-0000.webp"
              />

              <Project
                title="TJ QR Code Generator"
                tech="HTML CSS JavaScript QRCode API"
                description="The core technologies behind TJ QR Code Generator include HTML for structure, CSS for styling, and JavaScript for interactivity. The Fetch API is employed."
                live="https://tjqr.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20QR%20Code"
                img="https://d33wubrfki0l68.cloudfront.net/659ffaac870a971c1008cb9e/screenshot_2024-01-11-14-26-55-0000.webp"
              />
            </div>
          </div>

        </div>

      </div>
      <div className="space"></div>
      <a name="contact"></a>
      <Scroller/>
      <div className="space"></div>
      <div className="bigbox2" onClick={install}>
        <div className="box4">
          <h2>Collaborate With Me</h2>
          <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
          <br /><br />
          <a href="mailto:tirtheshjaintj@gmail.com"><span>Contact Me 📧</span></a>
        </div>
      </div>
      <div className="box5" >
        <h2>My Links</h2>
        <div className="links" >
          <a href="https://github.com/tirtheshjaintj" target="_blank" rel="noreferrer">  <i className="fa fa-github fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://www.linkedin.com/in/tirtheshjaintj/" target="_blank" rel="noreferrer">  <i className="fa fa-linkedin-square fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://play.google.com/store/apps/dev?id=7869079839064125604" target="_blank" rel="noreferrer">  <i className="fa fa-android fa-3x fa-pull-left fa-border"></i></a>
          <a href="https://stackoverflow.com/users/16068951/tirthesh-jain" target="_blank" rel="noreferrer">   <i className="fa fa-stack-overflow fa-3x fa-pull-left fa-border"></i></a>
        </div>
        <div className="space1"></div>
        <h2>Designed By Tirthesh Jain</h2>
        <div className="container typewrite">
          <h2 ><span className="text sec-text">I am a Programmer</span></h2>
        </div>
        <h2>With</h2>
        <a href="#" onClick={install}><i className="fa fa-heart fa-5x fa-border"></i></a>
      </div>
      <div onClick={mode} className="float">
        <i className="fa fa-adjust my-float"></i>
      </div>
      <div id="modes"></div>
    </>
  );
}

export default App;
