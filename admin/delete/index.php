<?php 

require("../layout/db.php");
$id = $_POST['id'];
echo($id);
$sql = "DELETE FROM result WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    header("Location: /admin/today.php?page=1&msg=Result deleted Successfully !");
    die();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>