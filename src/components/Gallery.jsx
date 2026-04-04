const images = Object.values(
  import.meta.glob("../assets/graphics/*.{jpeg,png}", {
    eager: true,
    import: "default",
  }),
);

export default function Gallery() {
  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 px-5 leading-none gap-x-2 w-full mb-5">
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
          />
        </div>
      ))}
    </div>
  );
}
