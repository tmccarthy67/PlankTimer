	$('#title').text('5 minute Plank Timer');
	$('#position').prepend('<img id="image" src="images/FullPlank.png" />')
	$('#timer').text('00:00');
	$('#start').text('Start');
	var start;
	var now;

	  // function to check when to change positions
	  var checkTimeInterval = function (time) {
	  	if (time == '01:00') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/ElbowPlank.png" />');
	  	};
	  	if (time == '01:30') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/RaisedLegPlank1.png" />');
	  	};
	  	if (time == '02:00') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/RaisedLegPlank2.png" />');
	  	};
	  	if (time == '02:30') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/SidePlank1.png" />');
	  	};
	  	if (time == '03:00') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/SidePlank2.png" />');
	  	};
	  	if (time == '03:30') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/FullPlank.png" />');
	  	};
	  	if (time == '04:00') {
	  		$('#position').empty();
	  		$('#position').append('<img id="image" src="images/ElbowPlank.png" />');
	  	};
	  	if (time == '05:00') {
	  		$('#position').empty();
	  		$('#position').text('END');
	  		$('#timer').css('color', '#FFF');
	  		main();
	  	};
	  	resetFunction();
	  }


	  // is called when document is clicked
		function startClicked(){
	  		$('#position').empty();
	  		$('#timer').css('color', '#000');
				$('#position').prepend('<img id="image" src="images/FullPlank.png" />');
				$('#timer').text('00:00');
				$('#button').empty();
				$('#button').append("<div id='reset'>");
				$('#reset').text('Reset');

			// get the current time
			// var start = moment();
			start = moment();

			// do this 100 times a second
			setInterval(function(){

				// format the elapsed timespan between now and start
				// var now = moment();
				now = moment();
				var timeString = moment(now - start).format('mm:ss');

				// set the content of the .timer div
				var timeDiv = document.querySelector('#timer');
				timeDiv.innerHTML = timeString;

			// check time segments
			checkTimeInterval(timeString);

			}, 10); // 10 miliseconds -> 100 times  a second

		};

		function main(){
			// when document is clicked, call the startClicked function
			document.getElementById("start").addEventListener('click', startClicked);
			// document.getElementById("reset").addEventListener('click', startClicked);
		}

		function resetFunction(){
			// when document is clicked, call the startClicked function
			document.getElementById("reset").addEventListener('click', startClicked);
		}

		// call main function when document is loaded
		document.addEventListener('DOMContentLoaded', main);
