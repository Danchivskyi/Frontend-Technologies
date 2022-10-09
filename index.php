<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-reboot.css">
    <link rel="stylesheet" href="css/bootstrap-grid.css">
    <link rel="stylesheet" href="css/Style.css">
    <link rel="stylesheet" href="css/main.css">

    <link rel="stylesheet" type="text/css" href="css/semantic.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <script src="js/semantic.min.js"></script>
    <title>System obsługi</title>
</head>
<body>


<nav class="navbar navbar-expand-lg navbar-dark bg-secondary">

     <a class="navbar-brand">
        
       <img class="d-none d-lg-block" src="logo.jpg" width="300" height="30">
    </a>
    <a class="navbar-brand"  style="font-size: 25px;color: white">
        
        System obsługi
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">
           <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                   <button class="nav-link btn-lg btn btn-warning" id="navHome">Home</button>
               </li>
               <li class="nav-item">
                   <button class="nav-link btn-lg btn-success" id="navCustomer">Customer</button>
               </li>
               <li class="nav-item">
                   <button class="nav-link btn-lg btn btn-danger" id="navItem">Item</button>
               </li>
               <li class="nav-item">
                   <button class="nav-link btn-lg btn btn-info" id="navOrder">Order</button>
               </li>
               <li class="nav-item">
                   <button class="nav-link btn-lg btn btn-dark" id="navOrder"><a href="about.html">About</a></button>
               </li>
               <li class="nav-item">
                   <button class="nav-link btn-lg btn btn-dark" id="navOrder"><a href="contact.html">Contact</a></button>
               </li>
           </ul>
       </div>
   </nav>


   <section>
<!--Rejestracja oraz logowanie-->
<?php
		session_start();

		if(!isset($_SESSION['username'])) {
		$_SESSION['msg'] = "Nie jesteś zalogowany";
		}

		if(isset($_GET['logout'])) {
		session_destroy();
		unset($_SESSION['username']);
		header("location: index.php");
		}
?>
	
    <nav class="navigation">
	<?php if(!isset($_SESSION['username'])) : ?>
		<?php
			echo '<li><a href="register.php">Rejestracja</a></li></ul>';
			echo '<p>Nie jesteś zalogowany. <p>Proszę się zalogować.<li><a href="login.php"><br>Zaloguj się.</a></li></p>';
		?>
	<?php endif ?>
				
					
	<?php if(isset($_SESSION['success'])) : ?>
		<div class="error success" >
			<?php
				echo $_SESSION['success'];
				unset($_SESSION['success']);
			?>
		</div>
	<?php endif ?>

	<?php if(isset($_SESSION['username'])) : ?>
		<p>Witaj
			<strong>
				<?php echo " " . $_SESSION['username']; ?>
			</strong>
			
			<p><a href="index.php?logout='1'" style="color: yellow;">Wyloguj</a>
	<?php endif ?>
	<!---->
    </section>



<div id="dashboardPanel">
<div class="ui link cards" style="margin: 3%">

    <div class="card" style="margin: 1%">
        <div class="ui violet label" style="font-size: 60px;padding-left: 35%">
            <i class="fas fa-users"></i>
        </div>
        <div class="content">
            <div class="header">Customers</div>
            <div class="description">
                316
            </div>
        </div>
        <button class="ui button">
                View
        </button>
    </div>


    <div class="card" style="margin: 1%">
        <div class="ui green label" style="font-size: 60px;padding-left: 35%">
            <i class="fas fa-box-open"></i>
        </div>
        <div class="content">
            <div class="header">Items</div>
            <div class="description">
                2746
            </div>
        </div>
        <button class="ui button">
                View
        </button>
    </div>

    <div class="card" style="margin: 1%">
        <div class="ui pink label" style="font-size: 60px;padding-left: 35%">
            <i class="fas fa-cart-plus"></i>
        </div>
        <div class="content">
            <div class="header">Orders</div>
            <div class="description">
                511
            </div>
        </div>
        <button class="ui button">
                <a href="buy.html">View</a>
        </button>
    </div>

    <div class="card" style="margin: 1%">
        <div class="ui teal label" style="font-size: 60px;padding-left: 35%">
            <i class="fas fa-comments"></i>
        </div>
        <div class="content">
            <div class="header">New Messages</div>
            <div class="description">
                189
            </div>
        </div>
        <button class="ui button">
            <a>
                View
            </a>
        </button>
    </div>
</div>

<div class="row">
    <div class="col-lg-6">
    </div>
    <div class="col-lg-6">
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
    </div>
    <div class="col-lg-6">
    </div>
</div>
</div>


