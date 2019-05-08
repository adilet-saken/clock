var app = new Vue({
	el: '#app',
	data: {
		seconds: 0,
		minutes: 0,
		hours: 0,
	},
	computed: {
		secondsHandDegree: function() {
			return this.seconds * 6;
		},
		minutesHandDegree: function() {
			return (parseInt(this.minutes) + this.seconds / 60) * 6;
		},
		hoursHandDegree: function() {
			return (parseInt(this.hours) + (parseInt(this.minutes) + this.seconds / 60) / 60) * 30;
		},
	},
	methods: {
		getWidth: function(n) {
			if (n % 5 == 0) {
				return 3;
			} else {
				return 1;
			}
		},
		getDegree: function(n) {
			if (n % 15 == 0) {
				return n * 6 - 1.5;
			} else {
				return n * 6;
			}
		},
		tick: function() {
			this.seconds++;
			if (this.seconds >= 60) {
				this.seconds = this.seconds % 60;
				this.minutes++;
			}
			if (this.minutes >= 60) {
				this.minutes = this.minutes % 60;
				this.hours++;
			}
			if (this.hours >= 24) {
				this.hours = this.hours % 24 ;
			}
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			let today = new Date();
			app.seconds = today.getSeconds();
			app.minutes = today.getMinutes();
			app.hours = today.getHours();
			window.setInterval(() => {
				app.tick();
			}, 1000);
		});
	}
});