'use strict'

const db = require('../server/db')
const {
  User,
  State,
  Activity,
  Point,
  Event,
  Sponsor
} = require('../server/db/models')

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
      password: '123',
      createdAt: new Date('2017-12-26 11:07:26.571-04'),
      id: 1,
      pointsSpent: 300
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'theDog',
      email: 'murphy@email.com',
      password: '123',
      id: 2
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
    }),
    State.create({
      name: 'Alabama',
      abbreviation: 'AL',
      imageUrl: 'https://www.freeclipartnow.com/d/21816-7/alabama.jpg'
    }),
    State.create({
      name: 'Alaska',
      abbreviation: 'AK',
      imageUrl: 'https://www.freeclipartnow.com/d/21819-6/alaska.jpg'
    }),
    State.create({
      name: 'Arizona',
      abbreviation: 'AZ',
      imageUrl: 'https://www.freeclipartnow.com/d/21821-6/arizona.jpg'
    }),
    State.create({
      name: 'Arkansas',
      abbreviation: 'AR',
      imageUrl: 'https://www.freeclipartnow.com/d/21823-6/arkansas.jpg'
    }),
    State.create({
      name: 'Colorado',
      abbreviation: 'CO',
      imageUrl: 'https://www.freeclipartnow.com/d/21827-6/colorado.jpg'
    }),
    State.create({
      name: 'Connecticut',
      abbreviation: 'CT',
      imageUrl: 'https://www.freeclipartnow.com/d/21829-6/connecticut.jpg'
    }),
    State.create({
      name: 'Delaware',
      abbreviation: 'DE',
      imageUrl: 'https://www.freeclipartnow.com/d/21831-6/delaware.jpg'
    }),
    State.create({
      name: 'Georgia',
      abbreviation: 'GA',
      imageUrl: 'https://www.freeclipartnow.com/d/21835-6/georgia.jpg'
    }),
    State.create({
      name: 'Hawaii',
      abbreviation: 'HI',
      imageUrl: 'https://www.freeclipartnow.com/d/21837-6/hawaii.jpg'
    }),
    State.create({
      name: 'Idaho',
      abbreviation: 'ID',
      imageUrl: 'https://www.freeclipartnow.com/d/21839-6/idaho.jpg'
    }),
    State.create({
      name: 'Illinois',
      abbreviation: 'IL',
      imageUrl: 'https://www.freeclipartnow.com/d/21841-6/illinois.jpg'
    }),
    State.create({
      name: 'Indiana',
      abbreviation: 'IN',
      imageUrl: 'https://www.freeclipartnow.com/d/21843-6/indiana.jpg'
    }),
    State.create({
      name: 'Iowa',
      abbreviation: 'IA',
      imageUrl: 'https://www.freeclipartnow.com/d/21845-6/iowa.jpg'
    }),
    State.create({
      name: 'Kansas',
      abbreviation: 'KS',
      imageUrl: 'https://www.freeclipartnow.com/d/21847-6/kansas.jpg'
    }),
    State.create({
      name: 'Kentucky',
      abbreviation: 'KY',
      imageUrl: 'https://www.freeclipartnow.com/d/21849-6/kentucky.jpg'
    }),
    State.create({
      name: 'Louisiana',
      abbreviation: 'LA',
      imageUrl: 'https://www.freeclipartnow.com/d/21851-6/louisiana.jpg'
    }),
    State.create({
      name: 'Maine',
      abbreviation: 'ME',
      imageUrl: 'https://www.freeclipartnow.com/d/21853-6/maine.jpg'
    }),
    State.create({
      name: 'Maryland',
      abbreviation: 'MD',
      imageUrl: 'https://www.freeclipartnow.com/d/21855-6/maryland.jpg'
    }),
    State.create({
      name: 'Massachusetts',
      abbreviation: 'MA',
      imageUrl: 'https://www.freeclipartnow.com/d/21857-6/massachusetts.jpg'
    }),
    State.create({
      name: 'Michigan',
      abbreviation: 'MI',
      imageUrl: 'https://www.freeclipartnow.com/d/21859-6/michigan.jpg'
    }),
    State.create({
      name: 'Minnesota',
      abbreviation: 'MN',
      imageUrl: 'https://www.freeclipartnow.com/d/21861-6/minnesota.jpg'
    }),
    State.create({
      name: 'Mississippi',
      abbreviation: 'MS',
      imageUrl: 'https://www.freeclipartnow.com/d/21863-6/mississippi.jpg'
    }),
    State.create({
      name: 'Missouri',
      abbreviation: 'MO',
      imageUrl: 'https://www.freeclipartnow.com/d/21865-6/missouri.jpg'
    }),
    State.create({
      name: 'Montana',
      abbreviation: 'MT',
      imageUrl: 'https://www.freeclipartnow.com/d/21867-6/montana.jpg'
    }),
    State.create({
      name: 'Nebraska',
      abbreviation: 'NE',
      imageUrl: 'https://www.freeclipartnow.com/d/21869-6/nebraska.jpg'
    }),
    State.create({
      name: 'Nevada',
      abbreviation: 'NV',
      imageUrl: 'https://www.freeclipartnow.com/d/21871-6/nevada.jpg'
    }),
    State.create({
      name: 'New Hampshire',
      abbreviation: 'NH',
      imageUrl: 'https://www.freeclipartnow.com/d/21873-6/new-hampshire.jpg'
    }),
    State.create({
      name: 'New Jersey',
      abbreviation: 'NJ',
      imageUrl: 'https://www.freeclipartnow.com/d/21875-6/new-jersey.jpg'
    }),
    State.create({
      name: 'New Mexico',
      abbreviation: 'NM',
      imageUrl: 'https://www.freeclipartnow.com/d/21877-6/new-mexico.jpg'
    }),
    State.create({
      name: 'North Carolina',
      abbreviation: 'NC',
      imageUrl: 'https://www.freeclipartnow.com/d/21881-6/north-carolina.jpg'
    }),
    State.create({
      name: 'North Dakota',
      abbreviation: 'ND',
      imageUrl: 'https://www.freeclipartnow.com/d/21883-6/north-dakota.jpg'
    }),
    State.create({
      name: 'Ohio',
      abbreviation: 'OH',
      imageUrl: 'https://www.freeclipartnow.com/d/21885-6/ohio.jpg'
    }),
    State.create({
      name: 'Oklahoma',
      abbreviation: 'OK',
      imageUrl: 'https://www.freeclipartnow.com/d/21887-6/oklahoma.jpg'
    }),
    State.create({
      name: 'Oregon',
      abbreviation: 'OR',
      imageUrl: 'https://www.freeclipartnow.com/d/21889-6/oregon.jpg'
    }),
    State.create({
      name: 'Pennsylvania',
      abbreviation: 'PA',
      imageUrl: 'https://www.freeclipartnow.com/d/21891-6/pennsylvania.jpg'
    }),
    State.create({
      name: 'Rhode Island',
      abbreviation: 'RI',
      imageUrl: 'https://www.freeclipartnow.com/d/21893-6/rhode-island.jpg'
    }),
    State.create({
      name: 'South Carolina',
      abbreviation: 'SC',
      imageUrl: 'https://www.freeclipartnow.com/d/21895-6/south-carolina.jpg'
    }),
    State.create({
      name: 'Tennessee',
      abbreviation: 'TN',
      imageUrl: 'https://www.freeclipartnow.com/d/21899-6/tennessee.jpg'
    }),
    State.create({
      name: 'Texas',
      abbreviation: 'TX',
      imageUrl: 'https://www.freeclipartnow.com/d/21901-6/texas.jpg'
    }),
    State.create({
      name: 'Utah',
      abbreviation: 'UT',
      imageUrl: 'https://www.freeclipartnow.com/d/21903-6/utah.jpg'
    }),
    State.create({
      name: 'Vermont',
      abbreviation: 'VT',
      imageUrl: 'https://www.freeclipartnow.com/d/21905-6/vermont.jpg'
    }),
    State.create({
      name: 'Virgina',
      abbreviation: 'VA',
      imageUrl: 'https://www.freeclipartnow.com/d/21907-6/virginia.jpg'
    }),
    State.create({
      name: 'Washington',
      abbreviation: 'WA',
      imageUrl: 'https://www.freeclipartnow.com/d/21909-6/washington.jpg'
    }),
    State.create({
      name: 'West Virginia',
      abbreviation: 'WV',
      imageUrl: 'https://www.freeclipartnow.com/d/21911-6/west-virginia.jpg'
    }),
    State.create({
      name: 'Wisconsin',
      abbreviation: 'WI',
      imageUrl: 'https://www.freeclipartnow.com/d/21913-6/wisconsin.jpg'
    }),
    State.create({
      name: 'Wyoming',
      abbreviation: 'WY',
      imageUrl: 'https://www.freeclipartnow.com/d/21915-6/wyoming.jpg'
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

  const sponsors = await Promise.all([
    Sponsor.create({
      name: 'SoulCycle',
      id: 1,
      description:
        "Our mission is to bring Soul to the people. Our one of a kind, rockstar instructors guide riders through an inspirational, meditative fitness experience that’s designed to benefit the body, mind and soul. Set in a dark candlelit room to high-energy music, our riders move in unison as a pack to the beat and follow the signature choreography of our instructors. The experience is tribal. It's primal. It's fun.",
      imageUrl:
        'https://i.pinimg.com/originals/07/4a/23/074a239c652fd4eed672683534dd1260.jpg',
      url: 'https://www.soul-cycle.com/',
      twitterUrl: 'https://twitter.com/soulcycle',
      facebookUrl: 'https://www.facebook.com/SoulCycleInc/',
      instagramUrl: 'https://www.instagram.com/soulcycle/?hl=en'
    }),
    Sponsor.create({
      name: 'Yoga To The People',
      id: 2,
      description:
        'Yoga to the People is a unique yoga studio with the goal of recapturing what we consider to be the essence of yoga… simply put, yoga made available to everyone. In a time where yoga as a business is getting a lot of attention, the fact that it is being priced out of many people’s reach is in direct conflict with what we consider to be the spirit of yoga itself. The question our studio seeks to answer is: Can a yoga studio maintain itself as a business while keeping the focus of its intention on providing yoga as a service first and foremost?',
      imageUrl:
        'https://pbs.twimg.com/profile_images/254771330/Twitter_Logo_400x400.jpg',
      url: 'https://yogatothepeople.com/',
      twitterUrl: 'https://twitter.com/Yogatothepeople',
      facebookUrl: 'https://www.facebook.com/yogatothepeople/',
      instagramUrl: 'https://www.instagram.com/yogatothepeople/?hl=en'
    }),
    Sponsor.create({
      name: 'Fat Cat',
      id: 3,
      description:
        'fat cat is a diverse cultural institution featuring live music, games, art space and innovative educational programming. our musical offerings highlight emerging artists and legends of genres ranging from jazz to latin, classical and world music. we sustain the tradition of late nightly jam sessions which makes New York the jazz capital. these sessions allow young musicians to earn their chops alongside veterans, and provide pages for a living musical language to be (re)written.',
      imageUrl:
        'http://jazzafterhours.net/uploads/event_images/88/fatcat-2__large.png',
      url: 'http://www.fatcatmusic.org/mission.html',
      twitterUrl: 'https://twitter.com/fatcatNYC',
      facebookUrl: 'https://www.facebook.com/fatcatjazz/',
      instagramUrl: 'https://www.instagram.com/fatcatnyc/?hl=en',
      city: 'New York City',
      state: 'NY'
    })
  ])

  const events = await Promise.all([
    Event.create({
      name: 'Spin Class',
      date: new Date('2018-07-26 7:30:00'),
      location: '5 Bryant Park New York, NY 10018',
      description: 'One hour soul cycle class',
      spotsAvailable: 20,
      pointCost: 100,
      sponsorId: 1
    }),
    Event.create({
      name: 'Spin Class',
      date: new Date('2018-07-10 18:30:00'),
      location: '2325 Collins Avenue Miami Beach, FL 33139',
      description: 'One hour soul cycle class',
      spotsAvailable: 20,
      pointCost: 100,
      sponsorId: 1
    }),
    Event.create({
      name: 'Yoga Class',
      date: new Date('2018-07-17 19:30:00'),
      location: '1017 6th Ave. @ 38th Street, 3rd Fl, New York, NY 10018',
      description: 'One hour yoga class',
      spotsAvailable: 15,
      pointCost: 80,
      sponsorId: 2
    }),
    Event.create({
      name: 'Yoga Class',
      date: new Date('2018-08-17 19:30:00'),
      location: '2710 Broadway 3rd Floor, New York, NY 10025',
      description: 'One hour yoga class',
      spotsAvailable: 15,
      pointCost: 80,
      sponsorId: 2
    }),
    Event.create({
      name: 'Free drink',
      location: '75 Christopher St, New York, NY 10014',
      description: 'One free drink',
      pointCost: 30,
      sponsorId: 3
    }),
    Event.create({
      name: 'Free ping pong game',
      location: '75 Christopher St, New York, NY 10014',
      description: '30 minutes of ping pong',
      pointCost: 70,
      sponsorId: 3
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
