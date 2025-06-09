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