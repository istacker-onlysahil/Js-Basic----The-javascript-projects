
// main clock working script starts from here 
	setInterval( () => {
	currentDate = new Date();
	hourTime = currentDate.getHours();
	minuteTime = currentDate.getMinutes();
	secondTime = currentDate.getSeconds();


	hourRotatation = 30*hourTime + minuteTime/2;
	minuteRotation = 6*minuteTime;
	secondRotation = 6*secondTime;

	hourhand.style.transform = `rotate(${hourRotatation}deg)`;
	minutehand.style.transform = `rotate(${minuteRotation}deg)`;
	secondhand.style.transform = `rotate(${secondRotation}deg)`;

	},1000);





// clock on and off script code goes here

	function clockToggle(){
		let clockbox = document.getElementById('clock-box')
		let btnOn = document.getElementById('btn-on')
		let btnOff = document.getElementById('btn-off')
		let clockActivated = document.getElementById('clock-alert-on')
		let clockDeActivated = document.getElementById('clock-alert-off')

		if (clockbox.style.display=='block'){
			btnOn.style.display='block';
			btnOff.style.display='none';
			clockbox.style.display='none'
			clockDeActivated.style.display='flex'
			clockActivated.style.display='none'
		}
		else{
			btnOn.style.display='none';
			btnOff.style.display='block';	
			clockbox.style.display='block'
			clockDeActivated.style.display='none'
			clockActivated.style.display='flex'
		}
 }