<div id="customerPanel" style="display: none; ">
        <button type="button" class="btn btn-outline-secondary" style="margin: 10px" id="viewCustomers">
            <i class="fas fa-arrow-circle-left"></i>
            View Customers
        </button>
    <label class="btn-primary" style="padding: 5px;border: 2px solid white; width: 100%">NEW CUSTOMER</label>
    <form style="margin: 1%;width: 98%">
        <div class="form-group row">
            <label for="inputNewID" class="col-sm-2 col-form-label">Customer ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewID" placeholder="Customer ID">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewFirstName" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewFirstName" placeholder="First Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewLastName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewLastName" placeholder="Last Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewEmail" placeholder="Email">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewAddress" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewAddress" placeholder="Address">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewTelephone" class="col-sm-2 col-form-label">Telephone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewTelephone" placeholder="Telephone">
            </div>
        </div>
    </form>
    <div style="margin-left: 80%" class="buttons">
        <button type="button" class="btn btn-outline-primary">Save</button>
        <button type="button" class="btn btn-outline-warning">Clear</button>
    </div>
</div>

<div id="customerViewPanel"  style="display: none">
    <form class="form-inline my-2 my-lg-0" style="margin: 10px">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Customers" aria-label="Search">
        <button class="btn btn-outline-primary  my-2 my-sm-0" type="button">Search</button>
        <button class="btn btn-outline-dark  my-2 my-sm-0" type="button" id="addNewCustomer" style="margin-left: 65%">+ Add new Customer</button>
    </form>

    <table class="table table-hover" style="margin: 1%;width: 98%">
        <thead class="thead-light">
        <tr>
            <th scope="col"></th>
            <th scope="col">Customer ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Telephone</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">C001</th>
            <td>Kacper Juliusz</td>
            <td>Radomski</td>
            <td>suarez081119@gmail.com</td>
            <td>Rzeszow</td>
            <td>66 777 33 48</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">C002</th>
            <td>Damian</td>
            <td>Zaloguj</td>
            <td>adones@gmail.com</td>
            <td>Poznan</td>
            <td>55 222 333</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">C003</th>
            <td>Adrian</td>
            <td>Konkurent</td>
            <td>adrian@gmail.com</td>
            <td>Warszawa</td>
            <td>44 232 23 23</td>
        </tr>
        </tbody>
    </table>

    <div style="margin-left: 80%" class="buttons">
        <a href="Customer-Update.html">
            <button type="button" class="btn btn-outline-success">
                Update
            </button>
        </a>
        <button type="button" class="btn btn-outline-danger">Delete</button>
    </div>
</div>

<div id="customerUpdatePanel" style="display: none">
    <button type="button" class="btn btn-outline-secondary" style="margin: 10px" id="viewCustomersFromUpdate">
        <i class="fas fa-arrow-circle-left"></i>
        View Customers
    </button>
    <label class="btn-primary" style="padding: 5px;border: 2px solid white; width: 100%">UPDATE CUSTOMER</label>
    <form style="margin: 1%;width: 98%">
        <div class="form-group row">
            <label for="inputID" class="col-sm-2 col-form-label">Customer ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputID" placeholder="Customer ID">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail" placeholder="Email">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputAddress" placeholder="Address">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputTelephone" class="col-sm-2 col-form-label">Telephone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputTelephone" placeholder="Telephone">
            </div>
        </div>
    </form>
    <div style="margin-left: 80%" class="buttons">
        <button type="button" class="btn btn-outline-success">Update</button>
    </div>
</div>

<div id="itemPanel" style="display: none">
    <button type="button" class="btn btn-outline-secondary" style="margin: 10px" id="viewItems">
        <i class="fas fa-arrow-circle-left"></i>
        View Items
    </button>
    <label class="btn-primary" style="padding: 5px;border: 2px solid white; width: 100%">NEW ITEM</label>
    <form style="margin: 1%;width: 98%">
        <div class="form-group row">
            <label for="inputNewCode" class="col-sm-2 col-form-label">Item Code</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewCode" placeholder="I001">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewName" class="col-sm-2 col-form-label">Item Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewName" placeholder="Item Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewPrice" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewPrice" placeholder="Rs.1000.00">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewAddedDate" class="col-sm-2 col-form-label">Added Date</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewAddedDate" placeholder="2019/01/01">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewTotalQuantity" class="col-sm-2 col-form-label">Total Quantity</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewTotalQuantity" placeholder="100">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputNewReturned" class="col-sm-2 col-form-label">Returned</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputNewReturned" placeholder="00">
            </div>
        </div>
    </form>
    <div style="margin-left: 80%" class="buttons">
        <button type="button" class="btn btn-outline-primary">Save</button>
        <button type="button" class="btn btn-outline-warning">Clear</button>
    </div>
</div>

