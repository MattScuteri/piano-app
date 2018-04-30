var NotesCtrl = function($scope, $http) {
	var vm = this;
	vm.title = 'Keyboard Piano'

	$scope.keyPress = function($event) {
		let note = $($event.target).data('note');
		playNote(note);

 	}

 	function playNote(note) {
		let audio = $(`audio[data-note="${note}"]`);

		if (!audio[0]) return;

		audio[0].currentTime = 0;
		audio[0].play();
		$scope.$apply(function(){
			$scope.noteSelected.push(note);		
		});	
		
		console.log($scope.noteSelected);
 	}

	$(window).on('keydown', function($event) {
		const noteLookup = {
			65: {
				note: 'C',
			},
			87: {
				note: 'Csharp'
			},
			83: {
				note: 'D',
			},
			69: {
				note: 'Dsharp',
			},
			68: {
				note: 'E',
			},
			70: {
				note: 'F',
			},
			84: {
				note: 'Fsharp',
			},
			71: {
				note: 'G',
			},
			89: {
				note: 'Gsharp',
			},
			72: {
				note: 'A',
			},
			85: {
				note: 'Asharp',
			},
			74: {
				note: 'B'
			},
			75: {
				note: 'C2',
			},
		};

		if (noteLookup[$event.which]) {
			console.log(noteLookup[$event.which])
			playNote(noteLookup[$event.which].note);
		}
	})
	$scope.noteSelected = [];

	$scope.clearStaff = function() {
		$scope.noteSelected = [];					
	}

	$scope.playComposition = function(note) {
		for (let i = 0; i < $scope.noteSelected.length; i++) {
			let score = $scope.noteSelected[i];
			let audio = $(`audio[data-note="${note}"]`);

			audio[0].play(score);
		}
	}
};

angular.module('Piano').controller('NotesCtrl', ['$scope', '$http', NotesCtrl]);

// NotesCtrl.$inject = ['$scope', '$http'];