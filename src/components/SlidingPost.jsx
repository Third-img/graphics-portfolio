import Post from "../assets/img/asset_5.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SlidingPost({width = 320 }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          ScrollTrigger: {
            trigger: cardRef.current,
            start: "left right",
            end: "right left",
            scrub: true,
            horizontal: true,
            scroller: ".slider-track",
          },
        },
      );
    }, cardRef);
    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="flex shrink-0 snap-start relative"
        style={{ width: `${width}px` }}
      >
        <div
          className="absoulute overflow-hidden"
          style={{
            top: "18%",
            left: "5%",
            width: "90%",
            height: "62%",
          }}
        >
          <img
            ref={imgRef}
            src="../assets/img/shirt_1.png"
            alt=""
            className="w-full object-cover object-center"
            style={{
              height: "120%",
              marginTop: "-10%",
              willChange: "transform",
            }}
          />
        </div>
        <img
          src={Post}
          alt=""
          className="absolute inset-0 w-full h-full object-contain z-2 pointer-events-none"
        />
        <img src={Post} className="w-full opacity-0 block" aria-hidden="true" />
        {/* adds a block so that the frame is still visible */}
      </div>
    </>
  );
}
