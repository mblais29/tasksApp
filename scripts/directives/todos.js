angular.module('todoListApp')

.directive('todos', function(){
  return {
      templateUrl: 'templates/todos.html',
    //Defines the controller right inside the directive
      controller: 'mainCtrl',
    //angular will get rid of the todo tags if you prefer set 'replace: true'
      //replace: true
  }

});