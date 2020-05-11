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

            $status = 1;
            $results[] = 'Did you chose: ' . $checkbox_addthis;

            $sql = "UPDATE `users` SET `status` = $status WHERE `id` = $checkbox_add[$i]";
            $query = $pdo->prepare($sql);
            $query->execute(['status' => $status]);
            $user = $query->fetch(PDO::FETCH_OBJ);
            $checkbox_addthis .= $checkbox_add[$i] . '##';
        }

    }
}

if ($error != []) {
    foreach ($error as $err) {
        echo $err, PHP_EOL;
    }
    exit();
}

echo 'ACTIVE';