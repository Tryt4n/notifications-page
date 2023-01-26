export default function preventByClickingLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault(); // by default this has to be removed to possible click in the links
      e.stopPropagation();
    })
  );
}
