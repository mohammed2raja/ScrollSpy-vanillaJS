import "./styles.css";
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav li a");
const options = {
  threshold: 0.7
};
function indexCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeLinnk = document.querySelector(`[data-page=${className}]`);
    links.forEach(link => {
      link.classList.remove("active");
    });
    activeLinnk.classList.add("active");
    console.log(activeLinnk);
  });
}
const observer = new IntersectionObserver(indexCheck, options);

sections.forEach(section => {
  observer.observe(section);
});
