$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$('.specific-tip').tooltip({
	html:true,
	placement:'right',
	trigger:'click'

});


$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});