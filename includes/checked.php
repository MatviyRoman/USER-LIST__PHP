<?php

if (isset($_POST['btn_ok'])) {
    $checkbox_add = $_POST["checkbox"];
    $checkbox_addthis = '';
    for ($i = 0; $i < count($checkbox_add); $i++) {
        $checkbox_addthis .= $checkbox_add[$i] . '##';
    }
    echo 'Нажаты: ' . $checkbox_addthis;}