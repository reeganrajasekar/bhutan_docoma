<?php
session_start();
if($_SESSION["lock"]!="xiny9387tdpq##*&B98oyo8B@*O&^PB^B$"){
  header("Location: /admin");
  die();
}
$servername = "localhost";
$username = "root";
$password = "trysomething";
$db_name = "bhutan";

$conn = new mysqli($servername, $username, $password,$db_name);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>