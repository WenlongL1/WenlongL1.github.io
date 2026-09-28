(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!button || !nav) return;
  button.hidden = false;
  document.documentElement.classList.add("js");
  const close = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true"
    ) {
      close();
      button.focus();
    }
  });
  const sections = document.querySelectorAll("main > section[id]");
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        nav.querySelectorAll("a").forEach((link) => {
          if (link.hash === "#" + entry.target.id)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-12% 0px -65% 0px", threshold: 0 },
  );
  sections.forEach((section) => observer.observe(section));
})();
