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
     correctAnswer: "Michelangelo’s David",
     giphy: "https://www.visionaireworld.com/blog/wp-content/uploads/2016/07/David.gif"
   },{
     question: "2. Which mammal has the most teeth?",
     choices: ["Dolphin","Opossum", "Northern Elephant Seal", "Hippopotamus"],
     correctAnswer: "Dolphin",
     giphy: "https://media.giphy.com/media/12BJgUnSfDTcFa/giphy.gif"
   },{
     question: "3. The idea of periodic table came to Dmitry Mendeleev:",
     choices: ["From his misstress","In his sleep", "During an argument", "After a head trauma"],
     correctAnswer: "In his sleep",
     giphy: "https://media.giphy.com/media/ZOg4aH7msZs52/giphy.gif"
   },{
     question: "4. What was the first country that allowed women to vote?",
     choices: ["France","USA", "New Zealand", "Saudi Arabia"],
     correctAnswer: "New Zealand",
     giphy: "https://thumbs.gfycat.com/AngelicMelodicDegus-max-1mb.gif"
   },{
     question: "5. What is the most recycled material in the US?",
     choices: ["Plastic","Asphalt", "Aluminum", "Steel"],
     correctAnswer: "Asphalt",
     giphy: "https://media1.giphy.com/media/iGU33YlzPxY8o/giphy.gif"
   }, {
     question: "6. How much of your total body weight are bones?",
     choices: ["15%", "6%", "32%", "47%"],
     correctAnswer: "15%",
     giphy: "http://cdn.fishki.net/upload/post/201511/04/1723462/010.gif"
   },{
     question: "7. What was the first car company in the world?",
     choices: ["Peugeot","Fiat", "Mercedes-Benz", "Ford"],
     correctAnswer: "Mercedes-Benz",
     giphy: "https://thumbs.gfycat.com/SneakyImpishGaur-size_restricted.gif"
   }];

   var wins = 0;
   var losses = 0;
   var seconds = 7;
   var intervalId;
   var slides;
   var count = 0;
   var clicked = false

    //the game starts on button click
    $('#start').click(function() {
      displayQuestion(count);
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
        seconds = 7;
        intervalId = setInterval(clock, 1000);
        displayQuestion(count);
      } 
    }

  //displaying question
  function displayQuestion(qId) {
      var seconds = 7;
      $(".timer").show();
      if (qId >= trivia.length) {
        $("#theGame").html("<p>Game Over!!</p>");
        $(".wins").html("<p>Wins:" + wins + "</p>");
        $(".losses").html("<p>Losses:" + losses + "</p>");
        clearInterval(intervalId);
      } else {
        var q = trivia[qId].question;
        var a = trivia[qId].choices;
        $("#theGame").html(("<div class='question'>" + q + "</div>") + ("<ul><li>" + a.join('</li><li>') + "</li></ul>"));
      }
    }


    $(document).on("click", "li", function(e) {
       $(".timer").hide();
       var correctAnswer = trivia[count].correctAnswer;
       var chosenAnswer = $(this).text();
       var g = trivia[count].giphy;
       if (correctAnswer === chosenAnswer) {
         $("#theGame").html("<div class='question'>Great Job! The correct answer is <span class='correct-answer'>" + correctAnswer + "</span></div><iframe src='" + g + "'width='480' height='474' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");
         clearInterval(intervalId);
         wins++;
         seconds = 4;
         intervalId = setInterval(clock, 1000);
       }
        else if (correctAnswer !== chosenAnswer) {
         $("#theGame").html("<div class='question'>No, the correct answer is " + correctAnswer + "</div><iframe src='" + g + "'width='480' height='474' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");
         clearInterval(intervalId);
         losses++;
         seconds = 4;
         intervalId = setInterval(clock, 1000);
      }


  });
    //}
  
});
