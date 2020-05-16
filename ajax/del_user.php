<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$id = trim(filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT));

$sql = 'SELECT * FROM `users` WHERE `id` = :id';
$query = $pdo->prepare($sql);
$query->execute(['id' => $id]);
$user = $query->fetch(PDO::FETCH_OBJ);

$error = [];

if (empty($id)) {
    $error = 'id empty';
} else if (!$user->id == $id) {
    $error = 'Such a user does not exist or has already been deleted';
}

if ($error != []) {
    echo $error;
    exit();
}

// $sql = 'DELETE FROM `users` WHERE `first_name`.`id`=:id';
$sql = 'DELETE FROM `users` WHERE `id`=:id';
$query = $pdo->prepare($sql);
$query->execute(['id' => $id]);
$user = $query->fetch(PDO::FETCH_OBJ);

echo 'DELETE';