function checkAnswer() {
    const correctValue = "20%";
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
      result.textContent = "Точно! 20% — это накопления, подушка, инвестиции. Даже с небольшой суммы это важный шаг.";
      result.className = "quiz-result correct";
    } else {
      selected.classList.add("incorrect");
      result.textContent = "Формула проста: 50% — нужды, 30% — желания, 20% — сбережения. Отложенное сегодня — уверенность завтра.";
      result.className = "result quiz-incorrect";
    }
  }