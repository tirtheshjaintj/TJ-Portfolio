import React from 'react';
import Project from './Project';
export default function AllProjects() {
  return (
    <>
    <a name="projects"></a>
      <div className="bigbox3" >
        <h2>My Projects</h2>
        <div className="projects">
          <div className="container mx-auto mt-4">
            <div className="row">
            <Project
                title="Buy Me Chai ☕"
                tech="NextJS ReactJS MongoDB TailWind Razorpay"
                description="I'm beyond excited to share a project I've been passionately working on: Buy Me A Chai ☕. It’s secure, fast, and built with the latest and greatest technologies!"
                live="https://buymechai.vercel.app/"
                code="https://github.com/tirtheshjaintj/TJ-Buy-Me-Chai"
                img="https://media.licdn.com/dms/image/D5622AQFlPXckFEX5NA/feedshare-shrink_2048_1536/0/1718975987450?e=1721865600&v=beta&t=BCC3YCfPVrpchwAwRkqFLaEzGFcDRmxGC0xUv62CRIA"
              />
            <Project
                title="TJ URL Short 🔗"
                tech="ReactJS NodeJS MongoDB ChakraUI Socket.io"
                description="Introducing TJ URL Shortener, a real-time url shortener platform built with the powerful combination of MERN stack technologies in it. 🔗"
                live="https://tjurl.netlify.app/"
                code="https://github.com/tirtheshjaintj/TJ-URL-Frontend"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/665a0945d77171000866bfec/screenshot_2024-05-31-17-31-17-0000.webp&fit=cover&h=500&w=800"
              />
            <Project
                title="TJ Chit Chat 💬"
                tech="ReactJS NodeJS MongoDB ChakraUI Socket.io"
                description="Introducing TJ Chit Chat, a real-time chatting platform built with the powerful combination of Sockets and MERN stack technologies in it. 💬"
                live="https://tj-chit-chat-5.onrender.com"
                code="https://github.com/tirtheshjaintj/TJ-Chit-Chat"
                img="https://i.ytimg.com/vi/HwCqsOis894/maxresdefault.jpg"
              />

              <Project
                title="TJ GPT AI 🤖"
                tech="ReactJS NodeJS Gemini Axios ChatGPT"
                description="I'm thrilled to announce the launch of TJ GPT, a groundbreaking project that harnesses the power of AI to improve your chat experience! 🤖"
                live="https://tjgpt.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/React%20JS/tjgpt"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65db279d4e6242c5d7b34910/screenshot_2024-02-25-11-42-25-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ Tube 📺"
                tech="ReactJS MaterialUI Axios ReactPlayer"
                description="I'm thrilled to announce the launch of TJ Tube, a groundbreaking project that offers a seamless and fast video browsing experience! 📺"
                live="https://tjtube.netlify.app/"
                code="https://github.com/tirtheshjaintj/TJ-Tube"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66582f71043c34c14004938b/screenshot_2024-05-30-07-49-10-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="Android Apps 📲"
                tech="JAVA Volley XML WebView"
                description="I'm thrilled to announce the launch of TJ Android Apps, a groundbreaking project that harnesses the power of Android and make useful apps for the world."
                live="https://global.app.mi.com/developer?id=1103244&publisherName=Tirthesh%20Jain&lo=IN&la=en"
                code="https://play.google.com/store/apps/dev?id=7869079839064125604"
                img="https://miro.medium.com/v2/resize:fit:828/format:webp/1*LdWKbRYYFY50OTfaRQsMtA.jpeg"
              />

             <Project
                title="TJ Notebook 📝"
                tech="ReactJS NodeJS MongoDB Axios Vercel"
                description="I'm thrilled to announce the launch of TJ Notebook, a groundbreaking project that harnesses the power of Notes Saving Online Privately seamelessly"
                live="https://tj-notebook-front.vercel.app"
                code="https://github.com/tirtheshjaintj/TJ-Notebook"
                img="https://media.slidesgo.com/storage/22533988/conversions/0-online-notebook-thumb.jpg"
              />

<Project
                title="TJ Code Editor 🧑‍💻"
                tech="HTML CSS JavaScript LocalStorage"
                description="As someone who loves coding, I've always wanted a tool that makes the experience seamless, and I'm thrilled to introduce something that does just that."
                live="https://tjcode.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/CodeEditor"
                img="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65bf2a7b229ee6213cc5688c/screenshot_2024-02-04-06-11-09-0000.webp&fit=cover&h=500&w=800"
              />

              <Project
                title="TJ Image Search 🖼️"
                tech="HTML CSS JavaScript Fetch AJAX"
                description="With an insatiable passion for creativity and technology, I've developed a powerful image search engine that leverages the incredible Unsplash API as its source."
                live="https://tjimages.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20Images"
                img="https://d33wubrfki0l68.cloudfront.net/6597c6970537cf9edde738ca/screenshot_2024-01-05-09-06-34-0000.webp"
              />

              <Project
                title="TJ Weather App 🌤️"
                tech="HTML CSS JavaScript OpenWeather API"
                description="Built with a passion for providing accurate and user-friendly weather information, TJ Weather App brings you real-time updates with a sleek and intuitive design."
                live="https://tjweather.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJWeather"
                img="https://d33wubrfki0l68.cloudfront.net/659d458f0e2397b1ae17379a/screenshot_2024-01-09-13-09-38-0000.webp"
              />

              <Project
                title="TJ PhotoBooth 📸"
                tech="HTML CSS JavaScript UserMedia Canvas"
                description="At TJ PhotoBooth, we're not just capturing moments; we're creating unforgettable experiences using cutting-edge technologies like HTML, CSS, JavaScript, Canvas."
                live="https://tjcamera.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJ%20PhotoBooth"
                img="https://tjcamera.netlify.app/Screenshot_12-1-2024_182037_tjcamera.netlify.app.jpeg"
              />

              <Project
                title="TJ Mole Game 🎮"
                tech="HTML CSS JavaScript Random"
                description="TJ Whack-a-Mole isn't just about technology—it's about fun! We've crafted an addictive gameplay experience that stays true to the classic Whack-a-Mole."
                live="https://tjmole.netlify.app/"
                code="https://github.com/tirtheshjaintj/WebProjects/tree/master/TJMoleGame"
                img="https://d33wubrfki0l68.cloudfront.net/659e8ca1aa92d5d9f622d57c/screenshot_2024-01-10-12-25-08-0000.webp"
              />

              <Project
                title="TJ Voting System "
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
    </>
  )
}
