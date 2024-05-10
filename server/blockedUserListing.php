<?php

include('../connection.php');
$ajax_response = [];
$value = 0;
$operation = $_REQUEST['operation']??'DESC';
$query = "SELECT * FROM user WHERE is_active=".$value." ORDER BY id ".$operation;
$result = mysqli_query($connection,$query);
$total_rows = mysqli_num_rows($result);
$output = [];

if($total_rows > 0){
    while($rows = mysqli_fetch_assoc($result)){
        $output[] = $rows;
    }
}

$ajax_response['is_success'] = true;
$ajax_response['data'] = $output;
$ajax_response['total_rows'] = $total_rows;

print_r(json_encode($ajax_response));
exit;
?>