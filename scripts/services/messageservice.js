'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http) {

  	this.getMessages = function(){
  		return $http({
  			method: 'GET',
  			url: 'http://localhost:9001'
  		}).then(function(data){
  			return data.data;
  		})
  	}

    this.postMessage = function(message){
      return $http({
        method: 'POST',
        url: 'http://localhost:9001',
        data: message
      }).then(console.log.bind(console))
    }

  });
