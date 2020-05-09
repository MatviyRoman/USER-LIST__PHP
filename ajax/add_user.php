<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$first_name = trim(filter_var($_POST['first_name'], FILTER_SANITIZE_STRING));
$last_name = trim(filter_var($_POST['last_name'], FILTER_SANITIZE_STRING));
$status = trim(filter_var($_POST['status'], FILTER_SANITIZE_NUMBER_INT));
$role = trim(filter_var($_POST['role'], FILTER_SANITIZE_NUMBER_INT));

$sql = 'SELECT `first_name`, `last_name` FROM `users` WHERE `first_name` = :first_name || `last_name` = :last_name';
$query = $pdo->prepare($sql);
$query->execute(['first_name' => $first_name, 'last_name' => $last_name]);

$user = $query->fetch(PDO::FETCH_OBJ);

$error = [];

if ($first_name == null || $last_name == null) {
    $error = 'Please enter first name or last name';
} else if ($user->first_name == $first_name) {
    $error = 'This first name is already registered';
} else if ($user->last_name == $last_name) {
    $error = 'This last name is already registered';
} else if (strlen($first_name) <= 3) {
    $error = 'Please enter first name';
} else if (strlen($last_name) <= 3) {
    $error = 'Please enter last name';
} else if ($role == 0) {
    $error = 'Please enter role';
}

if ($error != []) {
    // foreach ($error as $err) {
    //     echo $err, PHP_EOL;
    // }

    echo $error;
    exit();
}

$sql = 'INSERT INTO users(`first_name`, `last_name`, `status`, `role`) VALUES(?, ?, ?, ?)';
$query = $pdo->prepare($sql);
$query->execute([$first_name, $last_name, $status, $role]);

echo 'OK';