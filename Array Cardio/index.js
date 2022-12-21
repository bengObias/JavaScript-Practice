// array of objects
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

//Practice 1: filter()
const inventorsBorn1500s = inventors.filter(element => element.year >= 1500 && element.year <1600);
console.table(inventorsBorn1500s);

//Practice 2: map()
const firstLastName = inventors.map(element => `${element.last}, ${element.first}`);
console.table(firstLastName);

//Practice 3: sort()
const sortbyBirthYear = inventors.sort((a,b) => (a.year > b.year ? 1 : -1));
console.table(sortbyBirthYear);

//Practice 4: sort()
const sortByYearsLived = inventors.sort((a,b) => ((a.passed - a.year) > (b.passed - b.year) ? -1 : 1));
console.table(sortByYearsLived);
//Practice 5: reduce()
const totalYears = inventors.reduce((total, element)=>{
    return total += (element.passed - element.year);
}, 0);
console.log(totalYears);

// array of strings
const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hillaire','Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Anuerin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake William'];

//Practice 6: sort people array by last name

const sortPeople = people.sort(function(prev, next){
    const [lastPrev,firstPrev] = prev.split(', ');
    const [lastNext,firstNext] = next.split(', ');
    return lastPrev > lastNext ? 1 : -1
});
console.table(sortPeople);

// array of strings
const data = ['car','car','truck','van', 'car','van','car','truck','car','van','car','truck','van','van',];

//Practice 7: sum up instances of each

const sumData = data.reduce((object, element) => {
    if(!object[element]){
        object[element] = 0;
    }
    object[element]++;
    return object;
}, {});

console.log(sumData);


