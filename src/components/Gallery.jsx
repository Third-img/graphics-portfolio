import { useState, useEffect } from "react";
import WorkingVideo from "../assets/video/editing.mp4";

import { usePortfolio } from "../hooks/usePortfolio";

export default function Gallery() {
  const { items, loading } = usePortfolio();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  useEffect(() => {
    if (selectedVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  if (loading) return <p className="uppercase">Loading</p>;

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-6 px-5 leading-none gap-x-2 w-full mb-5 overflow-hidden">
        {items.map((item) => (
          <div className="w-full">
            <img
              key={item.id}
              src={item.imageUrl}
              alt={item.title}
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
              onClick={() => setSelectedImage(item)}
            />
          </div>
        ))}
        <div className="h-full w-full mb-2">
          <video
            src={WorkingVideo}
            className="object-contain rounded-xl overflow-hidden cursor-pointer"
            autoPlay
            muted
            loop
            playsInline
            onClick={() => setSelectedVideo()}
          ></video>
        </div>
      </div>

      {selectedImage  !== null && (
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
      {selectedVideo !== null && (
        <div
          className="w-full max-h-screen fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-8 right-8 text-white text-2xl sm:text-3xl lg:text-4xl cursor-pointer font-helvetica"
            onClick={() => setSelectedVideo(null)}
          >
            x
          </button>
          <video
            src={WorkingVideo}
            alt="video"
            className="w-[80%] max-h-[80%] rounded-lg lg:rounded-3xl z-70"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
    </>
  );
}
