import { makeAddButton } from "../components/add-button.js";
import { addResetButton } from "../components/resetButton.js";

// create addButton
const parent = document.querySelector(".add-item");
parent.insertAdjacentElement("beforeend", makeAddButton("todo-button"));

// create addResetButton
const resetBtn = document.querySelector(".add-item");
resetBtn.insertAdjacentElement("afterend", addResetButton("reset-btn"));
