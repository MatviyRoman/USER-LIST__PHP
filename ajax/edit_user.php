<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$id = trim(filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT));
$first_name = trim(filter_var($_POST['first_name'], FILTER_SANITIZE_STRING));
$last_name = trim(filter_var($_POST['last_name'], FILTER_SANITIZE_STRING));
$status = trim(filter_var($_POST['status'], FILTER_SANITIZE_STRING));
$role = trim(filter_var($_POST['role'], FILTER_SANITIZE_STRING));

$sql = 'SELECT * FROM `users` WHERE `id` = :id';
$query = $pdo->prepare($sql);
$query->execute(['id' => $id]);
$user = $query->fetch(PDO::FETCH_OBJ);

$error = [];

if (empty($id)) {
    $error = 'id empty';
} else if (!$user->id == $id) {
    $error = 'This id not property for
     this user';
} else if ($first_name == null || $last_name == null) {
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
    echo $error;
    exit();
}

$sql = 'UPDATE `users` SET `first_name` = :first_name, `last_name` = :last_name, `status` = :status, `role` = :role WHERE `id` =:id';
$query = $pdo->prepare($sql);
$query->execute(['id' => $id, 'first_name' => $first_name, 'last_name' => $last_name, 'status' => $status, 'role' => $role]);
$user = $query->fetch(PDO::FETCH_OBJ);

echo 'UPDATE';