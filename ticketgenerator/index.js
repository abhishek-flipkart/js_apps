var generateBtn = document.getElementById("generate");
var ticketPlace = document.getElementById("ticket");
generateBtn.onclick = function() {
	randomTicket.call(ticketPlace,7);
}

function randomTicket(digit){
	var ticket="";
	if(digit <= 0 || digit == undefined) digit=1;
	for(var i = 0; i < digit; i++){
		ticket += Math.floor(Math.random()*10) + "";
	}
	this.innerHTML = parseInt(ticket);
}