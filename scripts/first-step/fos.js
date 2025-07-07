const TOKEN = "7599594732:AAGVsyJVuvKH7U91lNRyTOeFqbSmM99gM0M";
const CHAT_ID = "-1002542364764";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("firstStep").addEventListener("submit", function (e) {
  e.preventDefault();

  const itog = Array.from(
    this.querySelectorAll('input[name="itog"]:checked')
  ).map((input) => input.value);

  const trabls = Array.from(
    this.querySelectorAll('input[name="trabls"]:checked')
  ).map((input) => input.value);

  const chat = Array.from(
    this.querySelectorAll('input[name="chat"]:checked')
  ).map((input) => input.value);

  const progress = Array.from(
    this.querySelectorAll('input[name="progress"]:checked')
  ).map((input) => input.value);

  if (itog.length === 0) {
    alert("Пожалуйста, выберите хотя бы одну оценку.");
    return;
  }

  if (trabls.length === 0) {
    alert("Пожалуйста, выберите с какими трудностями столкнулись при прохождении курса.");
    return;
  }

  if (chat.length === 0) {
    alert("Пожалуйста, ответьте хотели бы вы видеть на платформе чат с экспертом.");
    return;
  }

  if (progress.length === 0) {
    alert("Пожалуйста, ответьте хотели бы вы видеть прогресс в курсах в виде баллов, достижений или наград.");
    return;
  }

  // Формируем сообщение
  let message = `<b>Ответы пользователя:</b>\n`;
  message += `<b>Оценка:</b> ${itog.join(", ")}\n`;
  message += `<b>Трудности:</b> ${trabls.join(", ")}\n`;
  message += `<b>Чат с экспертом:</b> ${chat.join(", ")}\n`;
  message += `<b>Награды прогресс и т.д.:</b> ${progress.join(", ")}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "HTML",
      text: message,
    })
    .then(() => {
      this.style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    })
    .catch((err) => {
      console.error(err);
      alert("Ошибка отправки");
    });
});
