<?php

$file = fopen('chat.txt', 'a+');

if (isset($_GET['message'])) {
    $message = strip_tags($_GET['message']);
    fputs($file, $message . "\n");
    echo "ok";
    die();
}


$messages = [];

while (!feof($file)) {
    $messages[] = fgets($file);
}

$messages = array_reverse($messages);

foreach ($messages as $key => $str) {
    echo $str;
    if ($key >= 10) break;
}