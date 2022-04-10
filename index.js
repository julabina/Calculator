const resultContainer = document.querySelector(".result");
const spanResult = document.querySelector(".resultSpan");
const btns = document.querySelectorAll(".btn");

let valueA, valueB, result, typeMath;
let valueC = 0;

if(resultContainer) {
  resultContainer.textContent = "0";
};

const addition = (valA, valB) => {
  return result = valA + valB;
};

const subtraction = (valA, valB) => {
  return result = valA - valB;
};

const multiplication = (valueA, valueB) => {
  return result = valueA * valueB;
};

const divide = (valueA, valueB) => {
  return result = valueA / valueB;
};

btns[0]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 0;
  } else {
    resultContainer.textContent += 0;
  }
});

btns[1]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 1;
  } else {
    resultContainer.textContent += 1;
  }
});

btns[2]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 2;
  } else {
    resultContainer.textContent += 2;
  }
});

btns[3]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 3;
  } else {
    resultContainer.textContent += 3;
  }
});

btns[4]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 4;
  } else {
    resultContainer.textContent += 4;
  }
});

btns[5]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 5;
  } else {
    resultContainer.textContent += 5;
  }
});

btns[6]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 6;
  } else {
    resultContainer.textContent += 6;
  }
});

btns[7]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 7;
  } else {
    resultContainer.textContent += 7;
  }
});

btns[8]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 8;
  } else {
    resultContainer.textContent += 8;
  }
});

btns[9]?.addEventListener("click", () => {
  if (resultContainer.textContent === 0) {
    resultContainer.textContent = "";
    resultContainer.textContent += 9;
  } else {
    resultContainer.textContent += 9;
  }
});

btns[10]?.addEventListener("click", () => {
  if (typeMath === 1) {
    val = valueA;
    valueA = val + parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "-";
    resultContainer.textContent = "";
    typeMath = 2;
  } else if (typeMath === 3) {
    val = valueA;
    valueA = val / parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "-";
    resultContainer.textContent = "";
    typeMath = 2;
  } else if (typeMath === 4) {
    val = valueA;
    valueA = val * parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "-";
    resultContainer.textContent = "";
    typeMath = 2;
  } else {
    if (valueC > 0) {
      valueA = valueC;
      valueC = 0;
      spanResult.textContent = valueA + "-";
      resultContainer.textContent = "";
      typeMath = 2;
    } else if (resultContainer.textContent === "") {
      valueA = 0;
      spanResult.textContent = valueA + "-";
      typeMath = 2;
    } else if (valueA > 0) {
      valC = valueA;
      valueA = valC - parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "-";
      resultContainer.textContent = "";
      typeMath = 2;
    } else {
      valueA = parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "-";
      resultContainer.textContent = "";
      typeMath = 2;
    }
  }
});

btns[11]?.addEventListener("click", () => {
  if (typeMath === 2) {
    val = valueA;
    valueA = val - parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "+";
    resultContainer.textContent = "";
    typeMath = 1;
  } else if (typeMath === 3) {
    val = valueA;
    valueA = val / parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "+";
    resultContainer.textContent = "";
    typeMath = 1;
  } else if (typeMath === 4) {
    val = valueA;
    valueA = val * parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "+";
    resultContainer.textContent = "";
    typeMath = 1;
  } else {
    if (valueC > 0) {
      console.log(valueC);
      valueA = valueC;
      valueC = 0;
      spanResult.textContent = valueA + "+";
      resultContainer.textContent = "";
      typeMath = 1;
    } else if (resultContainer.textContent === "") {
      valueA = 0;
      spanResult.textContent = valueA + "+";
      typeMath = 1;
    } else if (valueA > 0) {
      valC = valueA;
      valueA = valC + parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "+";
      resultContainer.textContent = "";
      typeMath = 1;
    } else {
      valueA = parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "+";
      resultContainer.textContent = "";
      typeMath = 1;
    }
  }
});

