<?php
// Turn off error reporting
//error_reporting(0);

$user = 'root';
$pass = '';
$db = 'list';
$host = 'localhost';

$dsn = 'mysql:host=' . $host . ';dbname=' . $db;
$pdo = new PDO($dsn, $user, $pass);