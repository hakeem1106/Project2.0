/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module('myApp', []);

    app.controller("myControl", function($scope){
        $scope.madeAgain={
           "background-image": "url('./images/PortBack.jpg')",
            "resize": "both",
            "background-position": "center",
           "background-attachment": "fixed",
         "background-size": "cover",
         "height": "100px",
         "width": "200px"
        }

    });
