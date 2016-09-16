"use strict";

app.factory("FlowerStorage", ($q, $http) => {
  
  let getFlowerArrangements = () => {
    console.log("FlowerStorage getFlowerArrangements is running.")
    let flowers = [];
    return $q((resolve, reject) => {
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((flowerObject) => {
        Object.keys(flowerObject).forEach((key) => {
          flowerObject[key].id = key;
          flowers.push(flowerObject[key]);
        });

        resolve(flowers);
      })
      .error((error) => {
        reject(error);
      });
      console.log("flowers in FlowerFactory getFlowerArrangements", flowers);
    });
  };

  return{getFlowerArrangements}
});
    
