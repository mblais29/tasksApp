//interprets the javascript in a strict mode by the javascript interpreter
'use strict';

//grabs the main module, don't use [] in the module because we don't want to create a new module, just add new controller to existing module
angular.module('todoListApp')
//Can now access the dataservice
  .controller('mainCtrl', function($scope, dataService){
    $scope.helloConsole = dataService.helloConsole;
    
    $scope.addTodo = function(){
      var todo = {name: "This is a new todo."};
      //pushs new record to array
      //unshift adds the todo to the begining of the list
      $scope.todos.unshift(todo);
    }
    //The service grabs the response from the server and adds it to the todos variable
    dataService.getTodos(function(response){
      console.log(response.data);
      $scope.todos = response.data;
    });
    
    $scope.deleteTodo = function(todo, $index){
      dataService.deleteTodo(todo);
      //removes the delete object from the array
      $scope.todos.splice($index, 1);
    };
    
    $scope.saveTodos = function(){
      var filteredTodos = $scope.todos.filter(function(todo){
        if(todo.edited){
          return todo;
        }
      });
      dataService.saveTodos(filteredTodos);
    };
})