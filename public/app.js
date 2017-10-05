'use strict';
var learnjs = {};

learnjs.appOnReady = function(){
  window.onhashchange = function(){
    learnjs.showView(window.location.hash)
  };
  learnjs.showView(window.location.hash);
}

learnjs.problemView = function(problemNumber){
  var view = $('.templates .problem-view').clone();
  view.find('.title').text('Problem #' + problemNumber);
  return view;
}

learnjs.anotherView = function(){
  return $('<div class="another-view">').text('Coming soon!');
}

learnjs.showView = function(hash){
  var routes = {
    '#problem': learnjs.problemView,
    '#another': learnjs.anotherView,
  };
  var hashParts = hash.split('-');
  var viewFn = routes[hashParts[0]];
  if(viewFn){
    $('.view-container').empty().append(viewFn(hashParts[1]));
  };
}

learnjs.problems = [
  {
    description: "What is truth?",
    code: "function problem() { return __; }"
  },
  {
    description: "Simple Math",
    code: "function problem() { return 42 === 6 * __; }"
  }
]
