<?php
$db = mysqli_connect("localhost", "cu86173_bd", "Rango1234-", "cu86173_bd");

if ($db == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}