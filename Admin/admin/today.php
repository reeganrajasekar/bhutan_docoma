<?php require("./layout/Header.php") ?>
<?php require("./layout/db.php") ?>

<div id="loader" style="position:fixed;width:100%;height:100%;background-color:#4AB80A99;z-index: 10000;top:0px;display: none;">
      <div class="spinner-border" style="color:#fff;position:fixed;top:48%;left:49%;" role="status">
        <span class="sr-only"></span>
      </div>
</div>
<div class="container mt-3">
    <div style="display:flex;flex-direction:row;justify-content:space-between">
        <h2 style="color:#4AB80A;font-weight:600">Results</h2>
        <button type="button" class="btn btn-sucess" style="color:white;background:#4AB80A;font-weight:600" data-bs-toggle="modal" data-bs-target="#myModal">
            Publish Result
        </button>
    </div>
    <br>  
    <div class="container">    
            <?php
        
            $results_per_page = 3;   
            $query = "SELECT DISTINCT date FROM result";  
            $result = mysqli_query($conn, $query);  
            $number_of_result = mysqli_num_rows($result);  
            $number_of_page = ceil ($number_of_result / $results_per_page);  

            if (!isset ($_GET['page']) ) {  
                $page = 1;  
            } else {  
                $page = $_GET['page'];  
            } 

            $page_first_result = ($page-1) * $results_per_page; 

            $sql = "SELECT DISTINCT date FROM result order by date DESC LIMIT " . $page_first_result . ',' . $results_per_page;
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
            ?>
                <div class="card mb-3" style="width: 100%;">
                    <div class="card-body">
                        <h3 style="color:#4AB80A;font-weight:600;text-decoration:underline" class="card-title">
                        <script>
                            document.write(moment("<?php echo($row["date"])?>").format('ll'))
                        </script>    
                        </h3>
                       
                        <div class="container-fluid">
                            <div class="row">
                                <?php
                                $date = $row["date"];
                                $sql = "SELECT * FROM result where date='$date' order by id DESC";
                                $res = $conn->query($sql);
                                if ($res->num_rows > 0) {
                                    while($fin = $res->fetch_assoc()) {
                                ?>
                                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-2 mt-2">
                                        <div style="border:1px solid #f0f0f0;border-radius:10px;background:#f9f9f9;padding:10px">
                                            <h4 style="text-align:center;font-weight:900 !important;font-size:22px;color:#666"><?php echo($fin["place"]) ?> o'clock Result</h4>
                                            <hr>
                                            <p style="color:#4AB80A;padding-left:20px">1st Prize : <span style="color:#333"><?php echo($fin["code1"]) ?></span></p>
                                            <p style="color:#4AB80A;padding-left:20px">2nd Prize : <span style="color:#333"><?php echo($fin["code2"]) ?></span></p>
                                            <p style="color:#4AB80A;padding-left:20px">3rd Prize : <span style="color:#333"><?php echo($fin["code3"]) ?></span></p>
                                            <p style="color:#4AB80A;padding-left:20px">4th Prize : <span style="color:#333"><?php echo($fin["code4"]) ?></span></p>
                                            <p style="color:#4AB80A;padding-left:20px">5th Prize : <span style="color:#333"><?php echo($fin["code5"]) ?></span></p>
                                            <hr>
                                            <form onsubmit="document.getElementById('loader').style.display='block'" action="/admin/delete/index.php" method="post">
                                                <input type="hidden" name="id" value="<?php echo($fin["id"]) ?>">
                                                <button onclick="return confirm('Do you want to delete?')" style="width:100%" class="btn btn-danger">Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                <?php
                                    }
                                } 
                                ?>
                            </div>
                        </div>
                    </div>
                </div>

            <?php
                }
            } else {
            ?>

            <p  style="text-align:center">No Results found !</p>

            <?php
            }
            ?>
    </div>

    <p style="text-align:center;line-height:3.5;font-size:16px">
        <?php 
        for($page = 1; $page<= $number_of_page; $page++) { 
            if($page==$_GET['page']){
                echo '<a style="margin:5px;padding:14px;border-radius:5px;border:2px solid #4AB80A;background-color:#4AB80A;font-weight:600;color:#fff;text-decoration:none" href = "?page=' . $page . '">' . $page . ' </a>';  
            }else{
                echo '<a style="margin:5px;padding:8px;border-radius:5px;border:1px solid #aaa;color:#444;text-decoration:none" href = "?page=' . $page . '">' . $page . ' </a>';  
            }
        }  
        ?>
    </p>
    <br>
</div>



<div class="modal fade model-sm" id="myModal">
  <div class="modal-dialog ">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Publish Today Results</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            <form action="/admin/create/index.php" onsubmit="document.getElementById('loader').style.display='block'" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="date" class="form-label">Date <span style="color:red">*</span>:</label>
                    <input type="date" class="form-control" name="date" id="date">
                </div>
                <div class="mt-3 mb-3">
                    <label for="time" class="form-label">Time <span style="color:red">*</span>:</label>
                    <select required class="form-select" id="time" name="time">
                        <option selected>select time</option>
                        <option value="9">09:00 am</option>
                        <option value="1">01:00 pm</option>
                        <option value="8">08:00 pm</option>
                    </select>
                </div>

                <div class="mt-3 mb-3">
                    <label for="prize" class="form-label">1st Prize <span style="color:red">*</span>:</label>
                    <input required type="text" placeholder="XXYYYY" class="form-control" id="prize" name="code1">
                </div>

                <div class="mt-3 mb-3">
                    <label for="prize" class="form-label">2nd Prize <span style="color:red">*</span>:</label>
                    <input required type="text" placeholder="XXYYYY" class="form-control" id="prize" name="code2">
                </div>

                <div class="mt-3 mb-3">
                    <label for="prize" class="form-label">3rd Prize <span style="color:red">*</span>:</label>
                    <input required type="text" placeholder="XXYYYY" class="form-control" id="prize" name="code3">
                </div>

                <div class="mt-3 mb-3">
                    <label for="prize" class="form-label">4th Prize <span style="color:red">*</span>:</label>
                    <input required type="text" placeholder="XXYYYY" class="form-control" id="prize" name="code4">
                </div>

                <div class="mt-3 mb-3">
                    <label for="prize" class="form-label">5th Prize <span style="color:red">*</span>:</label>
                    <input required type="text" placeholder="XXYYYY" class="form-control" id="prize" name="code5">
                </div>

                <button class="btn mt-2 mb-2" style="text-align:center;width:100%;height:50px;background-color:#4AB80A;color:white;font-weight:800">Create</button>
            </form>
        </div>
    </div>
  </div>
</div>
<script>
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;

    document.getElementById('date').value = formattedToday;
</script>
<script>
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.get('err')){
      document.write("<div id='err' style='position:fixed;bottom:30px; right:30px;background-color:#FF0000;padding:10px;border-radius:10px;box-shadow:2px 2px 4px #aaa;color:white;font-weight:600'>"+urlParams.get('err')+"</div>")
      setTimeout(()=>{
          document.getElementById("err").style.display="none"
      }, 3000)
    }
</script>

<script>
    if(urlParams.get('msg')){
      document.write("<div id='msg' style='position:fixed;bottom:30px; right:30px;background-color:#4CAF50;padding:10px;border-radius:10px;box-shadow:2px 2px 4px #aaa;color:white;font-weight:600'>"+urlParams.get('msg')+"</div>")
      setTimeout(()=>{
          document.getElementById("msg").style.display="none"
      }, 3000)
    }
</script>


<?php require("./layout/Footer.php") ?>