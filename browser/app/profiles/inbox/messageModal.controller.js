app.controller('MessageModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance){
	$scope.name = 'jack';

	$scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
}]);