<?php
$servername = "localhost";
$username = "root";
$password = "trysomething";
$db_name = "bhutan";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli($servername, $username, $password,$db_name);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$myArray = array();
if($_GET["date"]){
    $date = $_GET["date"];
    $sql = "SELECT * FROM result where date='$date' order by place ASC";
    $result = $conn->query("$sql");
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    } else {
        echo "0";
    }
}else{
    echo "0";
}

$conn->close();
?>