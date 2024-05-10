<?php

include('../connection.php');

$bt_id = $_REQUEST['bt_id'];
$ajax_response = [];

if($bt_id == 'asce'){

    $query = "SELECT * FROM user ORDER BY id ASC";
    $result = mysqli_query($connection,$query);
    $total_rows = mysqli_num_rows($result);
    $output = [];

    if($total_rows > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $output[] = $rows;
        }
    }

}elseif($bt_id == 'desc'){

    $query = "SELECT * FROM user ORDER BY id DESC";
    $result = mysqli_query($connection,$query);
    $total_rows = mysqli_num_rows($result);
    $output = [];

    if($total_rows > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $output[] = $rows;
        }
    }
}

if($output){

    $ajax_response['is_success'] = true;
    $ajax_response['data'] = $output;

}else{

    $ajax_response['is_success'] = false;
    $ajax_response['message'] = 'Something Went Wrong';

}

print_r(json_encode($ajax_response));
exit;
?>