<div id="itemViewPanel" style="display: none">
    <form class="form-inline my-2 my-lg-0" style="margin: 10px">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Items" aria-label="Search">
        <button class="btn btn-outline-primary  my-2 my-sm-0" type="button">Search</button>
        <button class="btn btn-outline-dark  my-2 my-sm-0" type="button" id="addNewItem" style="margin-left: 65%">+ Add New Item</button>
    </form>
    <table class="table table-hover" style="margin: 1%;width: 98%">
        <thead class="thead-light">
        <tr>
            <th scope="col"></th>
            <th scope="col">Item Code</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Added Date</th>
            <th scope="col">Total</th>
            <th scope="col">Sold</th>
            <th scope="col">Returned</th>
            <th scope="col">Left</th>
            <th scope="col">Supplier ID</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        <tr>
            <td>
                <input type="radio">
            </td>
            <th scope="row">I001</th>
            <td>Bilet na Oktobeer</td>
            <td>Zł.5.00</td>
            <td>04/10/2022</td>
            <td>100</td>
            <td>46</td>
            <td>0</td>
            <td>54</td>
            <td>Sup_0023</td>
        </tr>
        </tbody>
    </table>
    <div style="margin-left: 80%" class="buttons">
        <a href="Item-Update.html">
            <button type="button" class="btn btn-outline-success">
                Update
            </button>
        </a>
        <button type="button" class="btn btn-outline-danger">Delete</button>
    </div>
</div>

<div id="itemUpdatePanel" style="display: none">
    <button type="button" class="btn btn-outline-secondary" style="margin: 10px" id="viewItemsFromUpdate">
        <i class="fas fa-arrow-circle-left"></i>
        View Items
    </button>
    <label class="btn-primary" style="padding: 5px;border: 2px solid white; width: 100%">UPDATE ITEM</label>
    <form style="margin: 1%;width: 98%">
        <div class="form-group row">
            <label for="inputCode" class="col-sm-2 col-form-label">Item Code</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputCode" placeholder="I001">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">Item Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName" placeholder="Item Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPrice" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPrice" placeholder="Rs.1000.00">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputAddedDate" class="col-sm-2 col-form-label">Added Date</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputAddedDate" placeholder="2019/01/01">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputTotalQuantity" class="col-sm-2 col-form-label">Total Quantity</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputTotalQuantity" placeholder="100">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputReturned" class="col-sm-2 col-form-label">Returned</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputReturned" placeholder="00">
            </div>
        </div>
    </form>
    <div style="margin-left: 80%" class="buttons">
        <button type="button" class="btn btn-outline-success">Update</button>
    </div>
</div>

<div id="orderPanel" style="display: none">
    <button type="button" class="btn btn-outline-secondary" style="margin: 10px" id="viewOrders">
        <i class="fas fa-arrow-circle-left"></i>
        View Orders
    </button>
    <label class="btn-primary" style="padding: 5px;border: 2px solid white; width: 100%">NEW ORDER</label>
    <form style="width: 39%" id="orderForm">

        <label class="btn-secondary" style="padding: 5px; width: 100%">ORDER DETAILS</label>

        <div class="form-group row">
            <label for="inputOrderID" class="col-sm-2 col-form-label">Order ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputOrderID" placeholder="Ord-00123">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDate" placeholder="01/01/2019">
            </div>
        </div>
    </form>
    <form style="width: 59%" id="customerForm">
        <label class="btn-secondary" style="padding: 5px;border: 2px solid white; width: 100%">CUSTOMER DETAILS</label>

        <div class="form-group row">
            <label for="inputCustomerID4Order" class="col-sm-2 col-form-label">Customer ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputCustomerID4Order" placeholder="C00123">
            </div>
        </div>

        <div class="form-group row">
            <label for="inputFirstName4Order" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputFirstName4Order" placeholder="First Name">
            </div>
        </div>

        <div class="form-group row">
            <label for="inputLastName4Order" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLastName4Order" placeholder="Last Name">
            </div>
        </div>
    </form>
    <label class="btn-secondary" style="position: absolute;top: 65%;margin-left: 1%; padding: 5px;border: 2px solid white; width: 99%">ITEM DETAILS</label>
    <form style="margin: 1%;width: 50%" id="itemForm">


        <div class="form-group row">
            <label for="inputItemCode" class="col-sm-2 col-form-label">Item Code</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputItemCode" placeholder="I-00123">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputItemName" class="col-sm-2 col-form-label">Item Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputItemName" placeholder="Item Name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputAvailableQty" class="col-sm-2 col-form-label">Available Quantity</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputAvailableQty" placeholder="100">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputUnitPrice" class="col-sm-2 col-form-label">Unit Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputUnitPrice" placeholder="Rs.1000.00">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputQty" class="col-sm-2 col-form-label">Quantity</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputQty" placeholder="10">
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" style="margin-left: 90%">
                Add
            </button>
        </div>
    </form>
    <table class="table table-hover"style="margin: 1%;width: 46%" id="itemTable">
        <thead class="thead-light">
        <tr>

            <th scope="col">ITEM CODE</th>
            <th scope="col">ITEM NAME</th>
            <th scope="col">UNIT PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">TOTAL</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">I-001</th>
            <td>School Bag</td>
            <td>Rs.12000.00</td>
            <td>01</td>
            <td>Rs.12000.00</td>
        </tr>
        <tr>
            <th scope="row">I-001</th>
            <td>School Bag</td>
            <td>Rs.12000.00</td>
            <td>01</td>
            <td>Rs.12000.00</td>
        </tr>
        <tr>
            <th scope="row">I-001</th>
            <td>School Bag</td>
            <td>Rs.12000.00</td>
            <td>01</td>
            <td>Rs.12000.00</td>
        </tr>
        <tr style="color: red">
            <td colspan="4" style="text-align: right">
                <b>Total</b>
            </td>
            <td><b>Rs.36000.00</b></td>
        </tr>
        </tbody>
    </table>
    <div class="container" style="position: absolute; top: 125%; margin: 10px">
        <div class="row">
            <div class="col-lg-4">
                <label class="lbl">Total : Rs.</label>
                <input type="text">
            </div>
            <div class="col-lg-4">
                <label class="lbl">Discount : Rs.</label>
                <input type="text">
            </div>
            <div class="col-lg-4">
                <label class="lbl">Sub Total : Rs.</label>
                <input type="text">
            </div>
        </div>
    </div>
    <button type="button" class="btn-lg  btn-primary" id="btnProceed">Proceed</button>
    <button type="button" class="btn-lg btn-warning" id="btnClear">Clear</button>
