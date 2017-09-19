(function(){
  'use strict';

  angular.module('ripcode')
    .factory('codesModel', [
      function(){
        class CodesModel {
          constructor(){
            this.codigos = [
              {id: 0, nome: "MMC", desc: "Faz o MMC que é uma beleza!", url: "/mmc"},
              {id: 1, nome: "MDC", desc: "MDC hardcoded que passa que nem uma beleza!", url: "/mdc"},
              {id: 2, nome: "SegTree", desc: "Se hoje é o dia das crianças, devo dizer mais ainda.", url: ""},
              {id: 3, nome: "DFS", desc: "Ontem eu disse: o dia da criança é o dia da mãe", url: ""},
              {id: 4, nome: "Template 2.0", desc: "Dos pais, das professoras, mas também é o dia dos animais", url: ""},
              {id: 5, nome: "Kapparino Kode", desc: "Sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás", url: ""}
            ];
          }
        }
        return CodesModel;
      }
    ])
}())
