//Initialisation
var ngTodo = angular.module('ngTodo', [])

//controller, head of department
ngTodo.controller('mainController', function($scope){
	$scope.todolists = [
		
		{
			title: 'Do My Homework',
			details : 'I must do my homework today'
		},
		{
			title: 'Do my Assignment',
			details: 'I must do my assignment tomorrow'
		},
		{
			title: 'Have Breakfast',
			details: 'I must have my breakfast at 9'
		},
		{
			title: 'Have Lunch',
			details: 'I must have my lunch at 2'
		},
		{
			title: 'Have Dinner',
			details: 'I must have my dinner at 10'
		}
		
	];
	
	$scope.addTodolist = function(title) {
		$scope.todolists.push(title);
	};
	
		$scope.addTodolist = function(details) {
		$scope.todolists.push(details);
	};
	
	$scope.deleteTodolist = function(Todo) {
		var index = $scope.todolists.indexOf(Todo);
		$scope.todolists.splice(index, 1);
	}
	
});