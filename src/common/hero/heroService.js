angular
  .module('heroService', [
  ])
  .value('HEROES_API', 'https://angular-1-training-class-api.herokuapp.com')
  .factory('heroService', heroService);

function heroService($http, $q, HEROES_API) {
  
  var heroes = [];

  var service = {
    getAll: getAll,
    get: get
  };

  function getAll() {
    if (heroes.length === 0) {
      // get heroes from data/heroes.json
      // and set heroes to the value returned in the resonse
      return $http.get(HEROES_API + '/heroes').then(function(res) {
        heroes = res.data;
        return heroes;
      });
    } else {
      // return heroes in a promise
      return $q.when(heroes);
    }
  }

  function get(id) {
    return this.getAll().then(function(heroes) {
      // move filtering here
      var h = heroes.filter(function(hero) {
        return hero.id === id;
      });
      return h[0];
    }); 
  }

  return service;
}
