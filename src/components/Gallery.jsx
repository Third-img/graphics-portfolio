import { useState, useEffect } from "react";
import { useImages } from "../hooks/useDatabase";

export default function Gallery({ imageFilter }) {
  const { images, loading } = useImages();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const imageFiltering = images.filter(image => image.category === imageFilter)

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

  if (loading || imageFilter == null) return <p className="uppercase">Loading</p>;

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-6 px-5 leading-none gap-x-2 w-full mb-5 overflow-hidden">
        {imageFiltering.map((image, i) => (
          <div className="w-full" key={i}>
            <img
              key={image.id}
              src={image.imageUrl}
              alt={image.title}
              className="
            block 
            w-full 
            h-auto
            object-cover
            object-center
            rounded-xl
            mb-2 
            break-inside-avoid
            cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div
          className="w-full max-h-screen fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white text-2xl sm:text-3xl lg:text-4xl cursor-pointer font-helvetica"
            onClick={() => setSelectedImage(null)}
          >
            x
          </button>
          <img
            src={selectedImage.imageUrl}
            alt={selectedImage.title}
            className="max-w-[90%] max-h-[90%] rounded-xl z-70"
          />
        </div>
      )}
    </>
  );
}
