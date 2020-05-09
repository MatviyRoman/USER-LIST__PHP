<?php

$all = trim(filter_var($_POST['all'], FILTER_SANITIZE_NUMBER_INT));

$error = [];
$results = [];

if (isset($_POST['btn_ok'])) {
    if (!$all) {
        $error[] = 'Please select action';
    } else {
        $checkbox_add = $_POST["checkbox"];
        $checkbox_addthis = '';
        if (is_array($checkbox_add)) {
            $count = 0;
            $count = count($checkbox_add);
            $checkbox_add = $_POST["checkbox"];
            $checkbox_addthis = '';
            $count = count($checkbox_add);
            for ($i = 0; $i < $count; $i++) {

                if ($all == 1) {
                    $status = 1;
                    $results[] = 'Did you chose: ' . $checkbox_addthis;
                } else if ($all == 2) {
                    $status = 0;
                } else if ($all == 3) {
                    // $sql = 'DELETE FROM `users` WHERE `first_name`.`id`=:id';
                    $sql = "DELETE FROM `users` WHERE `id`= $checkbox_add[$i]";
                    $query = $pdo->prepare($sql);
                    $query->execute(['id' => $checkbox_add[$i]]);
                    $user = $query->fetch(PDO::FETCH_OBJ);
                }

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
}

// if ($error != []) {
//     foreach ($error as $err) {
//         echo $err, PHP_EOL;
//     }
//     // exit();
// } else {
//     foreach ($results as $result) {
//         echo $result, PHP_EOL;
//     }
// }