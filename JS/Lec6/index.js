console.log(3 || "name");
console.log(0 || "value");
console.log(true || 0);
console.log(true || 1);
console.log(undefined || null);


console.log(false || undefined || null || 0 || ''); // ''
console.log(false || undefined || null || 8 || ''); // 8



console.log('************************************');
console.log(8 && 'name'); // name 
console.log(true && 'name'); // name  
console.log(false && 'name'); // false 
console.log(undefined && 'name'); // undefined
console.log(null && undefined); // null

console.log('*************************************');

let age = 12;
let fName = "Hussien";
let data = true;
if (age == 12 && fName == 'Mohamed' && data == true)
    console.log('welcome from AND (&) operator');
if (age == 12 || fName == 'Mohamed' || data == true)
    console.log('welcome from OR (|) operator');
console.log('******************************************');

let price = 0;
console.log(price || 'no price for this item')

// 0 , '' => false
//nullish ??
// null || undefined => false
// 0, '' => true

console.log(price ?? 'no price for this item');


const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
console.log('************************************')
let players1 = game.players[0];
let players2 = game.players[1];
console.log(players1, players2);

let gkTeam1 = game.players[0][0];
let gkTeam2 = game.players[1][0];
console.log(gkTeam1, '\n', gkTeam2);

let allPlayers = game.players;
console.log(allPlayers);

let players1Final = game.players[0] + [' ,Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

let team1 = game.odds.team1, draw = game.odds.x, team2 = game.odds.team2;
console.log(team1, team2, draw);

function printGoals(...scorers) {
    let count = {};
    scorers.forEach(elem => {
        count[elem] = (count[elem] || 0) + 1;
    })
    console.log(count);
}

printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");

let findKey = function (obj, value) {
    let key = null;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (obj[prop] === value)
                key = prop;
        }
    }
    return key;
};
console.log(findKey(game.odds, Math.min(game.odds.team1, game.odds.team2)));



let person = {
    name: "John",
    age: 25,
    city: "New York",
    favSports: ["gym", "football", "shooting"],
    favFood: ["food1", "food2", "food3", "food4"],
    workingHours: {
        sat: {
            start: "08:00",
            end: "17:00"
        },
        sun: {
            start: "09:00",
            end: "16:00"
        },
    },

    functionLogger: (x) => {
        console.log(`my name is ${this.name} and my age is ${this.age} and i am living in ${this.city},
             my favorite sport is ${x} and working on ${this.workingHours}`);
    }
};

console.log(person.workingHours.mon?.start);

const data2 = person.workingHours.mon ? person.workingHours.mon.start : undefined;
console.log(data2);
console.log('************************************')

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const days = ['sat', 'sun', 'Mon', 'Tues', 'Wednes', 'Thrus'];

for (const mon of month) {
    console.log(mon);
}
console.log('***********************')
for (const [i, el] of days.entries()) {
    // console.log(d);
    console.log(`${i + 1} : ${el}`);
    // const work = person.workingHours[d]?.start || 'break';
    // console.log(`${d}:${work}`);
}
console.log("'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'")
const data_1 = Object.keys(person);
console.log(data_1);
const data_2 = Object.values(person);
console.log(data_2);
const data_3 = Object.entries(person);
console.log(data_3);








