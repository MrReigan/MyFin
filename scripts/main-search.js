// Функция debounce для оптимизации поиска
function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Подсветка найденного текста
  function highlightText(element, query) {
    // Удаляем предыдущие подсветки
    const highlights = element.querySelectorAll('.highlight');
    highlights.forEach((highlight) => {
      const textNode = document.createTextNode(highlight.textContent);
      highlight.replaceWith(textNode);
    });
  
    if (!query) return; // Если запрос пустой, выходим
  
    // Ищем текст для подсветки
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
  
    nodes.forEach((node) => {
      const text = node.textContent;
      const regex = new RegExp(`(${query})`, 'gi');
      const matches = text.match(regex);
  
      if (matches) {
        const span = document.createElement('span');
        span.className = 'highlight';
        span.textContent = matches[0];
  
        const range = document.createRange();
        range.setStart(node, text.indexOf(matches[0]));
        range.setEnd(node, text.indexOf(matches[0]) + matches[0].length);
  
        range.deleteContents();
        range.insertNode(span);
      }
    });
  }
  
  // Обработчик поиска
  function handleSearch() {
    const searchQuery = this.value.trim().toLowerCase(); // Получаем запрос и приводим к нижнему регистру
    const items = document.querySelectorAll('.item'); // Получаем все элементы для поиска
    const contentContainer = document.querySelector('.content'); // Контейнер с элементами
  
    if (!contentContainer) {
      console.error('Контейнер .content не найден!');
      return;
    }
  
    let hasResults = false; // Флаг для проверки наличия результатов
  
    // Если запрос пустой, показываем все элементы и удаляем класс .has-results
    if (!searchQuery) {
      items.forEach((item) => {
        item.classList.remove('hidden'); // Показываем все элементы
        highlightText(item, ''); // Убираем подсветку
      });
      contentContainer.classList.remove('has-results'); // Убираем отступ
      return;
    }
  
    // Поиск по элементам
    items.forEach((item) => {
      const text = item.textContent.toLowerCase(); // Текст элемента
      const altText = item.querySelector('img')?.alt.toLowerCase() || ''; // Поиск по alt изображений
  
      if (text.includes(searchQuery) || altText.includes(searchQuery)) {
        item.classList.remove('hidden'); // Показываем элемент, если он соответствует запросу
        highlightText(item, searchQuery); // Подсветка текста
        hasResults = true; // Есть результаты
      } else {
        item.classList.add('hidden'); // Скрываем элемент, если он не соответствует запросу
      }
    });
  }
  
  // Находим поле поиска и добавляем обработчик события
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener(
      'input',
      debounce(handleSearch, 300) // Задержка 300 мс
    );
  } else {
    console.error('Поле поиска не найдено!');
  }
  
  // Отменяем стандартное поведение формы
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  } else {
    console.error('Форма поиска не найдена!');
  }