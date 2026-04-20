import { documentId } from "firebase/firestore";
import { scrollToSection } from "../scripts/Links.js";
import { useEffect } from "react";

export default function Burger({ isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`
        flex-col 
        items-center 
        justify-center 
        z-90 
        ${isOpen ? "flex" : "hidden"}
        w-full 
        min-h-svh 
      bg-red-ochre
        gap-2
        fixed
        font-socko
      `} // this expands my understanding in how react i used in text strings
        id="burger-menu"
      >
        <div
          className="absolute top-2 right-2 text-4xl z-100"
          onClick={() => setIsOpen(false)}
        >
          x
        </div>
        <div className="uppercase flex flex-col justify-center h-full items-center text-sand-dune font-socko">
          <span
            id="about-button"
            onClick={() => {
              scrollToSection("about-section")
              setIsOpen(false);
            }}
            className="z-100 px-1.5 mb-2 text-7xl  rounded-sm cursor-pointer select-none"
          >
            about
          </span>
          <span
            id="graphics-design-button"
            onClick={() => {
              scrollToSection("graphic-designs-section")
              setIsOpen(false);
            }}
            className="z-100 px-1.5 mb-2 text-7xl  rounded-sm cursor-pointer select-none"
          >
            graphics
          </span>
          <span
            id="contact-button"
            onClick={() => {
              scrollToSection("contact-section")
              setIsOpen(false);
            }}
            className="z-100 px-1.5 text-7xl  rounded-sm cursor-pointer select-none"
          >
            contact
          </span>
        </div>
      </div>
    </>
  );
}
