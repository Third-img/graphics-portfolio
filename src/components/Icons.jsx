const images = Object.values(
  import.meta.glob("../assets/social-icons/*.{jpeg,png}", {
    eager: true,
    import: "default",
  }),
);

export default function Icons() {
  return (
    <div
      className="flex gap-1.5 px-2 w-fit m-0
            p-2 border-2 border-cherry-0 rounded-xl"
    >
      {images.map((src, i) => (
        <div className="flex items-center justify-center">
          <img key={i} src={src} alt="" className="block h-10 w-auto" />
        </div>
      ))}
    </div>
  );
}
