angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'List Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 1,
      name: 'Tim Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Sith', 'Rebels'],
      light: true
    },
    {
      id: 2,
      name: 'Larry Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Sith', 'Rebels'],
      light: true
    },
  ]
}