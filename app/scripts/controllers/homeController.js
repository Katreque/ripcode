(function(){
  'use strict';

  angular.module('ripcode')
    .controller('homeController', [
      'codesModel',
      '$location',
      function(codesModel, $location){
        this.inputPesquisa = [];
        this.codigosArray = new codesModel();

        this.voltar = function(){
        	$location.path("/");
        }

        this.enviar = function(){
        	alert("Copiar é feio faça sua versão... :p")
        }
    }])
}())
