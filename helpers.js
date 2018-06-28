export function createYearObj(userDate, allPoints) {
  const userStartYear = userDate.getFullYear()
  const userStartMonth = userDate.getMonth()

  //console.log('userstartmonth', userStartMonth)
  // console.log('user start yer', userStartYear)
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const yearObj = {}
  for (let year = userStartYear; year <= currentYear; year++) {
    let loopStartMonth
    let loopEndMonth
    yearObj[year] = []
    if (year === userStartYear) {
      loopStartMonth = userStartMonth
    } else {
      loopStartMonth = 0
    }
    if (year === currentYear) {
      loopEndMonth = currentMonth
    } else {
      loopEndMonth = 11
    }
    // for (let month = loopStartMonth; month <= loopEndMonth; month++) {
    //   // const monthName = monthNumToName(month)
    //   yearObj[year][month] = {month: true}
    // }
    for (let month = 0; month <= loopEndMonth; month++) {
      // const monthName = monthNumToName(month)
      if (month >= loopStartMonth) {
        yearObj[year][month] = {month: true}
      }
      if (month < loopStartMonth) {
        yearObj[year][month] = {
          month: month,
          year: year,
          goal: 0,
          totalEarned: 0
        }
      }
    }
  }
  // console.log('year obj', yearObj)
  // console.log('all points', allPoints)
  allPoints.forEach(point => {
    // const monthName = monthNumToName(point.month)
    yearObj[point.year][point.month] = point
  })
  console.log(yearObj)
  return yearObj
}

export function monthNumToName(monthNum) {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return months[monthNum]
}
