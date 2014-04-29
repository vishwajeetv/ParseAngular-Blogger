demoApp.controller('simpleController',  function ($scope, personService) 
{
   init();

    function init() 
    {
        $scope.people = personService.getPerson();
    }
		$scope.addPerson = function()
		{
			var name = $scope.newPerson.name;
			var city = $scope.newPerson.city;
			personService.addPerson(name, city);
			
		};
});
