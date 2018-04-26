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
			}, 1000);
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
			}, 1000);
		}			
	}
})
