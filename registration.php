<?php
session_start();
include("db_connect.php");

// Проверка, были ли отправлены данные формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = trim($_POST['login']);
    $password = trim($_POST['password']);

    // Проверка, что все поля заполнены
    if (empty($login) || empty($password)) {
        echo "<script type='text/javascript'>alert('Ошибка: Все поля должны быть заполнены.'); window.history.back();</script>";
        exit();
    }

    // Проверка, что логин является валидным email
    if (!filter_var($login, FILTER_VALIDATE_EMAIL)) {
        echo "<script type='text/javascript'>alert('Ошибка: Поле логин должно содержать валидный email.'); window.history.back();</script>";
        exit();
    }

    // Проверка минимальной длины пароля
    if (strlen($password) < 8) {
        echo "<script type='text/javascript'>alert('Ошибка: Пароль должен содержать минимум 8 символов.'); window.history.back();</script>";
        exit();
    }

    $md5_password = md5($password);

    // Проверка, существует ли уже пользователь с таким логином
    $query = mysqli_query($db, "SELECT * FROM `users` WHERE `login`='{$login}'");
    if (mysqli_num_rows($query) == 0) {
        // Если пользователь не существует, добавляем его в базу данных
        mysqli_query($db, "INSERT INTO `users` (`login`, `password`) VALUES ('{$login}', '{$md5_password}')");
        $_SESSION['user'] = ['nick' => $login];
        header("Location: ../index.html");
        exit();
    } else {
        echo "<script type='text/javascript'>alert('Ошибка: Данный логин занят другим пользователем.'); window.history.back();</script>";
        exit();
    }
} else {
    echo "<script type='text/javascript'>alert('Ошибка: Неверный метод запроса.'); window.history.back();</script>";
    exit();
}
?>