import React from 'react';
import './Scroller.css';

export default function MultipleScrollers() {
  const logos = [
    "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    "logo512.png",
    "https://www.egmcartech.com/wp-content/uploads/2014/06/Android1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    "https://logodix.com/logo/1764972.png",
    "https://user-images.githubusercontent.com/47877911/88288497-d42b0400-cd2e-11ea-819f-e2fa50f5e60b.png",
    "https://miro.medium.com/v2/resize:fit:1184/1*JGkOiiDXtsuXgq4koo5uJw.png",
    "https://i.pinimg.com/originals/26/f6/35/26f6359c009caad13a10171101682679.png",
    "https://repository-images.githubusercontent.com/264310428/0c412b80-c1f4-11ea-86fb-b572b491f5d6",
    "https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg",
    "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png"
  ];

  return (
    <div className="scroller">
      <div className="scroller_inner">
        {logos.concat(logos).map((src, index) => (
          <img className="scrollimg" src={src} key={index} alt="skill_badge" loading="lazy" />
        ))}

      </div>
    </div>
  );
}
