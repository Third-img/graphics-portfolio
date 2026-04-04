import Star from "../assets/img/Star Center.png";
import ID from "../assets/img/asset_4.png";
import Experience from "../assets/img/asset_8.png";
import JobOne from "../assets/img/asset_1.png";
import JobTwo from "../assets/img/asset_9.png";
import DateOne from "../assets/img/asset_2.png";
import DateTwo from "../assets/img/asset_6.png";
import Education from "../assets/img/asset_7.png";
import Noise from "../assets/img/noise.svg";
import StickerOne from "../assets/img/asset_3.png";
import Instagram from "../assets/img/asset_5.png";
import Gallery from "../components/Gallery.jsx";
import eventEmail from "../scripts/Mail";

export default function Landing() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 500 400"
        preserveAspectRatio="none" // this deals with removing the fixed sizes of svgs
        className="fixed inset-0 w-screen h-screen z-9999 mix-blend-screen opacity-35"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.193"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="24"
              specularConstant="0.3"
              specularExponent="20"
              lighting-color="#ffffff"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="200"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill=""></rect>
        <rect
          width="700"
          height="700"
          fill="#ffffff"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
      <div
        className="
        w-full 
        min-h-screen 
        font-anton
        uppercase
        overflow-hidden
         text-main-0
         relative"
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
        <div className="font-helvetica lowercase text-surface-0">
          <span className="px-1.5 bg-main-0 border absolute top-[50%] left-[30%]">
            about
          </span>
          <span className="px-1.5 bg-main-0 border absolute top-[30%] left-[25%]">
            my work
          </span>
          <span className="px-1.5 bg-main-0 border absolute top-[38%] right-[10%]">
            let's collab
          </span>
        </div>
      </div>
      <div
        id="about-section"
        className="w-full min-h-screen text-main-0 border-t-4 border-dotted border-main-0"
      >
        <img
          id="id-design"
          src={ID}
          alt="id badge"
          className="w-350 md:w-[30%]"
        />
        <div
          id="paragraph-container"
          className="px-20 font-bespoke text-center text-xs"
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
        <img src={StickerOne} alt="sticker" className="w-[60%] " />
      </div>
      <div
        id="social-posts-section"
        className="min-h-fit text-main-0 bg-cherry-0 flex justify-center items-center flex-col py-20 border-t-4 border-dotted border-main-0"
      >
        <div className="text-left pb-5 font-anton uppercase text-2xl">
          Social Media Posts
        </div>
        <img src={Instagram} alt="instagram post ideas" className="w-[80%]" />
      </div>
      <div
        id="graphic-designs-section"
        className="
        min-h-screen
        max-w-full 
       text-main-0
       font-anton 
       uppercase 
       text-2xl
       flex
       flex-col
       justify-center
       items-center
       border-t-4 border-dotted border-main-0
       "
      >
        <div className="m-5">Graphics</div>
        <Gallery />
      </div>
      <div
        id="email-section"
        className="min-h-fit w-full px-3 bg-cherry-0 border-t-4 border-dotted border-main-0 text-main-0 -mb-1"
      >
        <div className="pt-5 font-modak text-5xl mb-1">Let's Collab!</div>
        <div className="font-bespoke lowercase text-xl pb-10 hidden">
          Reframing creative ideas
        </div>
        <form id="contact-form" className="flex flex-col" onSubmit={eventEmail}>
          <input
            type="text"
            name="user_name"
            className="w-40 h-fit text-base font-bespoke border rounded-sm p-1 mb-2"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="from_email"
            className="w-60 h-fit text-base font-bespoke border rounded-sm p-1 mb-2"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            className="w-70 h-fit text-base font-bespoke border rounded-sm p-1 mb-2"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="message-box"
            placeholder="Send Message"
            className="w-70 min-h-[3lh] field-sizing-content text-base font-bespoke border rounded-sm p-1 mb-2"
            required
          ></textarea>
          <button
            type="submit"
            className="font-modak p-1 px-4 w-fit text-xl bg-main-0 text-cherry-0 rounded-sm mb-3"
          >
            Send
          </button>
        </form>
      </div>
      <div
        id="contact-section"
        className="min-h-fit w-full bg-cherry-0 border-t-4 border-dotted border-main-0 pb-1"
      >
        <div
          id="slide-container"
          className="font-modak bg-main-0 m-5 p-2 rounded-lg text-cherry-0 text-3xl"
        >
          <div>Home</div>
          <div>About</div>
          <div>Graphics</div>
          <div id="social-container" className="mt-3 flex gap-x-2 items-center">
            <div className="font-helvetica text-xl">Socials at</div>
            <svg
              fill="#a52a2a "
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 552.77 552.77"
              xml:space="preserve"
              stroke="#a52a2a "
              style={{ width: "5%" }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95 C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"></path>{" "}
                    <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95 C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"></path>{" "}
                    <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846 c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192 c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666 c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343 c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627 c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48 S535.836,228.581,525.732,215.282z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{width: "6%"}}
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
                  fill="#a52a2a"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#a52a2a"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#a52a2a"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
