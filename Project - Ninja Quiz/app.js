const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
//const span = document.querySelector("span");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers, compare to the correct answer arry
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    // scroll to the top
    scrollTo(0, 0);
    // show result on page
    //result.querySelector("span").textContent = `${score}%`;
    //span.textContent = `${score}%`;
    result.classList.remove("d-none");

    // interval and animating score
    let output = 0;
    const counter = setInterval(() => {
      result.querySelector("span").textContent = `${output}%`;
      if (output === score) {
        clearInterval(counter);
      } else {
        output++;
      }
    }, 10);
  });
});

// window object (global object)

window.scrollX = 0;
