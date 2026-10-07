const form = document.getElementById("gradeForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let total = 0;
  for (let i = 1; i <= 5; i++) {
    const marks = parseFloat(document.getElementById("m" + i).value);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      result.className = "fail";
      result.textContent = "Please enter valid marks between 0 and 100 in all fields.";
      return;
    }
    total += marks;
  }

  const percentage = (total / 500) * 100;
  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 40) grade = "D";
  else grade = "F";

  const passed = percentage >= 40;
  result.className = passed ? "pass" : "fail";
  result.innerHTML = `Total: <b>${total} / 500</b><br>
                      Percentage: <b>${percentage.toFixed(2)}%</b><br>
                      Grade: <b>${grade}</b><br>
                      Status: <b>${passed ? "PASS" : "FAIL"}</b>`;
});
