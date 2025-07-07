function checkAnswer() {
  const correctValue = "Контроль доходов, расходов и целей";
  const options = document.getElementsByName("answer");
  let selected = null;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
    if (opt.checked) selected = opt;
  });

  const result = document.getElementById("quiz-result");
  result.style.display = "block";

  if (!selected) {
    result.textContent = "Пожалуйста, выберите ответ.";
    result.className = "result incorrect";
    return;
  }

  if (selected.value === correctValue) {
    selected.classList.add("correct");
    result.textContent =
      "Отлично! Управление = осознанность: вы знаете, откуда приходят и куда уходят ваши деньги.";
    result.className = "quiz-result correct";
  } else {
    selected.classList.add("incorrect");
    result.textContent =
      "Управление личными финансами — это не бухгалтерия. Это просто: сколько пришло, сколько ушло и зачем.";
    result.className = "result quiz-incorrect";
  }
}

function checkAnswer2() {
  const correctValue = "Записывать только крупные расходы";
  const options = document.getElementsByName("answer2");
  let selected = null;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
    if (opt.checked) selected = opt;
  });

  const result = document.getElementById("quiz-result2");
  result.style.display = "block";

  if (!selected) {
    result.textContent = "Пожалуйста, выберите ответ.";
    result.className = "result incorrect";
    return;
  }

  if (selected.value === correctValue) {
    selected.classList.add("correct");
    result.textContent =
      "Точно! Даже маленькие траты (кофе, подписка) сильно влияют на общую картину.";
    result.className = "quiz-result correct";
  } else {
    selected.classList.add("incorrect");
    result.textContent =
      "Часто люди ведут учёт, игнорируя мелочи — а именно в них прячется половина бюджета.";
    result.className = "result quiz-incorrect";
  }
}

function checkAnswer3() {
  const correctValue = "20%";
  const options = document.getElementsByName("answer3");
  let selected = null;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
    if (opt.checked) selected = opt;
  });

  const result = document.getElementById("quiz-result3");
  result.style.display = "block";

  if (!selected) {
    result.textContent = "Пожалуйста, выберите ответ.";
    result.className = "result incorrect";
    return;
  }

  if (selected.value === correctValue) {
    selected.classList.add("correct");
    result.textContent =
      "Супер! 20% — это инвестиции в себя будущего.";
    result.className = "quiz-result correct";
  } else {
    selected.classList.add("incorrect");
    result.textContent =
      "Формула 50/30/20: 50% — нужды, 30% — желания, 20% — на сбережения. Это базовая модель.";
    result.className = "result quiz-incorrect";
  }
}

function checkAnswer4() {
  const correctValue = "Процентная ставка и итоговая переплата";
  const options = document.getElementsByName("answer4");
  let selected = null;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
    if (opt.checked) selected = opt;
  });

  const result = document.getElementById("quiz-result4");
  result.style.display = "block";

  if (!selected) {
    result.textContent = "Пожалуйста, выберите ответ.";
    result.className = "result incorrect";
    return;
  }

  if (selected.value === correctValue) {
    selected.classList.add("correct");
    result.textContent =
      'Именно так! Важно считать не "платёж в месяц", а общую переплату.';
    result.className = "quiz-result correct";
  } else {
    selected.classList.add("incorrect");
    result.textContent =
      "Банки часто маскируют высокие ставки красивым дизайном и кешбэком. Главное — итоговая сумма.";
    result.className = "result quiz-incorrect";
  }
}

function checkAnswer5() {
  const correctValue = "Начать учитывать доходы и расходы";
  const options = document.getElementsByName("answer5");
  let selected = null;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
    if (opt.checked) selected = opt;
  });

  const result = document.getElementById("quiz-result5");
  result.style.display = "block";

  if (!selected) {
    result.textContent = "Пожалуйста, выберите ответ.";
    result.className = "result incorrect";
    return;
  }

  if (selected.value === correctValue) {
    selected.classList.add("correct");
    result.textContent =
      "Отличный старт! Учёт = основа осознанности.";
    result.className = "quiz-result correct";
  } else {
    selected.classList.add("incorrect");
    result.textContent =
      "Всё начинается с наблюдения. Без учёта — никакие знания не работают на практике.";
    result.className = "result quiz-incorrect";
  }
}
