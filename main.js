const scorePoint = document.getElementById("scoreNum");

const btn = document.getElementById("btn");
let i = 1;
let scoreNum = 0;

const submit = () => {
  const activeQuestion = document.getElementsByClassName("active")[0];
  const nextQuestion = document.getElementsByClassName("q")[i];

  // Algorithm to check if the answer is correct and calculate the score
  const radioBtns = Array.from(document.querySelectorAll(".answers input"));
  radioBtns.forEach((element) => {
    if (
      element.checked &&
      element.classList.contains("correct") &&
      element.parentElement.parentElement.parentElement.classList.contains(
        "active"
      )
    ) {
      scoreNum++;
    }
  });

  scorePoint.innerHTML = scoreNum + " out of 7";

  // To check if any of the answers are selected
  radioBtns.forEach((element) => {
    if (element.checked) {
      // for sliding through the questions
      activeQuestion.classList.remove("active");

      if (i <= 6) {
        i++;
      } else if ((i = 7)) {
        btn.textContent = "Try Again!";
        btn.onclick = function () {
          location.reload();
        };
      }

      nextQuestion.classList.add("active");
    }
  });
};

btn.addEventListener("click", submit);
