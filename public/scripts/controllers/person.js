'use strict';


angular.module('publicApp')
    .controller('PersonCtrl', function($scope, $http, $timeout) {



        $scope.newPerson = {};
        $scope.companies = {};
 

        $scope.initnewper = function(per) {
            $scope.newPerson = per || {};

        }

        function getAllPersons ( ) {
            // body...
            $http.get('/api/getAllPerson')
            .then(function(res) {
                $scope.persons = res.data;
            },function (err) {
                // body...
                 console.log('Error: ' + err);
            })
        }
     getAllPersons ();
     $http.get('/api/getAllCompanies')
            .then(function(res) {
                $scope.companies = res.data;
            },function (err) {
                // body...
                 console.log('Error: ' + err);
            })


        $scope.savePerson = function() {

            $http.post('/api/saveNew', $scope.newPerson)
                .then(function(data) {
                    $scope.initnewper();
                   getAllPersons ();
                    $('#myModal').modal('hide');

                },function (err) {
                // body...
                 console.log('Error: ' + err);
            })

        }

        $scope.perToEdit = function(obj) {
            $scope.newPerson = obj;
        }

        $scope.deletePerson = function(personID) {
            $http.delete('/api/deletePerson/' + personID)
                .then(function(data) {
                     
                    getAllPersons ();

                },function (err) {
                // body...
                 console.log('Error: ' + err);
            })
        }

  
    });