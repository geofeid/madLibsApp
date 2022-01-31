"use strict";

window.onload = () => {

    //How many answers must be answered
  let numberOfQuestions = 28;






 // user-prompts for each mad-lib replacement
let solicitation = `Please enter a`;
let questionArray = [
  `${solicitation} year ("1900", "2021" etc)`,
  `${solicitation} person's full name`,
  `${solicitation} computer-specific model ("commodore 64" etc)`,
  `${solicitation} famous school`,
  `${solicitation} word for people you know (friends, family etc)`,
  `${solicitation} type of bug`,
  `${solicitation} computer-specific part (plural-tense, ie "screens")`,
  `${solicitation} profession (plural-tense, i.e. "painters")`,
  `${solicitation} type of book`,
  `${solicitation} verb (past-tense "attended, performed")`,
  `${solicitation}nother verb (past-tense)`,
  `${solicitation}n adjective (cruel, fantastic)`,
  `${solicitation} pronoun (i, we, you)`,
  `${solicitation} noun (doll, school)`,
  `${solicitation} verb`,
  `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
  `${solicitation} number`,
  `${solicitation} noun (plural-tense)`,
  `${solicitation} famous museum`,
  `${solicitation} city, state (ie Washington, D.C)`,
  `${solicitation}n adjective (cruel, fantastic)`,
  `${solicitation} physics-specific noun (ie "gravity")`,
  `${solicitation} person's full name`,
  `${solicitation} number`,
  `${solicitation} type of document (ie "poem", "essay" etc)`,
  `${solicitation} bad thing (ie an "error")`,
  `${solicitation}n old machine`,
  `${solicitation} tool used for hunting`,
  `${solicitation} verb (infinitive-tense "to eat, to run")`,
];


let userInputs = [];

//Logic

let questionCounter = 0;

for (let i = numberOfQuestions; i >= 0; i--) {
    
    //In which question number the user is
     console.log("What question (of questionArray) is accessed (using questionCounter):");

     userInputs.push(
        prompt(
          questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
        )
      );
      console.log(userInputs);
    questionCounter++; //current question show it must go up

     
     numberOfQuestions--; //questions leftso must go down


}

//The story with the replacements based on user input
let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>
<h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.</h2>
<h2>And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."</h2>`;
console.log(originalStory);

//User finished Inputs
alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );



  //Output 
  console.log(originalStory);
  document.write(originalStory);

}