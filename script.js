
        const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      input = "";
      display.value = "";
    } else if (value === "=") {
      try {
        input = eval(input);  // basic eval for quick result
        display.value = input;
      } catch {
        display.value = "Error";
      }
    } else {
      input += value;
      display.value = input;
    }
  });
});