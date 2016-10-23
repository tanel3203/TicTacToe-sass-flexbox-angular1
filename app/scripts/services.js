(function () {
'use strict';

angular.module('myApp.services', [])
.service('PlaygroundService', PlaygroundService);

function PlaygroundService() {
		var playground = {
		'windowArea': {
				'width': 				600 + 'px',
				'height': 				600 + 'px',
    			'border-style': 		'solid',
    			'border-color': 		'#0000ff',
	  			'-moz-box-shadow':    	'inset 0 0 100px #000000',
				'-webkit-box-shadow': 	'inset 0 0 100px #000000',
				'box-shadow':         	'inset 0 0 100px #000000',
				'display': 				'flex'
		},
		sizes: {
			totalArea: {
				'width': 				300 + 'px',
				'height': 				300 + 'px',
    			'border-style': 		'solid',
    			'border-color': 		'#000000',
	  			'-moz-box-shadow':    	'inset 0 0 100px #000000',
				'-webkit-box-shadow': 	'inset 0 0 100px #000000',
				'box-shadow':         	'inset 0 0 100px #000000',
				'margin': 				'auto'


			},
			pieceArea: {
				'width': 				100 + 'px',
				'height': 				100 + 'px',
    			'border-style': 		'solid',
    			'border-color': 		'#000000',
	  			'-moz-box-shadow':    	'inset 0 0 100px #000000',
				'-webkit-box-shadow': 	'inset 0 0 100px #000000',
				'box-shadow':         	'inset 0 0 100px #000000',
				'float': 				'left'
			}
		},
		partsCount: 9,
		partsInRow: 3,
		parts: {
			topLeft: {
				'name':'test1'
			},
			topMiddle: {
				'name':'test2'
			},
			topRight: {
				'name':'test3'
			},
			centerLeft: {
				'name':'test4'
			},
			centerMiddle: {
				'name':'test5'
			},
			centerRight: {
				'name':'test6'
			},
			bottomLeft: {
				'name':'test7'
			},
			bottomMiddle: {
				'name':'test8'
			},
			bottomRight: {
				'name':'test9'
			}
		}
	}
return playground;
}


})();