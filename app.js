const app = angular.module('Piano', [])
.controller('NotesCtrl', function($scope) {
	var vm = this;
	vm.title = 'Keyboard Piano'
	vm.whiteNote = [{
		note: 'C',
		keyStroke: 'A',
	}, {
		note: 'D',
		keyStroke: 'S',
	}, {
		note: 'E',
		keyStroke: 'D',
	}, {
		note: 'F',
		keyStroke: 'F',
	}, {
		note: 'G',
		keyStroke: 'G',
	}, {
		note: 'A',
		keyStroke: 'H',
	}, {
		note: 'B',
		keyStroke: 'J',
	}, {
		note: 'C2',
		keyStroke: 'K',
	}];
	vm.blackNote = [{
		note: 'C#',
		keyStroke: 'W',
	}, {
		note: 'D#',
		keyStroke: 'E',
	}, {
		note: 'F#',
		keyStroke: 'T',
	}, {
		note: 'G#',
		keyStroke: 'Y',
	}, {
		note: 'A#',
		keyStroke: 'U',
	}, {
		note: 'C#2',
		keyStroke: 'O',
	}];
});