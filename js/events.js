function getIt(){
  
  $('p').on('click', function(){
  alert('Hey');
  });
  
}

function frameIt(){
  
  $('img').on('load', function(){
  $('img').classList.add("tasty");
  });
  
}

function pressIt(){
  
  $('#typing').on('keydown', function(e){
    if(e.which == 71){
    alert('You have pressed the letter G.');
  }
  });
  
}

function submitIt(){
 
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  }); 
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
