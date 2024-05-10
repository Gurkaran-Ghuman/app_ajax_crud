<?php

include('../connection.php');

$ajax_response = [];
$required_field = ['f_name','l_name','email','pass','phone','address'];
$error = [];

foreach($required_field as $key => $value){

    if(!isset($_REQUEST[$value]) || empty($_REQUEST[$value])){

        $error[$value] = $value.' is required';
    }
}
if(count($error)==0){

    $f_name = $_REQUEST['f_name'];
    $l_name = $_REQUEST['l_name'];
    $email = $_REQUEST['email'];
    $pass = $_REQUEST['pass'];
    $phone = $_REQUEST['phone'];
    $address = $_REQUEST['address'];

    $table = 'user';

    if(isset($_REQUEST['id']) && !empty($_REQUEST['id'])){

        // Update Operation
        $id = $_REQUEST['id'];
        $query  = "UPDATE user SET f_name='$f_name', l_name='$l_name', email='$email', pass='$pass', phone='$phone', address='$address' WHERE id = ".$id;
        $result = mysqli_query($connection,$query);
        $ajax_response['message'] = 'UPDATED Successfully!';

    } else {

        //insert operation
        $query = "INSERT INTO $table (`f_name`,`l_name`,`email`,`pass`,`phone`,`address`) VALUES ('$f_name','$l_name','$email','$pass','$phone','$address')";
        $result = mysqli_query($connection,$query);
        $ajax_response['message'] = 'Registered Successfully!';

    }

    if($result){

        $ajax_response['is_success'] = true;

    } else {

        $error[] = 'something went wrong.please try again!';
    }
}

if(count($error)>0){

    $ajax_response['is_success'] = false;
    $ajax_response['error'] = $error;
}

print_r(json_encode($ajax_response));
exit;
?>