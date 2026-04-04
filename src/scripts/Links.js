export const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const goToInstagram = () => {
  window.open("https://www.instagram.com/mga.nunal/");
};
