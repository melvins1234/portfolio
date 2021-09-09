document.addEventListener("scroll", () => {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight,
      revealtop = reveals[i].getBoundingClientRect().top;

    if (revealtop < windowheight - revealtop)
      reveals[i].classList.add("active");
    else reveals[i].classList.remove("active");
  }
});