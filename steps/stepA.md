# Angular Training Course - Zerrtech
-----

## Step A: 

### Changed Files:
* `src/common/hero/heroService.js`
* `src/routes/detail/detail.js`

### Things to Do:
1. `src/common/hero/heroService.js`
   * Add a `update(hero)` method
   * It should do a PUT request to the `/heroes/:id` server endpoint
   * The server will respond with a 204 No Content successful message

2. `src/routes/detail/detail.js`
   * We must watch when the hero object changes and if so, call the new `update(hero)` method
   * We will need to do a deep watch to know when a property on the object changes