</div>

<div id="orderViewPanel" style="display: none">
    <form class="form-inline my-2 my-lg-0" style="margin: 10px">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Order" aria-label="Search">
        <button class="btn btn-outline-primary  my-2 my-sm-0" type="button">Search</button>
        <button class="btn btn-outline-dark  my-2 my-sm-0" type="button" id="addNewOrder" style="margin-left: 65%">+ Add New Order</button>
    </form>
    <table class="table table-hover"style="margin: 1%;width: 98%">
        <thead class="thead-light">
        <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Order Date</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Total</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Ord-001</th>
            <td>04-10-2022</td>
            <td>C001</td>
            <td>Zł.230.00</td>
        </tr>
        <tr>
            <th scope="row">Ord-002</th>
            <td>04-10-2022</td>
            <td>C001</td>
            <td>Zł.230.00</td>
        </tr>
        <tr>
            <th scope="row">Ord-003</th>
            <td>04-10-2022</td>
            <td>C001</td>
            <td>Zł.230.00</td>
        </tr>
        <tr>
            <th scope="row">Ord-004</th>
            <td>04-10-2022</td>
            <td>C001</td>
            <td>Zł.230.00</td>
        </tr>
        <tr>
            <th scope="row">Ord-005</th>
            <td>04-10-2022</td>
            <td>C001</td>
            <td>Zł.230.00</td>
        </tr>
        </tbody>
    </table>
</div>

<!--Formularz kontaktowy-->
<section>
    <div id="contact">
        <h2>Kontakt</h2>
        <form action="index.html" method="GET">
            <table>
                <tr>
                    <td><label for="name">Imie i nazwisko:</label></td>
                    <td><input type="text" name="name" id="name" size="25" placeholder="Kacper Radomski"/></td>
                </tr>
    
                <tr>
                    <td><label for="nr_phone">Numer telefonu:</label></td>
                    <td><input type="text" id="nr_phone" name="nr_phone" size="30" placeholder="123-456-678" /></td>
                </tr>
     
                <tr>
                    <td><label for="mail">E-mail:</label></td>
                    <td><input type="text" id="mail" name="mail" size="30" placeholder="nazwa@domena.tld" /></td>
                </tr>
    
                <tr>
                    <td><label for="temat">Temat:</label></td>
                    <td><input type="text" name="temat" id="temat" required placeholder="Temat"/></td>
                </tr>
    
                <tr>
                    <td><label for="message">Wiadomość:</label></td>
                    <td><input type="text" id="message" name="message" size="45" placeholder="Wiadomość do nas"/></td>
                </tr>
    
                <tr>
                    <td></td>
                    <td><input type="submit" value="Wyślij"/></td>
                </tr>
    
            </table>
        </form>
    </div>
    </section>
    <!---->


<!-- Optional JavaScript -->
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/Script.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/bootstrap.bundle.js"></script>

</body>
</html>