"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {
    $scope.searchText = SearchTermData;
    ItemStorage.getItemList()
    .then((itemCollection) => {
        $scope.items = itemCollection;
    });
});