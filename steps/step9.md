# Angular Training Course - Zerrtech
-----

## Step 9: 

### Changed Files:
* `src/common/squad/squadService.js`
* `src/routes/list/list.js`

### Things to Do:
1. `src/common/squad/squadService.js`
   * We have added a `contains(hero)` method:

2. `src/routes/list/list.js`
   * We want to filter out the list of heroes and exclude any in squad
   * We can use `$watch` to see when squadHeroes change, and then create a modified list of heroes on scope called `noSquadHeroes`
   * Give the `heroList` this new `noSquadHeroes` list
