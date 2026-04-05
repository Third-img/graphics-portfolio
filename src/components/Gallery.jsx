import { useState, useEffect } from "react";

const images = Object.values(
  import.meta.glob("../assets/graphics/*.{jpeg,png}", {
    eager: true,
    import: "default",
  }),
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-6 px-5 leading-none gap-x-2 w-full mb-5 overflow-hidden">
        {images.map((src, i) => (
          <div className="w-full">
            <img
              key={i}
              src={src}
              alt=""
              className="
            block 
            w-full 
            h-auto
            object-cover
            object-center
            rounded-xl
            mb-2 
            break-inside-avoid"
              onClick={() => setSelectedImage(i)}
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-8 right-8 text-white text-2xl sm:text-3xl lg:text-4xl cursor-pointer font-helvetica"
            onClick={() => setSelectedImage(null)}
          >
            x
          </button>
          <img
            src={images[selectedImage]}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
