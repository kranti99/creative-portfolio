"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "@/slices/Hero/Shapes";
import Bounded from "@/components/Bounded";
import gsap from "gsap";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
           
          >
            <span className="block text-slate-300 ">
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">K</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">n</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">t</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">i</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">m</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
              <span class="name-animation name-animation-first inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">n</span>
              
            </span>
            <span className="-mt-[.2em] block text-slate-500  ">
      
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">B</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">j</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">r</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">c</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">h</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">r</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">y</span>
              <span class="name-animation name-animation-last inline-block opacity-0" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px); transform-origin: 0% 0%;">a</span>
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            Web Developer
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
