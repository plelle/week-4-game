var characters = {
	obi: ["Obi Wan Kenobi", "assets/images/obi.jpg", 120, 8],
	luke: ["Luke Skywaler", "assets/images/luke.jpg", 100, 5],
	darth: ["Darth Sidious", "assets/images/darth.jpg", 150, 20],
	maul: ["Darth Maul", "assets/images/maul.jpg", 180, 25]
};




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