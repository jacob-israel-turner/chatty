'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {

  	var updateMessages = function(){
	  	MessageService.getMessages().then(function(res){
	    	$scope.messages = res;
	  	})
	  }

	  $scope.postMessage = function(){
	  	MessageService.postMessage($scope.newMessage)
	  		.then(function(){
	  			updateMessages();
	  		})
	  }

	  updateMessages();

  });
