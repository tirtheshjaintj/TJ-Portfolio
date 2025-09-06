import React from 'react'

export default function Category({ install }) {
  return (
    <>
      <div className="bigbox1">
        <div className="box3">
          <div className="minbox minbox2">
            <h3>App Developer</h3>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <h4>Technologies I Know</h4>
            <p>React Native <br /> Kotlin <br /> Java <br /> XML <br />Volley <br />  Recycler View <br /> ROOM Database <br /> WebView </p>
            <a href="https://global.app.mi.com/developer?id=1103244&publisherName=Tirthesh%20Jain&lo=IN&la=en" target="_blank" rel="noreferrer">View My Apps</a>
          </div>
          <div className="minbox">
            <h3>Web Developer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Technologies I Know</h4>
            <p>React.js <br />Node.js <br /> MongoDB <br /> Express.js<br /> Laravel <br /> MySQL <br /> HTML  <br /> CSS </p>
            <a href="#projects">View My WebApps</a>
          </div>

          <div className=" minbox3 minbox">
            <h3>Programmer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the real world.</p>
            <h4>Languages I Know</h4>
            <p> TypeScript <br /> JavaScript <br /> C++ <br />Java <br />Python <br /> PHP <br /> SQL <br /> <br /> </p>
            <a href="https://www.linkedin.com/in/tirtheshjaintj/" target="_blank" rel="noreferrer">View My LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  )
}
