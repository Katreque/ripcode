(function(){
  'use strict';

  angular.module('ripcode')
    .controller('homeController', [
      'codesModel',
      function(codesModel){
        this.inputPesquisa = [];
        this.codigosArray = new codesModel();
    }])
}())
