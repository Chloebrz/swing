angular.module("swing").controller("carouselController", function ($scope) {

    $scope.interval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];

    var texts = [
        "Flotteur principal V2, flotteurs annexes V3, voile V1.",
        "Premier gréement voile V2",
        "Premier essai en mer voile V2. Lattes trop souples malgré la pétole...",
        "Premiers essais. Flotteur principal V1 et voile V0 (planche à voile). Validation du principe, mais pas de virement possible.",
        "Premières réflexions...",
        "Sortie un jour très couvert. Voile V1, flotteur principal V2, flotteurs annexes V3."
    ];

    for (var i = 1; i < 7; i++) {

        slides.push({
            image : "images/carousel/img" + i + ".jpg",
            text : texts[i-1]
        })
    }
});
