const headerTimeline = anime.timeline({
  duration: 2000,
  easing: "easeInOutExpo",
});

headerTimeline.add({
  targets: ".main-part-page",
  scale: [1.3, 1],
});

headerTimeline.add(
  {
    targets: ".main-part-page .logos-ul",
    translateX: ["-200%", 0],
    opacity: [0, 1],
  },
  0
);

headerTimeline.add(
  {
    targets: ".main-part-page .links-ul",
    translateY: ["-400%", 0],
    opacity: [0, 1],
  },
  0
);

headerTimeline.add(
  {
    targets: ".main-part-page .header-right",
    translateX: ["200%", 0],
    opacity: [0, 1],
  },
  0
);

headerTimeline.add(
  {
    targets: ".main-part-page .creative-tech",
    translateX: ["-400%", 0],
    opacity: [0, 1],
  },
  0
);

headerTimeline.add(
  {
    targets: ".main-part-page .down-arrow",
    translateY: ["200%", 0],
    opacity: [0, 1],
  },
  0
);

headerTimeline.add(
  {
    targets: ".main-part-page div.soc",
    translateX: ["400%", 0],
    opacity: [0, 1],
  },
  0
);

const secondSectionTimeline = anime.timeline({
  duration: 2000,
  easing: "easeInOutExpo",
  autoplay: false,
});

secondSectionTimeline.add({
  targets: ".second-part-page .we-cont",
  translateX: ["-100%", 0],
  opacity: [0, 1],
});

secondSectionTimeline.add(
  {
    targets: ".second-part-page .get-to-know",
    translateY: ["200%", 0],
    opacity: [0, 1],
    "padding-bottom": ["3em", "0.7em"],
  },
  0
);

secondSectionTimeline.add(
  {
    targets: ".second-part-page .partners-grid",
    translateX: ["39.75rem", 0],
    width: ["0", "39.75rem"],
  },
  0
);

secondSectionTimeline.add(
  {
    targets: ".second-part-page .partners-grid > .partner-box",
    opacity: [0, 1],
  },
  0
);

secondSectionTimeline.play();
