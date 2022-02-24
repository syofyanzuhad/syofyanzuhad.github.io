
/*
	Callback function that is called immediately after JivoChat is loaded
*/
function jivo_onLoadCallback(){
	// Create a DIV element for the label
	window.jivo_cstm_widget = document.createElement('div');
	jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
	document.body.appendChild(jivo_cstm_widget);
	
	// Adds handlers click on the icon - to maximize the window when clicked
	jivo_cstm_widget.onclick = function(){
		jivo_api.open();
	}
	
	// Change the CSS class if there are agents online
	if (jivo_config.chat_mode == "online"){
		jivo_cstm_widget.setAttribute("class", "jivo_online");
	}
	
	// Now you can show the user a shortcut
	window.jivo_cstm_widget.style.display='block';
}

/*
	Callback function jivo_onOpen and jivo_onClose called whenever the chat window JivoChat is expanded or collapsed by the user or by the proactive invitations rule.
*/
function jivo_onOpen(){
	// If chat is deployed - hide shortcut
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'none';
}
function jivo_onClose(){
	// If chat is minimized - show label
	if (jivo_cstm_widget)
		jivo_cstm_widget.style.display = 'block';
}