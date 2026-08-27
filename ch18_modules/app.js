// ========================================
// app.js
// ========================================
// Import code from another JavaScript module.

// ----------------------------------------
// IMPORT
// ----------------------------------------

import { PI, add, multiply } from "./math.js";

// ----------------------------------------
// GET HTML ELEMENTS
// ----------------------------------------

const runButton = document.getElementById("runDemo");

const clearButton = document.getElementById("clearConsole");

const output = document.getElementById("output");

const flowResult = document.getElementById("flowResult");

// ----------------------------------------
// RUN MODULE DEMO
// ----------------------------------------

function runModuleDemo() {
  // Use the imported function
  const addition = add(10, 5);

  // Use another imported function
  const multiplication = multiply(6, 7);

  // Use the imported variable
  output.textContent = `✓ math.js was imported successfully!

PI = ${PI}

add(10, 5) = ${addition}

multiply(6, 7) = ${multiplication}


The functions were exported from math.js
and imported into app.js.`;

  flowResult.textContent = `10 + 5 = ${addition}`;
}

// ----------------------------------------
// RUN BUTTON
// ----------------------------------------

runButton.addEventListener("click", runModuleDemo);

// ----------------------------------------
// CLEAR BUTTON
// ----------------------------------------

clearButton.addEventListener("click", () => {
  output.textContent = "Console cleared. Click Run Demo to start again.";

  flowResult.textContent = "Click Run Demo";
});
