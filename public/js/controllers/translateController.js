angular.module("swing").controller("translateController", function ($translate, $scope) {

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
