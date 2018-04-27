angular.module('Piano').controller('NotesCtrl', NotesCtrl);

NotesCtrl.$inject = ['$scope', '$http'];

function NotesCtrl($scope, $http) {
	var vm = this;
	vm.title = 'Keyboard Piano'

	$scope.keyPress = function($event) {
		$('button').on('click', function() {
			let note = $(this).data('note');
			console.log(note);
		})
		// const keyCode = $event.which || $event.keyCode;
		// if (keyCode === 65) {
		// 	console.log('C');
		// }

 		// $('.white-keys').keydown(function(e) {
 		// 	switch(e) {
 		// 		case (e.keyCode === 65):
 		// 			console.log('C')
 		// 			break;
			// 	case (e.keyCode === 83):
 		// 			console.log('D')
			// 		break;
 		// 		case (e.keyCode === 68):
 		// 			console.log('E')
 		// 			break;
 		// 		case (e.keyCode === 70):
 		// 			console.log('F')
 		// 			break;
 		// 		case (e.keyCode === 71):
 		// 			console.log('G')
 		// 			break;
 		// 		case (e.keyCode === 72):
 		// 			console.log('A')
			// 		break;
 		// 		case (e.keyCode === 74):
 		// 			console.log('B')
 		// 			break;
 		// 		case (e.keyCode === 75):
 		// 			console.log('C')
 		// 			break;
 		// 		default: null;
 		// 	};
 		// })
 		// $('.black-keys').keydown(function(e) {
 		// 	switch(e) {
 		// 		case (e.keyCode === 87):
 		// 			console.log('C#')
 		// 			break;
 		// 		case (e.keyCode === 69):
 		// 			console.log('D#');
 		// 			break;
 		// 		case (e.keyCode === 84):
 		// 			console.log('F#')
 		// 			break;
 		// 		case (e.keyCode === 89):
 		// 			console.log('G#')
 		// 			break;
 		// 		case (e.keyCode === 85):
 		// 			console.log('A#')
 		// 			break;
 		// 		default: null;
 		// 	};
 		// });
 	}
};