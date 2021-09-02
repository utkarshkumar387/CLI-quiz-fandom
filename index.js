var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name?");
console.log(`Welcome ${userName}. Let's play HARRY POTTER quiz`);
var userHouse = readlineSync.question(
  "Choose your house?(Gryffindor, Hufflepuff, Ravenclaw, Slytherin)"
);
console.log(`${userName} goes to ${userHouse}`);
console.log("-------------------------------");
console.log("let's start the quiz!!");
console.log("-------------------------------");
function question(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log("Yeahh.... Right answer");
    console.log(`${userName} earns 1 point for ${userHouse}`);
  } else {
    if (score > 0) {
      console.log(`${userName} looses 1 point for ${userHouse} `);
      score = score - 1;
    }
  }
  console.log("----------------------------");
}
var questions = [
  {
    ques: "What is the name of Harry Potter's owl? ",
    ans: "Hedwig",
  },
  {
    ques: "Name Ron Weasley's pet rat? ",
    ans: "Scabbers",
  },
  {
    ques: "What was Hagrid's pet dog called? ",
    ans: "Fang",
  },
  {
    ques: "What was the name of Lord Voldemort's loyal snake? ",
    ans: "Nagini",
  },
  {
    ques: "What spell would you use to light the tip of your wand? ",
    ans: "Lumos",
  },
];

for (var i = 0; i < questions.length; i++) {
  question(questions[i].ques, questions[i].ans);
}

console.log(`Total points earned by ${userName} for ${userHouse} are ${score}`);
