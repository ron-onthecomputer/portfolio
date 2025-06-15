var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;top: " +e.clientY + "px;";});  
  document.addEventListener("scroll", function () {
    const aboutSection = document.getElementById("about");
    const aboutContSection = document.getElementById("about-cont");
    const aboutLink = document.querySelector('a[href="#about"]');
    const triggerPoint = 150;
    const isInView = (elem) => {
      const rect = elem.getBoundingClientRect();
      return rect.top <= triggerPoint && rect.bottom > triggerPoint;
    };

    if (isInView(aboutSection) || isInView(aboutContSection)) {
      aboutLink.classList.add("active");
    } else {
      aboutLink.classList.remove("active");
    }
  });
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
  if (hamburgerIcon.style.display === "none") {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  } else {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  }
});
  