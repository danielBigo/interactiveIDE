var inputBox = document.getElementById('chatinputBody');
var inputStyle = document.getElementById('chatinputStyle');
var inputJs = document.getElementById('chatinputJs');

inputBox.onkeyup = function(){
    document.getElementById('printchatbox').innerHTML = inputBox.value;
}
inputStyle.onkeyup = function(){
	document.getElementById('mystyle').innerHTML = inputStyle.value;
}
inputJs.onkeyup = function(){
	document.getElementById('myJs').innerHTML = inputJs.value;
}
 
 $( function() {
    $( "#drag-1" ).draggable();
	$( "#drag-2" ).draggable();
	$( "#drag-3" ).draggable();
  } );

/*function onButtonClick(){
  document.getElementById('chatinput').className="show";
}*/