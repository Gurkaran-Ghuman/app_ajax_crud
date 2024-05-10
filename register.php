
<!DOCTYPE html>
<html lang="en">
<head> 
    <?php include_once(__DIR__.'/partial/head.php'); ?>
    <style>
      .suggestion-container ul li {
      background:#ccc;
      }
    </style>
</head>
<body>

<div class="container">
<form id="registerForm">
    <h2>Register</h2>
    <p class='success'></p>
  <div class="form-group">
    <label for="f_name">First Name</label>
    <input type="text" class="form-control f_name" id="f_name" name='f_name' aria-describedby="f_name" placeholder="Enter First Name">
    <p class="error error-f_name"></p>
  </div>
  <div class = 'suggestion-container'>
  </div>
  <div class="form-group">
    <label for="l_name">Last Name</label>
    <input type="text" class="form-control l_name" id="l_name" name='l_name' aria-describedby="l_name" placeholder="Enter Last Name">
    <p class='error error-l_name'></p>
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control email" id="email" name='email' aria-describedby="email" placeholder="Enter email">
    <p class='error error-email'></p>
    <p class='email_match'></p>
  </div>
  <div class="form-group">
    <label for="pass">Password</label>
    <input type="pass" class="form-control pass" id="pass" name='pass' placeholder="Password">
    <p class='error error-pass'></p>
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="text" class="form-control phone" id="phone" name='phone' aria-describedby="phone" placeholder="Enter Phone">
    <p class='error error-phone'></p>
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea type="text" class="form-control address" id="address" name='address' aria-describedby="address" placeholder="Enter address"></textarea>
    <p class='error error-address'></p>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="form-check">
    <input type='hidden' id='id' name='id' class='id' value=''>
  </div>
  <button type="submit" class="btn btn-primary checkId">Submit</button>
</form>
</div>
    <footer>
        <?php include_once(__DIR__.'/partial/footer.php');?>
    </footer>
</body>
</html>
