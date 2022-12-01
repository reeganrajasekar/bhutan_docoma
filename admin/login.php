<?php
session_start();
if ($_POST["email"]=="bhutan@gmail.com") {
    if ($_POST["password"]=="bhutan") {
        $_SESSION["lock"] = "xiny9387tdpq##*&B98oyo8B@*O&^PB^B$";
        header("Location: /admin/today.php");
        die();
    } else {
        header("Location: /admin/?err=username or password is incorrect!");
        die();
    }
} else {
    header("Location: /admin/?err=username or password is incorrect!");
    die();
}


?>