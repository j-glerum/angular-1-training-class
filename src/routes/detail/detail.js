angular
  .module('detail', [
    'ngRoute',
    'hero'
  ])
  .config(detailConfig)
  .controller('DetailController', DetailController);


function detailConfig($routeProvider) {
  $routeProvider
    .when('/detail/:id', {
      controller: DetailController,
      templateUrl: 'src/routes/detail/detail.tpl.html'
    });
}

function DetailController($scope, $routeParams, heroService, $location) {
  
  $scope.heroId = parseInt($routeParams.id);

  function heroWatch(newVal, oldVal) {
    if (newVal === oldVal) { // initial watch fires with two equal objects, can be ignored
      return;
    }
    heroService.update(newVal);
  }

  // get hero from service
  heroService.get($scope.heroId).then(function(hero) {
    $scope.hero = hero;

    // watch for changes on hero, if any, save to API
    // third parameter of true says to watch all properties
    $scope.$watch('hero', heroWatch, true);
  });

  $scope.gotoList = function() {
    $location.path('/list');
  }

}
