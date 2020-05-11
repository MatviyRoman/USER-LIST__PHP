<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';

$all = trim(filter_var($_POST['all'], FILTER_SANITIZE_NUMBER_INT));

$error = [];
$results = [];

if (isset($_POST['checkbox'])) {

    $checkbox_add = $_POST["checkbox"];
    $checkbox_addthis = '';
    if (is_array($checkbox_add)) {
        $count = 0;
        $count = count($checkbox_add);
        $checkbox_add = $_POST["checkbox"];
        $checkbox_addthis = '';
        $count = count($checkbox_add);
        for ($i = 0; $i < $count; $i++) {

            $status = 0;

            $sql = "UPDATE `users` SET `status` = $status WHERE `id` = $checkbox_add[$i]";
            $query = $pdo->prepare($sql);
            $query->execute(['status' => $status]);
            $user = $query->fetch(PDO::FETCH_OBJ);
            $checkbox_addthis .= $checkbox_add[$i] . '##';
        }
    } else {
        $error[] = 'Please select at least one checkbox';
    }
}

if ($error != []) {
    foreach ($error as $err) {
        echo $err, PHP_EOL;
    }
    exit();
}

echo 'NOTACTIVE';