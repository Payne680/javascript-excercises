// program to determine ages from an array
function ageManiac(years) {
    let currentYear = new Date().getFullYear()
    let youngestAge = years[0]
    let oldestAge = years[0]
    let count = 0
    let sum = 0
    let average = 0
    let count1 = 0
    let count2 = 0
    let count3 = 0
    for (let i = 0; i < years.length; i++) {
        if (youngestAge < years[i]) {
            youngestAge = years[i]
        }
        if (oldestAge > years[i]) {
            oldestAge = years[i]
        }
        if (youngestAge == years[i]) {
            ++count
        }

        ages = currentYear - years[i]
        sum += ages
        average = sum / 2

        if (ages <= 10) {
            count1++
        }
        if (ages <= 20) {
            count2++
        }
        if (ages <= 25) {
            count3++
        }
    }
    console.log(`The  youngest age is : ${currentYear - youngestAge} in the year ${youngestAge}`)
    console.log(`The  oldestage age is : ${currentYear - oldestAge} in the year ${oldestAge}`)
    console.log(`Youngest age occurs : ${count}`)
    console.log(sum)
    console.log(average)
    console.log(`Children : ${count1}`)
    console.log(`Teenager : ${count2}`)
    console.log(`Adult : ${count3}`)
}

ageManiac([2002, 2007, 1992, 1947, 2000, 1992, 1920, 2007, 2005])