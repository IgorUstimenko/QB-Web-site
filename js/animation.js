function headerAnimation(params) {
    const headerTimeline = anime.timeline({
        duration: 2000,
        easing: "easeInOutExpo",
    });

    headerTimeline.add({
        targets: ".main-part-page",
        scale: [1.3, 1],
    });

    headerTimeline.add({
            targets: ".main-part-page .logos-ul",
            translateX: ["-200%", 0],
            opacity: [0, 1],
        },
        0,
    );

    headerTimeline.add({
            targets: ".main-part-page .links-ul",
            translateY: ["-400%", 0],
            opacity: [0, 1],
        },
        0,
    );

    headerTimeline.add({
            targets: ".main-part-page .header-right",
            translateX: ["200%", 0],
            opacity: [0, 1],
        },
        0,
    );

    headerTimeline.add({
            targets: ".main-part-page .creative-tech",
            translateX: ["-400%", 0],
            opacity: [0, 1],
        },
        0,
    );

    headerTimeline.add({
            targets: ".main-part-page .down-arrow",
            translateY: ["200%", 0],
            opacity: [0, 1],
        },
        0,
    );

    headerTimeline.add({
            targets: ".main-part-page div.soc",
            translateX: ["400%", 0],
            opacity: [0, 1],
        },
        0,
    );
}

function secondSectionAnimation(params) {
    const secondSectionTimeline = anime.timeline({
        duration: 2000,
        easing: "easeInOutExpo",
    });

    secondSectionTimeline.add({
        targets: ".second-part-page .we-cont",
        translateX: ["-100%", 0],
        opacity: [0, 1],
    });

    secondSectionTimeline.add({
            targets: ".second-part-page .get-to-know",
            translateY: ["200%", 0],
            opacity: [0, 1],
            "padding-bottom": ["3em", "0.7em"],
        },
        0,
    );

    secondSectionTimeline.add({
            targets: ".second-part-page .idea",
            translateY: ["-100%", 0],
            opacity: [0, 1],
        },
        0,
    );

    secondSectionTimeline.add({
            targets: ".second-part-page .partners-grid",
            translateX: ["39.75rem", 0],
            width: ["0", "39.75rem"],
        },
        0,
    );

    secondSectionTimeline.add({
            targets: ".second-part-page .partners-grid > .partner-box",
            opacity: [0, 1],
        },
        0,
    );
}

function caseAnimation(classSelector) {
    classSelector = `.${classSelector}`;
    const timeline = anime.timeline({
        duration: 2000,
        easing: "easeInOutExpo",
    });

    timeline.add({
        targets: `${classSelector} .name-of-case`,
        translateY: ["-50%", 0],
        opacity: [0, 1],
    });

    timeline.add({
            targets: `${classSelector} .case-descr`,
            translateY: ["50%", 0],
            opacity: [0, 1],
        },
        0,
    );

    timeline.add({
            targets: `${classSelector} .get-to-know`,
            translateY: ["200%", 0],
            opacity: [0, 1],
            "padding-bottom": ["1.5em", "0.7em"],
        },
        0,
    );

    timeline.add({
            targets: `${classSelector} .case-features`,
            translateX: ["-50%", 0],
            opacity: [0, 1],
        },
        0,
    );

    timeline.add({
            targets: classSelector,
            "background-position-y": ["400%", "100%"],
        },
        0,
    );
}

function agencyAnimation(classSelector) {
    classSelector = `.${classSelector}`;

    const timeline = anime.timeline({
        duration: 2000,
        easing: "easeInOutExpo",
    });

    timeline.add({
        targets: `${classSelector} .all-agancy-profile`,
        translateY: ["20%", 0],
        opacity: [0, 1],
    });


    let agencyImg = ".agancy-img";
    let QtechAgencyImg = ".agancy-img-qtech";


    timeline.add({
            targets: `${agencyImg}`,
            translateX: ["20%", 0],
            translateY: ["20%", 0],
        },
        0,
    );

    timeline.add({
            targets: `${QtechAgencyImg}`,
            translateX: ["20%", 0],
            translateY: ["20%", 0],
        },
        0,
    );

    timeline.add({
            targets: `${classSelector}`,
            "background-position-x": ["120%", "100%"],
            "background-position-y": ["150%", "100%"],
        },
        0,
    );
}