function checkAnswer() {
    const correctValue = "Начать учитывать доходы и расходы";
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
      result.textContent = "Отличный старт! Без учета вы не знаете, откуда и куда уходят деньги.";
      result.className = "quiz-result correct";
    } else {
      selected.classList.add("incorrect");
      result.textContent = "Популярные советы «вложиться» работают только после того, как вы поняли, что происходит с вашими деньгами.";
      result.className = "result quiz-incorrect";
    }
  }