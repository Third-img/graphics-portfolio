import Star from "../assets/img/Star Center.png";
import ID from "../assets/img/asset_4.png";
import Experience from "../assets/img/asset_8.png";
import JobOne from "../assets/img/asset_1.png";
import JobTwo from "../assets/img/asset_9.png";
import DateOne from "../assets/img/asset_2.png";
import DateTwo from "../assets/img/asset_6.png";
import Education from "../assets/img/asset_7.png";
import StickerOne from "../assets/img/asset_3.png";
import Instagram from "../assets/img/asset_5.png";
import Gallery from "../components/Gallery.jsx";
import Icons from "../components/Icons.jsx";
import eventEmail from "../scripts/Mail";
import WorkingVideo from "../assets/video/editing.mp4";
import { scrollToSection, goToInstagram } from "../scripts/Links.js";

export default function Landing() {
  return (
    <>
      <svg
        viewBox="0 0 218 218"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed pointer-events-none inset-0 w-screen h-screen z-9999 mix-blend-screen opacity-5"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="3"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div
        className="
        w-full 
        h-svh
        font-anton
        uppercase
        overflow-hidden
         text-main-0
         relative
         bg-cherry-0"
        id="hero-section"
      >
        <img src={Star} alt="star" className="max-w-full absolute top-[25%]" />
        <div className="absolute top-1 left-1 text-6xl">I'm</div>
        <div className="absolute top-1 right-1 text-6xl">Third</div>
        <div className="absolute bottom-1 left-1 text-6xl">A</div>
        <div
          className="
        absolute 
        bottom-1 
        right-1
        text-6xl 
        leading-15 
        text-right"
        >
          Graphic <br /> Designer
        </div>
        <div className="font-modak lowercase text-cherry-0">
          <span
            onClick={() => {
              scrollToSection("about-section");
            }}
            className="px-1.5 text-2xl border-2 bg-main-0 rounded-sm absolute top-[50%] left-[30%] cursor-pointer select-none"
          >
            about
          </span>
          <span
            onClick={() => {
              scrollToSection("social-posts-section");
            }}
            className="px-1.5 text-2xl border-2 rounded-sm bg-main-0 absolute top-[30%] left-[25%] cursor-pointer select-none"
          >
            my work
          </span>
          <span
            onClick={() => {
              scrollToSection("contact-section");
            }}
            className="px-1.5 text-2xl border-2 rounded-sm bg-main-0 absolute top-[38%] right-[10%] cursor-pointer select-none"
          >
            let's collab
          </span>
        </div>
      </div>
      <div
        id="about-section"
        className="w-full min-h-svh text-red-ochre bg-sand-dune border-t-4 border-dashed border-red-ochre"
      >
        <img
          id="id-design"
          src={ID}
          alt="id badge"
          className="w-350 md:w-[30%]"
        />
        <div
          id="paragraph-container"
          className="px-20 font-helvetica text-center text-sm leading-4 drop-shadow-"
          style={{ filter: "drop-shadow(0 0 2px)" }}
        >
          <div id="paragraph-one" className="pb-1">
            I enjoy making visuals because I’ve consumed various medias and I
            like to make my own things exist.
          </div>
          <div id="paragraph-two" className="pb-1">
            There’s also this weird desire to know what’s behind every great
            design, and my goal is to be others’ inspiration
          </div>
          <div id="paragraph-three" className="pb-1">
            I love doing all these exhausting work with coffee by my side,
            making it worth the while and the workload to taste better.
          </div>
          <div id="paragraph-four" className="pb-2">
            My life purpose is to improve, improve on everything that I do and
            I'll make sure that it happens.
          </div>
        </div>
        <img src={Education} alt="eudcation" className="w-full px-15 pb-10" />
        <div id="job-placeholder" className="overflow-hidden pt-5">
          <img
            src={Experience}
            alt="experience title"
            className="w-full px-20 rotate-5 pb-5"
          />
          <img
            src={DateOne}
            alt="date one"
            className="absolute z-10 w-[20%] left-[20%]"
          />
          <img
            src={JobOne}
            alt="job one"
            className="w-full px-20 -rotate-8 pb-5"
          />
          <img
            src={JobTwo}
            alt="job two"
            className="w-full px-20 rotate-9 pb-5"
          />
          <img
            src={DateTwo}
            alt="date two"
            className="relative z-10 w-[30%] bottom-5 left-[60%]"
          />
        </div>
        <img src={StickerOne} alt="sticker" className="w-full pb-8 px-15" />
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="text-5xl font-modak uppercase leading-2 pb-4">stack</div>
          <Icons />
        </div>
      </div>
      <div
        id="social-posts-section"
        className="min-h-fit text-main-0 bg-cherry-0 flex justify-center items-center flex-col pt-15 pb-8 border-t-4 border-dashed border-main-0"
      >
        <div className="text-left pb-5 font-modak uppercase text-5xl">
          Social Posts
        </div>
        <img src={Instagram} alt="instagram post ideas" className="w-[80%]" />
      </div>
      <div
        id="graphic-designs-section"
        className="
        min-h-svh
        max-w-full 
       text-red-ochre
       bg-sand-dune
       font-modak 
       uppercase 
       text-6xl
       flex
       flex-col
       justify-center
       items-center
       border-t-4 border-dashed border-red-ochre
       "
      >
        <div className="m-5">Graphics</div>
        <Gallery />
        <div className="z-1 h-full w-screen px-5 pb-5 ">
          <video
            src={WorkingVideo}
            className="h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
      <div
        id="email-section"
        className="min-h-fit w-full px-3 bg-cherry-0 border-t-4 border-dashed border-main-0 text-main-0 -mb-1 lg:flex lg:px-10 lg:items-center lg:justify-center lg:gap-x-10"
      >
        <div id="form-holder">
          <div className="pt-5 font-modak text-5xl mb-1">Let's Collab!</div>
          <form
            id="contact-form"
            className="flex flex-col pb-5"
            onSubmit={eventEmail}
          >
            <input
              type="text"
              name="user_name"
              className="w-40 h-fit text-base focus:outline-0 font-bespoke border rounded-sm p-1 mb-2"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="from_email"
              className="w-60 h-fit text-base focus:outline-0 font-bespoke border rounded-sm p-1 mb-2"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              className="w-70 h-fit text-base focus:outline-0 font-bespoke border rounded-sm p-1 mb-2"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              id="message-box"
              placeholder="Send Message"
              className="w-70 min-h-[3lh] field-sizing-content focus:outline-0 text-base font-bespoke border rounded-sm p-1 mb-2"
              required
            ></textarea>
            <button
              type="submit"
              className="font-modak p-1 px-4 w-fit text-xl bg-main-0 text-cherry-0 rounded-sm mb-3 select-none cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>

        <div id="contact-section" className="min-h-fit w-full bg-cherry-0 pb-1">
          <div
            id="slide-container"
            className="font-modak bg-main-0 mx-3 p-2 rounded-lg text-cherry-0 text-3xl"
          >
            <div
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("hero-section");
              }}
            >
              Home
            </div>
            <div
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("about-section");
              }}
            >
              About
            </div>
            <div
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("social-posts-section");
              }}
            >
              Graphics
            </div>
          </div>
          <div
            id="social-container"
            className="my-3 flex gap-x-2 items-center px-3"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "6%" }}
              onClick={() => {
                goToInstagram();
              }}
              className="cursor-pointer select-none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#dfd3b9"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#dfd3b9"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#dfd3b9"
                ></path>{" "}
              </g>
            </svg>
            <div className="text-cherry-0 font-helvetica py-0.5 px-3 rounded-lg bg-main-0">
              pascualquerubin06@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
