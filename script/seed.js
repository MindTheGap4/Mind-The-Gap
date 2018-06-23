'use strict'

const db = require('../server/db')
const {User, State, Activity, Point} = require('../server/db/models')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'theDog',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'theDog',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const states = await Promise.all([
    State.create({
      name: 'New York',
      abbreviation: 'NY',
      imageUrl: 'https://www.freeclipartnow.com/d/21878-1/new-york.jpg'
    }),
    State.create({
      name: 'California',
      abbreviation: 'CA',
      imageUrl: 'https://www.freeclipartnow.com/d/21824-1/california.jpg'
    }),
    State.create({
      name: 'Florida',
      abbreviation: 'FL',
      imageUrl: 'https://www.freeclipartnow.com/d/21832-1/florida.jpg'
    })
  ])

  const activities = await Promise.all([
    Activity.create({
      userId: 1,
      name: 'Senator Bob',
      category: 'contact representative',
      date: new Date(),
      status: 'past',
      points: 5,
      link: 'bob.org'
    }),
    Activity.create({
      userId: 1,
      name: 'Senator Paul',
      category: 'contact representative',
      date: new Date(),
      status: 'past',
      points: 5,
      link: 'paul.org'
    }),
    Activity.create({
      userId: 1,
      name: 'Senator Shelly',
      category: 'contact representative',
      date: new Date(),
      status: 'past',
      points: 5,
      link: 'shelly.org'
    }),
    Activity.create({
      userId: 2,
      name: 'Senator Bob',
      category: 'contact representative',
      date: new Date(),
      status: 'past',
      points: 5,
      link: 'bob.org'
    })
  ])
  const points = await Promise.all([
    Point.create({
      month: 5,
      year: 2018,
      goal: 100,
      totalEarned: 50,
      userId: 1
    }),
    Point.create({
      month: 4,
      year: 2018,
      goal: 100,
      totalEarned: 90,
      userId: 1
    }),
    Point.create({
      month: 3,
      year: 2018,
      goal: 100,
      totalEarned: 80,
      userId: 1
    }),
    Point.create({
      month: 2,
      year: 2018,
      goal: 120,
      totalEarned: 100,
      userId: 1
    }),
    Point.create({
      month: 1,
      year: 2018,
      goal: 100,
      totalEarned: 110,
      userId: 1
    }),
    Point.create({
      month: 0,
      year: 2018,
      goal: 110,
      totalEarned: 110,
      userId: 1
    }),
    Point.create({
      month: 11,
      year: 2017,
      goal: 100,
      totalEarned: 120,
      userId: 1
    }),
    Point.create({
      month: 5,
      year: 2018,
      goal: 100,
      totalEarned: 60,
      userId: 2
    })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
