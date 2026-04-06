const images = Object.values(
  import.meta.glob("../assets/social-icons/*.{jpeg,png}", {
    eager: true,
    import: "default",
  }),
);

export default function Icons() {
  return (
    <div
      className="flex gap-1.5 leading-none px-2 w-fit m-0
            p-0"
    >
      {images.map((src, i) => (
        <div className="flex items-center justify-center h-10">
          <img key={i} src={src} alt="" className="block h-10 w-auto" />
        </div>
      ))}
    </div>
  );
}
