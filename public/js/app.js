var app = angular.module("swing", ["ngRoute", "ui.bootstrap", "ngAnimate", "pascalprecht.translate"]);

app.config(["$routeProvider", '$translateProvider', function ($routeProvider, $translateProvider) {

    $routeProvider
        .when("/", { templateUrl : "views/home.html" })
        .when("/description", { templateUrl : "views/description.html" })
        .when("/images", { templateUrl : "views/images.html" })
        .when("/triul", { templateUrl : "views/triul.html" })
        .when("/contact", { templateUrl : "views/contact.html" })
        .otherwise({ redirectTo : "/" });

    $translateProvider.preferredLanguage("fr");

    $translateProvider.useStaticFilesLoader({
        prefix: "/languages/",
        suffix: ".json"
    });
}]);
