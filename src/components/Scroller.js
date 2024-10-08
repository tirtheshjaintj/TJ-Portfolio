import React, { useEffect } from 'react';
import './Scroller.css';

export default function MultipleScrollers() {
  // Function to handle scroll direction and speed for all scrollers
  function handleScrollers() {
    // Select all scrollers
    const scrollers = document.querySelectorAll('.scroller');
    // Iterate over each scroller
    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);
      const direction = scroller.getAttribute('data-direction') || 'right';
      const speed = scroller.getAttribute('data-speed') || 'slow';
      // Add animation and duplicate content for continuous scrolling
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
         scroller.setAttribute('data-animated', true);
          scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }
      // Add smooth scrolling animation
      scroller.style.scrollBehavior = 'smooth';
      // Set up continuous scrolling
      const scrollSpeed = speed === 'slow' ? 0.5 : 1;
      function scroll() {
        if (direction === 'right') {
          scrollerInner.scrollLeft += scrollSpeed;
        } else {
          scrollerInner.scrollLeft -= scrollSpeed;
        }
        // Repeat scrolling when reaching the end
        if (scrollerInner.scrollLeft >= scrollerInner.scrollWidth / 2) {
          scrollerInner.scrollLeft = 0;
        }
      }
      // Set interval for scrolling
      setInterval(scroll, 20);
    });
  }
  // Attach event listeners and call handleScrollers function
  useEffect(() => {
    handleScrollers();
  }, []);

  return (
    <>
      {/* Example of multiple scrollers */}
      <div className="scroller" data-direction="right" data-speed="slow" style={{marginBottom:"100px"}}>
        <div className="scroller__inner">
          <img className="scrollimg" src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" title="Javascript" alt="skill_badge" loading="lazy" />
          <img className="scrollimg" src="logo512.png" title="ReactJS" loading="lazy" />
          <img className="scrollimg" src="https://www.egmcartech.com/wp-content/uploads/2014/06/Android1.jpg" loading="lazy" title="Android" alt="skill_badge" />
          <img className="scrollimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
            alt="skill_badge" title="Bootstrap" loading="lazy" />
          <img className="scrollimg" src="https://logodix.com/logo/1764972.png" loading="lazy" alt="skill_badge" title="Node JS" />
          <img className="scrollimg" src="https://user-images.githubusercontent.com/47877911/88288497-d42b0400-cd2e-11ea-819f-e2fa50f5e60b.png" loading="lazy" title="MongoDB" alt="skill_badge" />
          <img className="scrollimg" src="https://miro.medium.com/v2/resize:fit:1184/1*JGkOiiDXtsuXgq4koo5uJw.png" loading="lazy" title="PHP" alt="skill_badge" />
          <img className="scrollimg" src="https://i.pinimg.com/originals/26/f6/35/26f6359c009caad13a10171101682679.png" loading="lazy" title="MySQL" alt="skill_badge" />
          <img className="scrollimg" src="https://repository-images.githubusercontent.com/264310428/0c412b80-c1f4-11ea-86fb-b572b491f5d6" loading="lazy" alt="skill_badge" title="CPP" />
          <img className="scrollimg" src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg" loading="lazy" alt="skill_badge" title="Tailwind" />
          <img className="scrollimg" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png" loading="lazy" title="CSS" alt="skill_badge" />
        </div>
      </div>


    </>
  );
}
