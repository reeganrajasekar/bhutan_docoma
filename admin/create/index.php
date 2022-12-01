<?php 

require("../layout/db.php");

$date = $_POST['date'];
$place = $_POST['time'];
$code1 = $_POST['code1'];
$code2 = $_POST['code2'];
$code3 = $_POST['code3'];
$code4 = $_POST['code4'];
$code5 = $_POST['code5'];
$sql = "INSERT INTO result (date , place , code1 , code2 , code3 , code4 , code5)
VALUES ('$date','$place','$code1','$code2','$code3','$code4','$code5')";

if ($conn->query($sql) === TRUE) {
    header("Location: /admin/today.php?page=1&msg=$place p.m Result Published Successfully !");
    die();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>