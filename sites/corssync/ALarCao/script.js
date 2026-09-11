const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".tab-panel"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", String(item === tab));
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === targetId);
    });

    tab.classList.add("is-active");
  });
});
