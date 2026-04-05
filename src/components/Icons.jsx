const images = Object.values(
  import.meta.glob("../assets/social-icons/*.{jpeg,png}", {
    eager: true,
    import: "default",
  }),
);

export default function Icons() {
  return (
    <div className="grid grid-cols-4 gap-1.5 leading-none px-2 w-fit mb-3">
      {images.map((src, i) => (
        <div className="w-full h-10">
          <img
            key={i}
            src={src}
            alt=""
            className="
            leading-none
            w-10 
            h-auto"
          />
        </div>
      ))}
    </div>
  );
}