btns[12]?.addEventListener("click", () => {
  if (typeMath === 1) {
    val = valueA;
    valueA = val + parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "/";
    resultContainer.textContent = "";
    typeMath = 3;
  } else if (typeMath === 2) {
    val = valueA;
    valueA = val - parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "/";
    resultContainer.textContent = "";
    typeMath = 3;
  } else if (typeMath === 4) {
    val = valueA;
    valueA = val * parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "/";
    resultContainer.textContent = "";
    typeMath = 3;
  } else {
    if (valueC > 0) {
      valueA = valueC;
      valueC = 0;
      spanResult.textContent = valueA + "/";
      resultContainer.textContent = "";
      typeMath = 3;
    } else if (resultContainer.textContent === "") {
      valueA = 0;
      spanResult.textContent = valueA + "/";
      typeMath = 3;
    } else if (valueA > 0) {
      valC = valueA;
      valueA = valC / parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "/";
      resultContainer.textContent = "";
      typeMath = 3;
    } else {
      valueA = parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "/";
      resultContainer.textContent = "";
      typeMath = 3;
    }
  }
});

btns[13]?.addEventListener("click", () => {
  if (typeMath === 2) {
    val = valueA;
    valueA = val - parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "x";
    resultContainer.textContent = "";
    typeMath = 4;
  } else if (typeMath === 3) {
    val = valueA;
    valueA = val / parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "x";
    resultContainer.textContent = "";
    typeMath = 4;
  } else if (typeMath === 1) {
    val = valueA;
    valueA = val + parseFloat(resultContainer.textContent);
    spanResult.textContent = valueA + "x";
    resultContainer.textContent = "";
    typeMath = 4;
  } else {
    if (valueC > 0) {
      valueA = valueC;
      valueC = 0;
      spanResult.textContent = valueA + "x";
      resultContainer.textContent = "";
      typeMath = 4;
    } else if (resultContainer.textContent === "") {
      valueA = 0;
      spanResult.textContent = valueA + "x";
      typeMath = 4;
    } else if (valueA > 0) {
      valC = valueA;
      valueA = valC * parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "x";
      resultContainer.textContent = "";
      typeMath = 4;
    } else {
      valueA = parseFloat(resultContainer.textContent);
      spanResult.textContent = valueA + "x";
      resultContainer.textContent = "";
      typeMath = 4;
    }
  }
});

btns[14]?.addEventListener("click", () => {
  if (valueA === undefined) {
    result = parseFloat(resultContainer.textContent);
  } else {
    valueB = parseFloat(resultContainer.textContent);
    if (typeMath === 1) {
      addition(valueA, valueB);
    } else if (typeMath === 2) {
      subtraction(valueA, valueB);
    } else if (typeMath === 3) {
      divide(valueA, valueB);
    } else if (typeMath === 4) {
      multiplication(valueA, valueB);
    }
    valueA = undefined;
    valueB = undefined;
    spanResult.textContent = "";
    resultContainer.textContent = Math.round(result * 100) / 100;

    valueC = parseFloat(resultContainer.textContent);
    typeMath = 0;
  }
});

btns[15]?.addEventListener("click", () => {
  resultContainer.textContent = 0;
  spanResult.textContent = "";
  valueA = undefined;
  valueB = undefined;
  valueC = undefined;
  typeMath = null;
  result = undefined;
});

btns[16]?.addEventListener("click", () => {
  if (resultContainer.textContent === "") {
    resultContainer.textContent = 0;
  } else if (resultContainer.textContent.length === 1) {
    resultContainer.textContent = 0;
  } else {
    let str = resultContainer.textContent.slice(0, -1);
    resultContainer.textContent = str;
  }
});

btns[17]?.addEventListener("click", () => {
  resultContainer.textContent += ".";
});

export default {
  addition,
  subtraction,
  divide,
  multiplication
};