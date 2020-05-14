<?php

error_reporting(0);

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$id = trim(filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT));

// $sql = 'SELECT * FROM `users` ORDER BY `id`';
// $query = $pdo->query($sql);
// while ($row = $query->fetch(PDO::FETCH_OBJ)) {
//     $myObj->id = $row->id;
//     $myObj->first_name = $row->first_name;
//     $myObj->last_name = $row->last_name;
//     $myObj->status = $row->status;
//     $myObj->role = $row->role;
//     $myJSON = json_encode($myObj);
// }
// echo $myJSON;

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
}

if ($error != []) {
    echo $error;
    exit();
}

$myObj->id = trim(filter_var($user->id, FILTER_SANITIZE_NUMBER_INT));
$myObj->first_name = trim(filter_var($user->first_name, FILTER_SANITIZE_STRING));
$myObj->last_name = trim(filter_var($user->last_name, FILTER_SANITIZE_STRING));
$myObj->status = trim(filter_var($user->status, FILTER_SANITIZE_NUMBER_INT));
$myObj->role = trim(filter_var($user->role, FILTER_SANITIZE_NUMBER_INT));

$myJSON = json_encode($myObj);

echo $myJSON;