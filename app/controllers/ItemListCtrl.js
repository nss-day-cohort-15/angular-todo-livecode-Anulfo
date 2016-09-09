"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData, AuthFactory) {
    $scope.searchText = SearchTermData;
    
    let user = $scope.$parent.getUser();
    console.log($scope.$parent);
    ItemStorage.getItemList(user)
    .then((itemCollectionArr) => {
        console.log("Item Array", itemCollectionArr);
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