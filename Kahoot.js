// @name         Kahoot Auto Answer Bot
// @description  A script that automatically answers Kahoot questions correctly.
 
(function() {
  "use strict";
 
  // Get the question element.
  const questionElement = document.querySelector(".kahoot-question");
 
  // Get the answer options.
  const answerOptions = questionElement.querySelectorAll(".kahoot-answer-option");
 
  // Get the correct answer.
  const correctAnswer = answerOptions[questionElement.dataset.correctAnswerIndex];
 
  // Select the correct answer.
  correctAnswer.click();
})();
