/**
 * This method checks if the email is valid or not
 * @param {string} email email address to be validated
 * @return {boolean}
 */
function validateEmail(email) {
  // if the email is empty or undefined then return false as it is not valid email
  if (!email) {
    return false;
  }
  if (email.includes("@")) {
    return true;
  }
}

document.querySelectorAll("nav .nav-item").forEach(function (item) {
  // add event listener for each nav items
  item.addEventListener("click", function (e) {
    // prevent default action of the a tag
    e.preventDefault();
    const id = e.target.getAttribute("href");
    // get the href to which it should navigate to
    if (id.includes("html")) {
      // if it navigates to some other page then navigate to it
      window.open(id, "_blank");
      return;
    }
    // else get the tag to which the page should be scrolled to
    const element = document.querySelector(id);
    // and scroll it to the view
    scrollToView(element);
  });
});
// this function takes the element and scrolls it to the viewport
function scrollToView(element) {
  // get the navbar height
  const navBarHeight = document.querySelector("nav").scrollHeight + 10;
  // get top position of the body relative to the viewport
  const bodyTop = document.body.getBoundingClientRect().top;
  // get the top position of the element relative to the viewport
  const elementTop = element.getBoundingClientRect().top;
  // calculate the element position relative to the body top
  const elementPosition = elementTop - bodyTop;
  // and calculate the scroll position such that the navbar should not hide the element after scrolling
  const scrollToPosition = elementPosition - navBarHeight;

  // and then scroll it to the view with a smooth animation
  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
}

// this function changes the color of nav bar on scroll
window.onscroll = function () {
  const nav = document.querySelector("nav");
  const navheight = nav.scrollHeight + 10;
  // this gets the scroll offset of the body tag relative to the top of the browser
  const bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
  // if scrolled height is greater than the navbar height then show the color
  if (bodyTop >= navheight) {
    nav.classList.add("nav-color");
  } else {
    // else remove the color
    nav.classList.remove("nav-color");
  }
};
