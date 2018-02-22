  // the game starts once a user clicks on start button
  // first question shows on the screen while the rest are hidden
  // each question has 4 answers, one is correct
  // if the correct answer is selected then the user gets correct message
  // if the incorrect answer is selected & the time is up then the user gets incorrect message
  // each question has 30 seconds
  // at the end of the game the final score is shown

  $(document).ready(function() {

    var trivia = [{
     question: "1. Which of the following is NOT one of the seven wonders of the world?",
     choices: ["Michelangelo’s David","Taj Mahal", "Great Wall of China", "Lighthouse at Alexandria"],
     correctAnswer: "Michelangelo’s David"
   },{
     question: "2. Which mammal has the most teeth?",
     choices: ["Dolphin","Opossum", "Northern Elephant Seal", "Hippopotamus"],
     correctAnswer: "Dolphin"
   },{
     question: "3. The idea of periodic table came to Dmitry Mendeleev:",
     choices: ["From his misstress","In his sleep", "During an argument", "After a head trauma"],
     correctAnswer: "In his sleep"
   },{
     question: "4. What was the first country that allowed women to vote?",
     choices: ["France","USA", "New Zealand", "Saudi Arabia"],
     correctAnswer: "New Zealand"
   },{
     question: "5. What is the most recycled material in the US?",
     choices: ["Plastic","Asphalt", "Aluminum", "Steel"],
     correctAnswer: "Asphalt"
   }, {
     question: "6. How much of your total body weight are bones?",
     choices: ["15%", "6%", "32%", "47%"],
     correctAnswer: "15%"
   },{
     question: "7. What was the first car company in the world?",
     choices: ["Peugeot","Fiat", "Mercedes-Benz", "Ford"],
     correctAnswer: "Mercedes-Benz"
   }];

   var wins = 0;
   var losses = 0;
   var seconds = 5;
   var intervalId;
   var slides;
   var count = 0;

    //the game starts on button click
    $('#start').click(function() {
      displayQuestion(count);
      answerPick();
      intervalId = setInterval(clock, 1000);
      $(this).hide();
    });

    //setting timeout
    function clock() {
      $(".timer").html("Time Remaining: <br>" + seconds);
      seconds--;

      if (seconds < 0 ) {
        clearInterval(intervalId);
        losses++;
        count++;
        seconds = 5;
        intervalId = setInterval(clock, 1000);
        displayQuestion(count);
      } 
    }

  //displaying question
  function displayQuestion(qId) {
      
      if (qId > trivia.length) {
        $("#theGame").html("<p>Game Over!!</p>");
        $(".wins").html("<p>Wins:" + wins + "</p>");
        $(".losses").html("<p>Losses:" + losses + "</p>");
        clearInterval(intervalId);
      } else {
        var q = trivia[qId].question;
        var a = trivia[qId].choices;
        $("#theGame").html(("<div class='question'>" + q + "</div>") + ("<ul><li>" + a.join('</li><li>') + "</li></ul>"));
        answerPick();
      }
    }


  function answerPick() {   
    $("li").click(function(e) {
       var correctAnswer = trivia[count].correctAnswer;
       var chosenAnswer = $(this).text();
       if (correctAnswer === chosenAnswer) {
         clearInterval(intervalId);
         alert("Great Job!");
         wins++;
         count++;
         seconds = 5;
         intervalId = setInterval(clock, 1000);
         displayQuestion(count);
       }
        else if (correctAnswer !== chosenAnswer) {
         alert("No, the correct answer is " + correctAnswer + "!");
         clearInterval(intervalId);
         losses++;
         count++;
         seconds = 5;
         intervalId = setInterval(clock, 1000);
         displayQuestion(count);
      }

  });}
  
});
