function checkAnswer() {
    const correctValue = "Начать учитывать свои деньги и ставить реальные цели";
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
      result.textContent = "Отличный старт! Без учета и цели все знания остаются теорией. Действие = результат.";
      result.className = "quiz-result correct";
    } else {
      selected.classList.add("incorrect");
      result.textContent = "Образование и контент — это хорошо. Но без практики и понимания своих денег — эффекта не будет.";
      result.className = "result quiz-incorrect";
    }
  }