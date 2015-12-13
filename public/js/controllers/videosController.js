angular.module("swing").controller("videosController", function ($scope, $uibModal, $log) {

    var videos = $scope.videos = [
        {
            link : "historique2014",
            title : "Historique des prototypes",
            legend : "Vidéo retraçant l'évolution des prototypes de 2008 à 2014"
        },
        {
            link : "swing_music",
            title : "S'Wing vent léger",
            legend : "Bien lancé dans un petit 3 Beaufort. Les flotteurs passent bien le clapot. Virement à 1:10."
        },
        {
            link : "swing_a_bord",
            title : "A bord du S'Wing",
            legend : "Virement en vue embarquée (un peu long, à une main, Gopro dans l'autre...)"
        },
        {
            link : "virement",
            title : "Virement",
            legend : "Vue globale d'un virement."
        },
        {
            link : "virement_embarque",
            title : "Virement embarqué",
            legend : "Simplicité de la manœuvre."
        }
    ];

    $scope.filePath = "videos/default.html";

    $scope.showVideo = function (link) {
        $scope.filePath = "videos/" + link + ".html";
    }
});
