"use strict";

app.controller("ItemEditCtrl", function( $scope, ItemStorage, $routeParams, $location){
    $scope.items = [];
    $scope.newTask = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        location: "",
        task: "",
        urgency: "normal" 
    };

    ItemStorage.getItemList()
    .then( (itemCollectionArr) => {
      
        $scope.items = itemCollectionArr;

        $scope.selectedItem = $scope.items.filter(function (item) {
            return item.id === $routeParams.itemId;
        })[0];
        console.log($scope.selectedItem);
    });
    // .then( ItemStorage.updateItem)
});