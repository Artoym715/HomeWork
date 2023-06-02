<?php

$file = fopen('chat.txt', 'a+');

if (isset($_GET['massage'])) {
    $massage = strip_tags($_GET['massage']);
    fputs($file, $massage . "\n");
    echo "ok";
    die();
}


$mаssages = [];

while (!feof($file)) {
    $mаssages[] = fgets($file);
}

$mаssages = array_reverse($mаssages);

foreach ($mаssages as $key => $str) {
    echo $str;
    if ($key >= 10) break;
}
