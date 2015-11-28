//interprets the javascript in a strict mode by the javascript interpreter
'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
  //this refers to the service itself
  this.helloConsole = function(){
    console.log('This is the hello console service!');
  };
  //http request for json data in todos.json folder
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };
  this.deleteTodo = function(todo){
    console.log("The " + todo.name + " has been deleted!");
    //other logic
  };
  this.saveTodos = function(todo){
    console.log("The " + todo.length + " todos have been saved!");
    //other logic
  };
});