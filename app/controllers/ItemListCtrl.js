"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {
    $scope.searchText = SearchTermData;
    
    ItemStorage.getItemList()
    .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
    });

    $scope.itemDelete = (itemId) => {
        ItemStorage.deleteItem(itemId)
        .then ( (response) => {
            ItemStorage.getItemList()
            .then( (itemCollectionArr) => {
                $scope.items = itemCollectionArr;
            });
        });
    };

    // $scope.itemEdit = (itemId) => {
    //     ItemStorage.editItem(itemId);
    // };
});