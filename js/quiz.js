// VB.NET Quiz Questions
const questions = {
  easy: [
    {
      title: "Basic Printing",
      question: "What is the correct syntax to print 'Hello, JCreator!' in Java?",
      code: `public class Main {
  public static void main(String[] args) {
      _____.___._____("Hello, JCreator!");
  }
}`,
      answer: "System.out.println",
      hint: "Java uses `System.out` for console output. Think about how to print a line.",
      category: "output",
      explanation: "System.out.println() is the standard way to print a line in Java."
    },
    {
      title: "Variable Initialization",
      question: "What is the correct keyword to declare a variable in Java?",
      code: `___ number = 10;
System.out.println(number);`,
      answer: "int",
      hint: "This is a primitive data type used for whole numbers.",
      category: "variables",
      explanation: "The 'int' keyword is used to declare integer variables in Java."
    },
    {
      title: "Conditional Statement",
      question: "What keyword should be used to execute code based on a condition in Java?",
      code: `int x = 7;
__ (x > 5) {
    System.out.println("x is greater than 5");
}`,
      answer: "if",
      hint: "This keyword checks if a condition is true or false.",
      category: "control flow",
      explanation: "The 'if' statement is used for conditional execution in Java."
    },
    {
      title: "For Loop",
      question: "Which keyword is used to create a loop that iterates a fixed number of times in Java?",
      code: `___ (int i = 0; i < 3; i++) {
    System.out.println(i);
}`,
      answer: "for",
      hint: "This keyword is used to create a loop that runs a specific number of times.",
      category: "loops",
      explanation: "The 'for' loop is used for iteration when you know the number of iterations in advance."
    },
    {
      title: "Comparison Operator",
      question: "Which operator is used to determine if one number is greater than another in Java?",
      code: `if (5 ____ 3) {
    System.out.println("5 is greater than 3");
}`,
      answer: ">",
      hint: "This operator checks if one value is greater than another.",
      category: "operators",
      explanation: "The '>' operator is used to compare if one number is greater than another."
    },
    {
      title: "Class Declaration",
      question: "How do you declare a public class in Java?",
      code: `_____ Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
      answer: "public class",
      hint: "This is how you declare a public class in Java.",
      category: "classes",
      explanation: "The 'public class' declaration makes the class accessible from other classes."
    }
  ],
  medium: [
    {
      title: "Array Access",
      question: "What is the correct syntax to declare an array of integers in Java?",
      code: `_____ arr = {1, 2, 3, 4};
System.out.println(arr[0]);`,
      answer: "int[]",
      hint: "This is how you declare an array of integers in Java.",
      category: "arrays",
      explanation: "The 'int[]' syntax declares an array that can hold multiple integer values."
    },
    {
      title: "Method Declaration",
      question: "What keyword is used in Java to indicate that a method does not return a value?",
      code: `public static ____ main() {
    System.out.println("Method called");
}`,
      answer: "void",
      hint: "This keyword is used when a method does not return any value.",
      category: "methods",
      explanation: "The 'void' keyword indicates that a method doesn't return any value."
    },
    {
      title: "Import Statement",
      question: "Which class from java.util is used for reading user input in Java?",
      code: `import java.util._____;`,
      answer: "Scanner",
      hint: "This class is used to take user input in Java.",
      category: "input",
      explanation: "The Scanner class is commonly used to read input from various sources."
    },
    {
      title: "String Concatenation",
      question: "What variable is used in the string concatenation operation shown?",
      code: `String s = "Hello" + _ + "World";
System.out.println(s);`,
      answer: "s",
      hint: "This is the variable being concatenated with the strings.",
      category: "strings",
      explanation: "The variable 's' is being concatenated with the string literals."
    },
    {
      title: "Return Statement",
      question: "What keyword is used in Java to send a value back from a method?",
      code: `public static int sum(int a, int b) {
    ____ a + b;
}`,
      answer: "return",
      hint: "This keyword sends a value back from a method.",
      category: "methods",
      explanation: "The 'return' statement is used to send a value back from a method."
    },
    {
      title: "While Loop",
      question: "Which loop keyword is used to execute a block of code repeatedly while a condition remains true in Java?",
      code: `int count = 0;
_____ (count < 5) {
    System.out.println(count);
    count++;
}`,
      answer: "while",
      hint: "This keyword creates a loop that continues as long as a condition is true.",
      category: "loops",
      explanation: "The 'while' loop is used when you want to repeat code based on a condition."
    }
  ],
  hard: [
    {
      title: "Exception Handling",
      question: "Which keyword is used to handle exceptions that occur in a try block in Java?",
      code: `try {
    // code that might throw an exception
} _____ (Exception e) {
    System.out.println("Error: " + e.getMessage());
}`,
      answer: "catch",
      hint: "This keyword is used to handle exceptions in a try-catch block.",
      category: "exceptions",
      explanation: "The 'catch' block handles exceptions that occur in the try block."
    }
  ]
};


let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let questionsAnswered = 0;
let totalQuestions = 0;
let username = '';
let currentTries = 0;
let maxTries = 3;
let streak = 0;
let hintsUsed = 0;
let startTime = null;
let questionStartTime = null;
let soundEnabled = true;

// Sound effects
const sounds = {
  correct: new Audio('sounds/correct.mp3'),
  incorrect: new Audio('sounds/incorrect.mp3'),
  timer: new Audio('sounds/timer.mp3')
};

// Initialize sound settings from localStorage
soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

// Function to toggle sound
function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('soundEnabled', soundEnabled);
  const soundIcon = document.getElementById('soundIcon');
  if (soundIcon) {
      soundIcon.className = soundEnabled ? 'ri-volume-up-line' : 'ri-volume-mute-line';
  }
}

// Play sound function
function playSound(soundName) {
  if (soundEnabled && sounds[soundName]) {
      sounds[soundName].currentTime = 0;
      sounds[soundName].play().catch(() => {});
  }
}

// Function to select difficulty and start quiz
function selectDifficulty(difficulty) {
  // Get username from localStorage
  username = localStorage.getItem('userName');
  if (!username) {
      alert('Please log in first to start the quiz!');
      window.location.href = 'index.html';
      return;
  }

  // Set quiz parameters based on difficulty
  const difficultySettings = {
      easy: { time: 120, tries: 3, hints: 2 },
      medium: { time: 60, tries: 2, hints: 1 },
      hard: { time: 45, tries: 1, hints: 0 }
  };

  const settings = difficultySettings[difficulty];
  timeLeft = settings.time;
  maxTries = settings.tries;
  currentDifficulty = difficulty;
  
  // Reset quiz state
  currentTries = 0;
  currentQuestionIndex = 0;
  score = 0;
  questionsAnswered = 0;
  streak = 0;
  hintsUsed = 0;
  startTime = Date.now();
  totalQuestions = questions[difficulty].length;

  // Update hint button
  const hintButton = document.getElementById('hintButton');
  hintButton.textContent = `Hint (${settings.hints} left)`;
  hintButton.style.display = settings.hints > 0 ? 'inline-block' : 'none';
  hintButton.disabled = false;
  hintButton.style.opacity = '1';
  hintButton.style.cursor = 'pointer';

  // Hide difficulty selection container
  const difficultyContainer = document.getElementById('difficultyContainer');
  difficultyContainer.style.display = 'none';

  // Hide result section if visible
  const resultSection = document.getElementById('resultSection');
  resultSection.classList.add('hidden');

  // Show quiz section
  const quizSection = document.getElementById('quizSection');
  quizSection.classList.remove('hidden');
  quizSection.style.display = 'block';

  // Show difficulty indicator
  const difficultyIndicator = document.createElement('div');
  difficultyIndicator.className = 'difficulty-indicator';
  difficultyIndicator.innerHTML = `
      <span class="difficulty-label">Player:</span>
      <span class="difficulty-value">${username}</span>
      <span class="difficulty-label">Difficulty:</span>
      <span class="difficulty-value">${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
      <button onclick="changeDifficulty()" class="change-difficulty-btn">Change Difficulty</button>
  `;
  quizSection.insertBefore(difficultyIndicator, quizSection.firstChild);

  // Start timer and show first question
  startTimer();
  showQuestion();
}

// Function to change difficulty
function changeDifficulty() {
  if (!confirm('Are you sure you want to change difficulty? Your current progress will be lost.')) {
      return;
  }

  clearInterval(timerInterval);
  
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  questionsAnswered = 0;
  currentDifficulty = '';
  streak = 0;
  hintsUsed = 0;
  
  // Hide quiz section and result section
  const quizSection = document.getElementById('quizSection');
  quizSection.classList.add('hidden');
  quizSection.style.display = 'none';
  
  const resultSection = document.getElementById('resultSection');
  resultSection.classList.add('hidden');
  
  // Show difficulty container
  const difficultyContainer = document.getElementById('difficultyContainer');
  difficultyContainer.style.display = 'block';
  
  // Remove difficulty indicator
  const difficultyIndicator = document.querySelector('.difficulty-indicator');
  if (difficultyIndicator) {
      difficultyIndicator.remove();
  }
  
  // Reset input and feedback
  const answerInput = document.getElementById('answerInput');
  const feedback = document.getElementById('feedback');
  if (answerInput) answerInput.value = '';
  if (feedback) {
      feedback.textContent = '';
      feedback.className = '';
  }
}

// Function to show current question
function showQuestion() {
  if (!currentDifficulty || !questions[currentDifficulty]) {
      console.error('Invalid difficulty or questions not loaded');
      return;
  }

  const question = questions[currentDifficulty][currentQuestionIndex];
  const questionText = document.getElementById('questionText');
  const progressBar = document.getElementById('progressBar');
  
  // Update progress bar
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;

  // Display question and code
  questionText.innerHTML = `
      <div class="question-header">
          <span class="question-number">Question ${currentQuestionIndex + 1}/${totalQuestions}</span>
          <span class="question-category">${question.category}</span>
      </div>
      <strong>${question.title}</strong>
      <p>${question.question}</p>
      <pre><code class="language-vbnet line-numbers">${question.code}</code></pre>
  `;

  // Highlight code using Prism.js
  Prism.highlightAll();

  // Reset input and feedback
  const feedback = document.getElementById('feedback');
  const answerInput = document.getElementById('answerInput');
  const submitButton = document.getElementById('submitButton');
  
  if (feedback) {
      feedback.textContent = '';
      feedback.className = '';
  }
  if (answerInput) {
      answerInput.value = '';
      answerInput.focus();
  }
  if (submitButton) {
      submitButton.disabled = false;
  }

  // Set question start time
  questionStartTime = Date.now();
}

// Function to calculate time bonus
function calculateTimeBonus() {
  const timeSpent = (Date.now() - questionStartTime) / 1000;
  const baseTime = 30;
  return Math.max(0, Math.floor((baseTime - timeSpent) * 0.5));
}

// Function to check answer
function checkAnswer() {
  if (timeLeft <= 0) return;
  
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  
  const answer = document.getElementById('answerInput').value.trim();
  const correctAnswer = questions[currentDifficulty][currentQuestionIndex].answer;
  const feedback = document.getElementById('feedback');
  
  feedback.classList.remove('correct', 'incorrect', 'hint');
  
  const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();
  const timeBonus = calculateTimeBonus();
  
  if (isCorrect) {
      playSound('correct');
      score += 10 + timeBonus;
      streak++;
      
      let feedbackText = `Correct! +${timeBonus} time bonus!`;
      if (streak >= 3) {
          const streakBonus = Math.min(5, streak - 2);
          score += streakBonus;
          feedbackText += `\nStreak bonus: +${streakBonus}!`;
      }
      
      feedback.textContent = feedbackText;
      feedback.classList.add('correct');
      
      setTimeout(() => {
          if (currentQuestionIndex < totalQuestions - 1) {
              currentQuestionIndex++;
              currentTries = 0;
              showQuestion();
              submitButton.disabled = false;
          } else {
              endQuiz();
          }
      }, 1500);
  } else {
      playSound('incorrect');
      feedback.textContent = `Incorrect. You have ${maxTries - currentTries - 1} tries left.`;
      feedback.classList.add('incorrect');
      streak = 0;
      currentTries++;
      
      if (currentTries >= maxTries) {
          feedback.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
          setTimeout(() => {
              if (currentQuestionIndex < totalQuestions - 1) {
                  currentQuestionIndex++;
                  currentTries = 0;
                  showQuestion();
                  submitButton.disabled = false;
              } else {
                  endQuiz();
              }
          }, 1500);
      } else {
          submitButton.disabled = false;
      }
  }

  questionsAnswered++;
}

// Function to show hint
function showHint() {
  const difficultyValue = document.querySelector('.difficulty-value:nth-child(4)')?.textContent.toLowerCase();
  const maxHints = {
      easy: 2,
      medium: 1,
      hard: 0
  }[difficultyValue] || 0;

  if (hintsUsed >= maxHints) {
      playSound('incorrect');
      const feedback = document.getElementById('feedback');
      feedback.textContent = "No more hints available!";
      feedback.className = 'feedback-incorrect';
      return;
  }

  const question = questions[currentDifficulty][currentQuestionIndex];
  const feedback = document.getElementById('feedback');
  
  feedback.innerHTML = `<div class="feedback-hint">Hint: ${question.hint}</div>`;
  
  hintsUsed++;
  
  const hintButton = document.getElementById('hintButton');
  hintButton.textContent = `Hint (${maxHints - hintsUsed} left)`;
  if (hintsUsed >= maxHints) {
      hintButton.disabled = true;
      hintButton.style.opacity = '0.5';
      hintButton.style.cursor = 'not-allowed';
  }
}

// Function to start timer
function startTimer() {
  const timeLeftDisplay = document.getElementById('timeLeft');
  const globalTimer = document.getElementById('globalTimer');
  timeLeftDisplay.textContent = timeLeft;

  timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;

      if (timeLeft <= 10) {
          globalTimer.classList.add('low-time');
          if (timeLeft > 0) {
              playSound('timer');
          }
      } else {
          globalTimer.classList.remove('low-time');
      }

      if (timeLeft <= 0) {
          endQuiz();
      }
  }, 1000);
}

// Function to end quiz
function endQuiz() {
  clearInterval(timerInterval);
  
  const timeBonus = Math.floor(timeLeft / 5);
  const finalScore = score + timeBonus;
  const timeSpent = (Date.now() - startTime) / 1000;
  const accuracy = (score / (questions[currentDifficulty].length * 10)) * 100;
  const speed = questions[currentDifficulty].length / (timeSpent / 60);

  const quizSection = document.getElementById('quizSection');
  quizSection.classList.add('hidden');
  quizSection.style.display = 'none';

  const resultSection = document.getElementById('resultSection');
  resultSection.classList.remove('hidden');
  resultSection.style.display = 'block';
  resultSection.innerHTML = `
      <h2>Quiz Results</h2>
      <div class="result-stats">
          <div class="stat-item">
              <span class="stat-label">Score</span>
              <span class="stat-value">${score} points</span>
          </div>
          <div class="stat-item">
              <span class="stat-label">Time Bonus</span>
              <span class="stat-value">+${timeBonus} points</span>
          </div>
          <div class="stat-item">
              <span class="stat-label">Accuracy</span>
              <span class="stat-value">${accuracy.toFixed(1)}%</span>
          </div>
          <div class="stat-item">
              <span class="stat-label">Speed</span>
              <span class="stat-value">${speed.toFixed(1)} q/min</span>
          </div>
      </div>
      <p id="finalScoreDisplay" class="final-score">Final Score: ${finalScore} points</p>
      <div class="result-actions">
          <button onclick="location.reload()" class="btn">Play Again</button>
          <button onclick="shareResults()" class="btn">Share Results</button>
          <a href="java.html" class="btn">Back</a>
      </div>
  `;
}

// Function to share results
function shareResults() {
  const shareText = `I scored ${score} points in the CodeBee VB.NET Quiz! Can you beat my score?`;
  if (navigator.share) {
      navigator.share({
          title: 'CodeBee Quiz Results',
          text: shareText,
          url: window.location.href
      }).catch(console.error);
  } else {
      navigator.clipboard.writeText(shareText)
          .then(() => alert('Results copied to clipboard!'))
          .catch(console.error);
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add loading animation to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.transform = 'translateY(-2px)';
      });
      button.addEventListener('mouseout', () => {
          button.style.transform = 'translateY(0)';
      });
  });

  // Add event listeners for quiz controls
  const submitButton = document.getElementById('submitButton');
  const hintButton = document.getElementById('hintButton');
  const answerInput = document.getElementById('answerInput');

  if (submitButton) {
      submitButton.addEventListener('click', checkAnswer);
  }

  if (hintButton) {
      hintButton.addEventListener('click', showHint);
  }

  if (answerInput) {
      answerInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              checkAnswer();
          }
      });
  }
});

// Make functions available globally
window.selectDifficulty = selectDifficulty;
window.changeDifficulty = changeDifficulty;
window.showHint = showHint;
window.shareResults = shareResults;
