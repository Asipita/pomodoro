var vm = new Vue({
	el: '#root',
	data(){
		return{
			initialWork: 25,
			initialRelax: 5,
			currentMinute: '00',
			currentSecond: '00',
			stateText: 'idle...'
		}		
	},
	methods: {
		incrementer: function(entry){
			if(entry){
				(this.initialRelax < 1 )? this.initialRelax += 1: this.initialRelax += 1;
				return;
			}
			(this.initialWork < 1 )? this.initialWork += 1: this.initialWork += 1;
			return;
		},
		decrementer: function(entry){
			if(entry){
				(this.initialRelax > 1 )? this.initialRelax -= 1: this.initialRelax += 0;
				return;
			}
			(this.initialWork > 1 )? this.initialWork -= 1: this.initialWork += 0;
			return;
		},
		startSession: function(){
			// document.getElementById("number").style.color= 'red';
			vm.currentMinute = vm.initialWork - 1;
			vm.currentSecond = 59;
			vm.stateText = 'Work time...'

			var first = setInterval(function(){
				vm.currentSecond -= 1
				if(vm.currentSecond < 0){
					vm.currentSecond = 59;
					vm.currentMinute -=1;
					if(vm.currentMinute < 0){
						clearInterval(first);
						vm.relaxSession();
					}					
				}
			}, 200);
		},
		relaxSession: function(){
			vm.currentMinute = vm.initialRelax - 1;
			vm.currentSecond = 59;
			vm.stateText = 'Relaxing...'

			var first = setInterval(function(){
				vm.currentSecond -= 1
				if(vm.currentSecond < 0){
					vm.currentSecond = 59;
					vm.currentMinute -=1;
					if(vm.currentMinute < 0){
						clearInterval(first);
						vm.startSession();
					}					
				}
			}, 200);
		}			
	}
})

// document.getElementById("number").style.color= 'red';

// startSession: function(){
// 			console.log('[working...]')
// 			this.minuteWork = this.initialWork -1;
// 			this.secondWork = 59;

// 			setInterval(function (){
// 				if(vm.minuteWork < 0){	
// 					return vm.startRelaxing()
// 				}
// 				vm.minuteWork -= 1;
// 			}, 60*300);

// 			setInterval(function (){
// 				if(vm.secondWork < 1){
// 					return vm.secondWork += 60
// 				}
// 				return vm.secondWork -= 1;
// 			}, 300);
// 		},

// 		startRelaxing: function(){
// 			console.log('[relaxing...]')
// 			// if(!this.minuteWork) return;
// 			this.minuteWork = this.initialRelax -1;
// 			this.secondWork = 59;

// 			setInterval(function (){
// 				if(vm.minuteWork < 0){
// 					return vm.startSession()
// 				}
// 				 return vm.minuteWork -= 1;
// 			}, 60*100);

// 			setInterval(function (){
// 				if(vm.secondWork < 1){
// 					return vm.secondWork += 60
// 				}
// 			  return vm.secondWork -= 1;
// 			}, 300);
// 		}