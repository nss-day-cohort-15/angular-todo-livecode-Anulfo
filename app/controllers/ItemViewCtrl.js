"use strict";

app.controller("ItemViewCtrl", function( $scope, ItemStorage, $routeParams){
    $scope.items = [];

    ItemStorage.getItemList()
    .then( (itemCollectionArr) => {
      
        $scope.items = itemCollectionArr;

        $scope.selectedItem = $scope.items.filter(function (item) {
            return item.id === $routeParams.itemId;
        })[0];
    });
});