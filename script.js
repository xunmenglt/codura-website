const tabs = document.querySelectorAll(".tab");
const video = document.querySelector(".demo-player");

const videoSources = [
  "assets/demo-generate.mp4",
  "assets/demo-comment.mp4",
  "assets/demo-translate.mp4",
  "assets/demo-qa.mp4"
];

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const index = tab.getAttribute("data-index");
    video.src = videoSources[index];
    video.play();
  });
});
