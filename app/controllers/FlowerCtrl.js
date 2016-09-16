"use strict";

app.controller("FlowerCtrl", function($scope, FlowerStorage, $location){
    


    FlowerStorage.getFlowerArrangements()
      .then((flowerCollectionArr) => { 
        $scope.flowers = flowerCollectionArr;
        console.log("flowerCollectionArr", flowerCollectionArr)
      });

})

