function checkAnswer() {
    const correctValue = "Google Таблица, приложение или блокнот";
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
      result.textContent = "Отлично! Главное — удобство и регулярность. Даже простое приложение или блокнот дадут результат.";
      result.className = "quiz-result correct";
    } else {
      selected.classList.add("incorrect");
      result.textContent = "Сложные инструменты вроде трекеров или курсов — это позже.";
      result.className = "result quiz-incorrect";
    }
  }