// if obi is chosen
$(document).ready(function(){
	$("#obi").click(function(){
		$("#luke").remove();
		$("#darth").remove();
		$("#maul").remove();
		$("#enemiesAvailable").append('#luke');
	});
});

// if luke is chosen
$(document).ready(function(){
	$("#luke").click(function(){
		$("#obi").remove();
		$("#darth").remove();
		$("#maul").remove();
		
	});
});

// if darth is chosen
$(document).ready(function(){
	$("#darth").click(function(){
		$("#luke").remove();
		$("#obi").remove();
		$("#maul").remove();
		
	});
});

// if maul is chosen
$(document).ready(function(){
	$("#maul").click(function(){
		$("#luke").remove();
		$("#darth").remove();
		$("#obi").remove();
		
	});
});