/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module('myApp', []);
    var app2 = angular.module('myApp2', []);
    var pg = require('pg');
    var connectionString = "sslmode=verify-ca sslrootcert=server-ca.pem \
      sslcert=client-cert.pem sslkey=client-key.pem \
      hostaddr=[INSTANCE_IP] \
      user=postgres dbname=[DB_NAME]";

    app.controller("myControl", function($scope){

        $scope.madeAgain={
           "background-image": "url('./images/PortBack.jpg')",
            "resize": "both",
            "background-position": "center",
           "background-attachment": "fixed",
         "background-size": "cover"
        }

    });


app2.controller("anoControl", function($scope){
    $scope.makeIT ={
        "background-color":"rgb(51, 54, 56)"

    }
});