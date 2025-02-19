
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

for (let i = 0; i < game.scored.length; i++)
    console.log(`Goal number ${i + 1}: ${game.scored[i]}`);

let avg = 0; let sum = 0; let ansQ3 = ""; let counter = 0;
for (let [_, val] of Object.entries(game.odds)) {
    sum += val;
    if (!counter)
        ansQ3 += `Odd of victory ${game.team1}: ${val}\n`
    else if (counter === 1)
        ansQ3 += `Odd of draw: ${val}\n`
    else
        ansQ3 += `Odd of victory ${game.team2}: ${val}\n`
    counter++;

}
console.log(sum / game.score.length);
console.log(ansQ3);
for (let [key, val] of Object.entries(game.odds))
    sum += val;







