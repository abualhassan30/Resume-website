$(document).ready(function(){
    $("#show").click(function(){
      $(".test").show();
    });
    $("#hide").click(function(){
      $(".test").hide();
    });
  });

  const options = { 
    month: '2-digit', 
    day: '2-digit',
    year: 'numeric', 
  };
  
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();


