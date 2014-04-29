demoApp.service('personService', function () 
{
	 var people = [{name:'Vishwajeet', city:'Pune'},{name:'Digant', city:'Lucknow'}];

		this.addPerson = function(nameToAdd, cityToAdd)
		{
			people.push(
			{
			 name : nameToAdd,
			 city : cityToAdd
			});
		};
    this.getPerson = function () {
        return people;
    };
});
