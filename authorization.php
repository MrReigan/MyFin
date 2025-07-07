<?php
session_start();
include("db_connect.php");

// Проверка, были ли отправлены данные формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $login = trim($_POST['login']);
    $password = trim($_POST['password']);

    // Проверка, что все поля заполнены
    if (empty($login) || empty($password)) {
        echo "<script type='text/javascript'>alert('Ошибка: Все поля должны быть заполнены.'); window.history.back();</script>";
        exit();
    }

    // Хеширование пароля (используется md5, но рекомендуется использовать password_hash)
    $md5_password = md5($password);

    // Проверка наличия пользователя в базе данных
    $query = mysqli_query($db, "SELECT * FROM `users` WHERE `login`='{$login}' AND `password`='{$md5_password}'");
    if (mysqli_num_rows($query) == 1) {
        // Успешный вход
        $_SESSION['user'] = ['nick' => $login];
        header("Location: /main.html");
        exit();
    } else {
        // Ошибка входа
        echo "<script type='text/javascript'>alert('Ошибка: Данный логин или пароль неправильны.'); window.history.back();</script>";
        exit();
    }
} else {
    echo "<script type='text/javascript'>alert('Ошибка: Неверный метод запроса.'); window.history.back();</script>";
    exit();
}
?>