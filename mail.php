<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";
$result = mail('leonov-0039@yandex.ru', 'Тема письма', $message);


echo json_encode(array(
	'status' => $result,
	'test' => 'test'
));

?>