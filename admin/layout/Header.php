<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Bhutan Docoma - Admin</title>
    <link rel="stylesheet" href="/static/css/bootstrap.min.css">
    <link rel="stylesheet" href="/static/css/style.css">
    <link rel="icon" href="/static/images/logo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/static/js/moment.js"></script>

</head>
<body>
    <style>
        html, body
        {
            height: 100%;
        }
        footer{
            position: relative;
            clear: both;
        }
        .col-logo{
            height:50px; 
        }
        /* For Desktop View */
        @media screen and (min-width: 1024px) {
            .col-logo{
                height:50px; 
            }
        }
        
        /* For Tablet View */
        @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
            .col-logo{
                width:30vw;
                height:auto
            }
        }
        
        /* For Mobile Phones Portrait or Landscape View */
        @media screen and (max-device-width: 640px) {
            .col-logo{
                width:30vw;
                height:auto
            }
        }
        .nav-item{
            font-size:18px;
            font-weight:600;
        }

        a.active{
            color:#4AB80A !important;
            font-weight:700;
            text-shadow:1px 1px 2px #aaa;
        }
        .navbar-toggler:focus{
            box-shadow:none;
        }
        .navbar-toggler{
            border:none;
        }
    </style>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg sticky-top" style="background:white;box-shadow:1px 1px 2px #aaa;">
        <div class="container">
            <a class="navbar-brand" href="">
                <img src="/static/images/logo.png" alt="College Logo" class="col-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"0></span>
            </button>
            <div class="collapse navbar-collapse" style="text-align:center" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/admin/today.php?page=1">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/admin/logout.php">Logout</a></li>
                        </ul>
                    </li>

                    
                </ul>
            </div>
        </div>
    </nav>