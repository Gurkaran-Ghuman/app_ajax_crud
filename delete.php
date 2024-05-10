<?php

include('./connection.php');

$id = $_REQUEST['id'];
$ajax_response = [];

if($id){

    $query = "DELETE FROM user WHERE id=".$id;
    $result = mysqli_query($connection,$query);

    if($result){

        $ajax_response['is_success'] = true;
        $ajax_response['message'] = 'Deleted Successfully';
    }else{

        $ajax_response['is_success'] = false;
        $ajax_response['message'] = 'Something Went Wrong';
    }
}
print_r(json_encode($ajax_response));
exit;
?>