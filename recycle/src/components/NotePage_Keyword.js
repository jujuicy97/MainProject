import { useEffect, useRef } from 'react';
import keyword from '../assets/note-keyword.json';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NotePage_Keyword = () => {
  const keywordRef = useRef(null);

//스크롤 이벤트 처리
  useEffect(()=>{
    const elem = keywordRef.current.querySelectorAll("li");
    gsap.fromTo(
      elem,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.3,
        // repeat: -1, 
        yoyo: true, 
        repeatDelay: 0.5,
        scrollTrigger: {
          trigger: keywordRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <ul className="keyword" ref={keywordRef}>
      {keyword.map((list, i) => (
        <li key={i}>
          {list.map((item, j) => (
            <p key={j}>{item}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default NotePage_Keyword;