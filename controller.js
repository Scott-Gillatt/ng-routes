app.controller("RouteController", function($scope) {

    $scope.crew = [
        { name: "Picard", description: "Captian" },
        { name: "Scottie", description: "Co-Captian" },
        { name: "Aaron", description: "Janintor" },
        { name: "Eric", description: "Technician" },
        { name: "Kirk", description: "Captain#2" },
    ]

})


app.controller("NewController", function($scope, $location){
     $scope.person = { name: "", description: "" }

    $scope.save = function() {
        $scope.crew.push($scope.person);
        $location.path("/")
    }
})

app.controller("EditController", function ($scope, $location, $routeParams){
    $scope.person = $scope.crew[$routeParams.id];
    
    $scope.save = function () {
        $location.path("/");
    }
})