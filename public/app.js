'use strict';
var learnjs = {};

learnjs.problemView = function(){
  return $('<div class="problem-view">').text('Coming soon!');
}

learnjs.anotherView = function(){
  return $('<div class="another-view">').text('Coming soon!');
}

learnjs.showView = function(hash){
  var routes = {
    '#problem-1': learnjs.problemView,
    '#another-1': learnjs.anotherView,
  };
  var viewFn = routes[hash];
  if(viewFn){
    $('.view-container').empty().append(viewFn())
  };
}
