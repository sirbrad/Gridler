define(['jquery', 'tpl!../Templates/gridler.tpl'], function($, tpl){
	
	
	var gridler = document.createElement('div');
	
	gridler.className = 'gridler';
	gridler.innerHTML = tpl({gridsize:'grid12'})
	
	
	
	gridler.children[0].style.height  = document.documentElement.clientHeight + 'px';

	
	document.body.appendChild(gridler);
	


});