import { useState } from "react";
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
import { UploadModal } from "../components/Modal.jsx";
import eventEmail from "../scripts/Mail";
import {
  goToInstagram,
  goToLinkedIn,
  scrollToSection,
} from "../scripts/Links.js";
import "../scripts/uploadGraphicForm.js";
import Menu from "../components/Burger.jsx";
import Background from "../assets/img/BackgroundOne.png";
import Tasker from "../assets/icons/Question.png";
import GraphicsIcon from "../assets/icons/TIFF.png";
import ContactIcon from "../assets/icons/User Accounts.png";
import SpeechIcon from "../assets/icons/Speech.png";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
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
      {/* <UploadModal /> */}
      {/* Hero Section */}
      <div
        className="
        w-full 
        h-svh
        font-workbench
        uppercase
        tracking-widest
        overflow-hidden
         text-white
         
         relative
         bg-cherry-0
         flex
         flex-col
         justify-center
         "
        id="hero-section"
      >
        {/* Burger */}
        {/* <svg
          viewBox="0 0 24 24"
          fill="#cd400b"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-2 top-2 md:hidden"
          style={{ width: "40px" }}
          
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#cd400b"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M5 11L20 14"
              stroke="#cd400b"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg> */}
        <div
          className="
        w-10
        mx-2 
        absolute 
        top-2 
        right-1 
        flex 
        flex-col 
        justify-center
        items-center
        xl:hidden
        "
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={Tasker} alt="" />
          <div
            className="
          font-helvetica 
          capitalize
          text-center
          text-sm
          text-shadow-lg
          text-shadow-black/40
          "
          >
            Menu
          </div>
        </div>
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <div className="hero-text-container text-center">
          <div
            className="text-5xl lg:text-7xl xl:text-9xl 
            text-shadow-lg
            text-shadow-black/50
          "
          >
            I'm Querubin
          </div>
          <div
            className="
            
          text-2xl lg:text-4xl xl:text-5xl
          text-shadow-lg
          text-shadow-black/50
          font-helvetica 
          tracking-tighter
          lowercase
          "
          >
            a Graphic Designer
          </div>
          <div
            className="hidden xl:flex flex-col items-center w-10 absolute top-[20%] left-[23%] cursor-pointer text-shadow-sm text-shadow-black/10"
            onClick={() => scrollToSection("graphic-designs-section")}
          >
            <img src={GraphicsIcon} alt="" />
            <div className="capitalize font-helvetica">graphics</div>
          </div>
          <div
            onClick={() => scrollToSection("email-section")}
            className="hidden xl:flex flex-col items-center w-10 absolute top-[10%] right-[23%] cursor-pointer text-shadow-sm text-shadow-black/10"
          >
            <img src={SpeechIcon} alt="" />
            <div className="capitalize font-helvetica">contact</div>
          </div>
          <div
            onClick={() => scrollToSection("about-section")}
            className="hidden xl:flex flex-col items-center w-10 absolute bottom-[20%] left-[30%] cursor-pointer text-shadow-sm text-shadow-black/10"
          >
            <img src={ContactIcon} alt="" />
            <div className="capitalize font-helvetica">User</div>
          </div>
        </div>
        <hr className="border-b-5 border-laser-blue-500 w-[70%] self-center absolute bottom-0 rounded-sm" />
      </div>
      <div
        id="about-section"
        className="
        w-full min-h-svh
      text-red-ochre
      bg-sand-dune 
        relative 
        overflow-hidden
        xl:grid
        xl:grid-cols-4
       "
      >
        <img
          id="id-design"
          src={ID}
          alt="id badge"
          className="
          w-[calc(100%)]
          "
        />
        <div
          id="paragraph-container"
          className="
          flex 
          items-center 
          flex-col
          my-10 
          px-5 
          font-helvetica 
          text-center 
          text-sm 
          md:text-lg 
          lg:text-xl 
          leading-4 
          gap-10
          "
          style={{ filter: "drop-shadow(0 0 2px)" }}
        >
          <div id="paragraph-one" className="pb-1 xl:w-80">
            I enjoy making visuals because I’ve consumed various medias and I
            like to make my own things exist.
          </div>
          <div id="paragraph-two" className="pb-1 xl:w-90">
            There’s also this weird desire to know what’s behind every great
            design, and my goal is to be others’ inspiration
          </div>
          <div id="paragraph-three" className="pb-1 xl:w-80">
            I love doing all these exhausting work with coffee by my side,
            making it worth the while and the workload to taste better.
          </div>
          <div id="paragraph-four" className="pb-2 xl:w-100">
            My life purpose is to improve, improve on everything that I do and
            I'll make sure that it happens.
          </div>
        </div>
        <img
          id="education-container"
          src={Education}
          alt="eudcation"
          className="w-full px-15 pb-10 lg:rotate-3"
        />
        <div
          id="job-container"
          className="
        overflow-hidden 
        pt-5 
        px-5
        w-70
        "
        >
          <img
            src={Experience}
            alt="experience title"
            className="w-full rotate-5 pb-5"
            id="experience-placard"
          />

          <img
            src={JobOne}
            alt="job one"
            className="w-full -rotate-8 pb-5"
            id="student-placard"
          />
          <img
            src={DateOne}
            alt="date one"
            className="relative z-50"
            id="dateOne-sticker"
          />
          <img
            src={JobTwo}
            alt="job two"
            className="w-full rotate-9 pb-5"
            id="starbucks-placard"
          />
          <img src={DateTwo} alt="date two" className="" id="dateTwo-sticker" />
        </div>
        <img
          id="sticker-one"
          src={StickerOne}
          alt="sticker"
          className="w-full lg:right-1 lg:top-2 lg:p-0"
        />
        <div
          id="editing-tools"
          className="
          pb-5 
          lg:bottom-1 
          lg:left-[25%]
          "
        >
          <Icons />
        </div>
      </div>
      <div className="w-full flex justify-center">
          <hr className="border-b-5 border-laser-blue-500 w-[70%] self-center absolute bottom-0 rounded-sm" />
        </div>
      <div
        id="graphic-designs-section"
        className="
        min-h-fit
        max-w-full 
       text-main-0
       bg-cherry-0
       font-socko 
       uppercase 
       text-6xl
       flex
       flex-col
       justify-center
       items-center
       "
      >
        <div className="m-5 text-center">Static Ads</div>
        <Gallery imageFilter={"Static Ad"} />
        
      </div>
      <div
        className="
        min-h-fit
        max-w-full 
        text-red-ochre
       bg-sand-dune
       font-helvetica
       tracking-tighter 
       uppercase 
       text-6xl
       flex
       flex-col
       justify-center
       items-center
       "
      >
        <div className="m-5 text-center">Posters</div>
        <Gallery imageFilter={"Posters"} />
      </div>
      <div
        className="
        min-h-fit
        max-w-full 
        text-main-0
       bg-cherry-0
       font-anton
       tracking-tighter
       uppercase 
       text-5xl
       lg:text-6xl
       flex
       flex-col
       justify-center
       items-center
       "
      >
        <div className="m-5 text-center">Socmed Posts</div>
        <Gallery imageFilter={"Social Media Posts"} />
      </div>
      <div
        className="
        min-h-fit
        max-w-full 
        text-red-ochre
       bg-sand-dune
       font-socko
       tracking-wide
       uppercase 
       text-6xl
       lg:text-7xl
       flex
       flex-col
       justify-center
       items-center
       "
      >
        <div className="m-5 text-center">Ca-Lasing</div>
        <Gallery imageFilter={"Ca-lasing"} />
      </div>
      <div
        id="video-edit-section"
        className="
      w-full
      min-h-fit
      bg-cherry-0
      p-5
      "
      >
        <div className="font-socko uppercase text-center text-5xl lg:text-7xl text-sand-dune py-5">
          Videos
        </div>
        <div
          id="video-edit-container"
          className="flex flex-col lg:flex-row gap-5 items-center justify-center"
        >
          <video
            src="https://res.cloudinary.com/dr5ucxfox/video/upload/v1776175636/The_Contemporary_World_-_Gorup_6_Prelims_-_Trim_jqybdj.mp4"
            autoPlay
            controls
            playsInline
            muted
            loop
            className="rounded-xl lg:max-w-[50%]"
          ></video>
          <video
            src="https://res.cloudinary.com/dr5ucxfox/video/upload/v1776175621/STI_College_Malolos_Teaser_fbbwte.mp4"
            autoPlay
            controls
            playsInline
            muted
            loop
            className="rounded-xl lg:max-w-[50%]"
          ></video>
        </div>
      </div>
      <div
        id="email-section"
        className="min-h-fit w-full px-3 bg-sand-dune text-red-ochre  -mb-1 lg:flex lg:px-10 lg:items-center lg:justify-center lg:gap-x-10"
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
              className="font-modak p-1 px-4 w-fit text-xl bg-red-ochre text-sand-dune rounded-sm mb-3 select-none cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
        <div
          id="contact-section"
          className="min-h-fit w-full bg-sand-dune text-red-ochre pb-1"
        >
          <div
            id="slide-container"
            className="font-modak bg-sand-dune rounded-lg text-red-ochre text-3xl flex flex-col border-2 border-dashed p-2"
          >
            <span
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("hero-section");
              }}
            >
              Home
            </span>
            <span
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("about-section");
              }}
            >
              About
            </span>
            <span
              className="cursor-pointer select-none"
              onClick={() => {
                scrollToSection("graphic-designs-section");
              }}
            >
              Graphics
            </span>
          </div>
          <div id="social-container" className="my-3 flex gap-x-2 items-center">
            <svg
              viewBox="0 0 24 24"
              fill="#cd400b"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                goToInstagram();
              }}
              className="cursor-pointer select-none w-7"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#cd400b"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#cd400b"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#cd400b"
                ></path>{" "}
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#cd400b"
              viewBox="0 0 16 16"
              className="cursor-pointer select-none w-7"
              onClick={() => {
                goToLinkedIn();
              }}
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
