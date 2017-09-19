(function(){
  'use strict';

  angular.module('ripcode')
    .factory('codesModel', [
      '$location',
      function($location){
        class CodesModel {
          constructor(){
            this.codigos = [
              {id: 0, nome: "MMC", desc: "Faz o MMC que é uma beleza! Nunca critiquei!", url: function(){$location.path("/mmc")}},
              {id: 1, nome: "MDC", desc: "MDC hardcoded que passa que nem uma beleza!", url: function(){$location.path("/mdc")}},
              {id: 2, nome: "SegTree", desc: "Se hoje é o dia das crianças, devo dizer mais ainda.", url: function(){$location.path("/segtree")}},
              {id: 3, nome: "DFS", desc: "Ontem eu disse: o dia da criança é o dia da mãe.", url: function(){$location.path("/dfs")}},
              {id: 4, nome: "Template 2.0", desc: "Dos pais, das professoras, mas também é o dia dos animais.", url: function(){$location.path("/template20")}},
              {id: 5, nome: "Kapparino Kode", desc: "Sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás.", url: function(){$location.path("/kapparinokode")}}
            ];
          }
        }
        return CodesModel;
      }
    ])
}())
