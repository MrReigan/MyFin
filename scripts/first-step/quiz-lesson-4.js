function checkAnswer() {
    const correctValue = "Процентная ставка и общая переплата";
    const options = document.getElementsByName("answer");
    let selected = null;

    options.forEach(opt => {
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
      result.textContent = "Отлично! Внешнее — не главное. Всегда считай, сколько в итоге заплатишь банку.";
      result.className = "quiz-result correct";
    } else {
      selected.classList.add("incorrect");
      result.textContent = "Не ведись на красивую карту и «удобный платеж». Главное — общая переплата и реальные условия.";
      result.className = "result quiz-incorrect";
    }
  }