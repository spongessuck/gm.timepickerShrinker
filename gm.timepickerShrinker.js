(function() {
	angular.module('gm.timepickerShrinker', ['ui.bootstrap'])
	.directive('timepicker', function() {
		return {
			link: function(scope, elem, attr, ctrl) {
	
				function shrink(child) {
					var childElem = angular.element(child);
					if(childElem.hasClass('btn'))
						childElem.addClass('btn-sm');
					if(childElem.hasClass('form-control'))
						childElem.addClass('input-sm');
				}
	
				angular.forEach(elem.find('a'), shrink);
				angular.forEach(elem.find('button'), shrink);
				angular.forEach(elem.find('input'), shrink);
			}
		};
	});
)();
