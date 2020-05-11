<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$checkbox = trim(filter_var($_POST['checkbox'], FILTER_SANITIZE_STRING));

$error = [];

if ($checkbox == null) {
    $error[] = 'Please select at least one checkbox';
} else if (isset($checkbox)) {
    $checkbox_add = explode("##", $checkbox);
    $checkbox_addthis = '';
    if (is_array($checkbox_add)) {
        $count = count($checkbox_add);
        for ($i = 0; $i < $count; $i++) {

            // $sql = 'DELETE FROM `users` WHERE `first_name`.`id`=:id';
            $sql = "DELETE FROM `users` WHERE `id`= $checkbox_add[$i]";
            $query = $pdo->prepare($sql);
            $query->execute(['id' => $checkbox_add[$i]]);
            $user = $query->fetch(PDO::FETCH_OBJ);
        }
    }
}

if ($error != []) {
    foreach ($error as $err) {
        echo $err, PHP_EOL;
    }
    exit();
}

echo 'DELETES';