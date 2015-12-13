angular.module("swing").controller("headerController", function ($scope, $location) {

    $scope.isActive = function (viewLocation) {

        var active = (viewLocation === $location.path());
        return active;
    };
});
