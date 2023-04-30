const textEl = document.querySelector("#text");
const charTotalEl = document.querySelector(".total--char");
const charRemainEl = document.querySelector(".remaining--char");

// Set total char to zero and remaining char to maxlength, INITIALLY
charTotalEl.textContent = 0;
charRemainEl.textContent = text.getAttribute("maxlength");

const handleText = function (e) {
  const totalChar = this.value.length;
  const remainChar = this.getAttribute("maxlength") - totalChar;
  console.log(totalChar, remainChar);

  charTotalEl.textContent = totalChar;
  charRemainEl.textContent = remainChar;
};

text.addEventListener("input", handleText);
