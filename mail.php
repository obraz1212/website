<?php

$recepient = "shift.of.razum@gmail.com";
$sitename = "Покупка сайта";

$ret = $html->find('span.name');

$title = trim($_POST[$rest]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone\n Продукт: $title";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");