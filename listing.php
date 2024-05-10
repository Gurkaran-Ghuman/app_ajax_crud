<!DOCTYPE html>
<html lang="en">
<head> 
    <?php include_once(__DIR__.'/partial/head.php'); ?>
</head>
<body>

<div class="container">
  <h2>Basic Table</h2>
  <p class='delete block_user unblock_user'></p>
  <!-- <p class='block_user'></p> -->
  <button type="button" id="" data-operation="ASC" class="btn btn-secondary asce" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
      Ascending
  </button>
<button type="button" data-operation="DESC" id ="" class="btn btn-secondary desc" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
    Descending
</button><hr/>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#activeUsers" role="tab" aria-controls="home" aria-selected="true">Active(<span class="totalActiveUsers"></span>)</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#blockedUsers" role="tab" aria-controls="profile" aria-selected="false">Blocked(<span class="totalBlockedUsers"></span>)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="activeUsers" role="tabpanel" aria-labelledby="home-tab">
      <table class="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody id="tBody">
        </tbody>
      </table>
  </div>
  <div class="tab-pane fade" id="blockedUsers" role="tabpanel" aria-labelledby="profile-tab">
  <table class="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Block</th>
          </tr>
        </thead>
        <tbody id="blockedUsers--Body">
        </tbody>
      </table>
  </div>
</div> 
</div>
    <footer>
        <?php include_once(__DIR__.'/partial/footer.php');?>
    </footer>
    <?php include_once(__DIR__.'/edit_modal.php');?>
    <script src="http://localhost/02-05-2024/app_ajax_crud//assets/vendor/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
