<?php 
require("./db.php");

// 
$sql = "CREATE TABLE result (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code1 VARCHAR(20) NOT NULL,
    code2 VARCHAR(20) NOT NULL,
    code3 VARCHAR(20) NOT NULL,
    code4 VARCHAR(20) NOT NULL,
    code5 VARCHAR(20) NOT NULL,
    place INT(10) NOT NULL,
    date DATE NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table result created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();


?>