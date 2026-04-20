import { useState, useEffect } from "react";
import { useImages } from "../hooks/useDatabase";

export default function Gallery({ imageFilter }) {
  const { images, loading } = useImages();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const imageFiltering = images.filter(
    (image) => image.category === imageFilter,
  );

  const handleNext = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === imageFiltering.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) =>
      prev === 0 ? imageFiltering.length - 1 : prev - 1,
    );
  };

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

   if (loading) {
    return <div className="uppercase">Loading</div>
  }

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-6 px-5 leading-none gap-x-2 w-full mb-5 overflow-hidden">
        {imageFiltering.map((image, index) => (
          <div className="w-full" key={index}>
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
              onClick={() => {
                setSelectedImage(image);
                setSelectedIndex(index);
              }}
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div
          className="
          w-full 
          max-h-screen 
          fixed 
          inset-0 
          bg-black/90 
          flex 
          items-center 
          justify-center 
          z-30
          cursor-pointer
          "
          onClick={() => {
            setSelectedImage(null);
            setSelectedIndex(null);
          }}
          id="swiper-wrapper"
        >
          <div
            id="image-wrapper"
            className="w-full h-screen flex items-center justify-center"
          >
            <img
              onClick={(e) => e.stopPropagation()}
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-[90%] max-h-[90%] rounded-xl z-70 cursor-default"
            />
          </div>
        </div>
      )}
    </>
  );
}
