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
      id: 2,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 8000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 3,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 7000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 4,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 6000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 5,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 5000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 6,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 4000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
  ]
}