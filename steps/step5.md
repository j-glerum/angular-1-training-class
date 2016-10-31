# Angular Training Course - Zerrtech
-----

## Step 5: $http 

### Things to Do:
1. `src/common/hero/heroService.js`
   * use an Angular `value` to set a value for 'HEROES_API' that is equal to the location of the API:
     * https://angular-1-training-class-api.herokuapp.com
     * this will be our API root
     * the actual data is at [https://angular-1-training-class-api.herokuapp.com/heroes](https://angular-1-training-class-api.herokuapp.com/heroes)
     * code: `.value('HEROES_API', 'https://angular-1-training-class-api.herokuapp.com')`
   * inject `$http` and the value `HEROES_API` we just created into `heroService`
   * replace hardcoded `heroes` list with empty array `[]`
   * in `getAll()`:
     * check if the heroes exist
     * if they do not exist, get them with `$http.get(HEROES_API + '/heroes').then(function(res) {...})`
     * the heroes will be in the `data` property of the response. i.e. `heroes = res.data`
     * if they do exist, return them in a promise with `return $q.when(heroes)`
   * in `get(id)`:
     * instead of using the global `heroes` object to filter through, use the `getAll` function to get the heroes first.
     * This will ensure that if you load the details page first, it will fetch them from the API file.
2. `src/routes/list/list.js`
   * set initial `heroes` list to an empty array ` $scope.heroes = []`
   * use `heroService.getAll()` to retrieve the heroes and set `$scope.heroes` with the response in the promise callback function
3. `src/routes/detail/detail.js`
   * set initial `hero` object to an empty object `$scope.hero = {}`
   * use `heroService.get()` to retrieve the hero and set `$scope.hero` with the response in the promise callback function