headerAnimation();
if (screen.width > 480) {
    const myFullpage = new fullpage("#fullpage", {
        onLeave: (origin, destination, direction) => {
            const loadedSection = this;

            switch (destination.index) {
                case 0:
                    headerAnimation();
                    break;

                case 1:
                    secondSectionAnimation();
                    break;

                case 2:
                    caseAnimation("brig-case");
                    break;

                case 3:
                    caseAnimation("kislorod-page");
                    break;

                case 4:
                    caseAnimation("tageps-case-page");
                    break;

                case 5:
                    caseAnimation("td-case-page");
                    break;

                case 6:
                    agencyAnimation("blossom-agancy-page");
                    break;

                case 7:
                    agencyAnimation("qt-agency-page");
                    break;
            }
        },
    });
}
