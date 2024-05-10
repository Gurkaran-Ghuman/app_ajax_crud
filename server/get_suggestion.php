<?php

include('../connection.php');

$f_name = $_REQUEST['f_name'];
$ajax_response = [];
$output = [];

if($f_name != ''){

    $query = "SELECT * FROM user WHERE f_name LIKE '%".$f_name."%'";
    $result = mysqli_query($connection,$query);
    $total_rows = mysqli_num_rows($result);

    if($total_rows > 0){

        while($rows = mysqli_fetch_assoc($result)){
            $output[] = $rows;
        }
    }
    if($output){

        $ajax_response['is_success'] = true;
        $ajax_response['data'] = $output;
    }
}else{
    
    $ajax_response['is_success'] = false;
    $ajax_response['message'] = 'Something Went Wrong';
}

print_r(json_encode($ajax_response));
exit;
?>