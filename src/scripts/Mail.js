import emailjs from "@emailjs/browser";

const eventEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_5y0qs2l",
      "template_p4zn10k",
      e.target,
      "v9n-e7njUcVsXqVO2",
    )
    .then(() => {
      console.log("Email sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default eventEmail;
