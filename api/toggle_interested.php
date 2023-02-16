<?php
// session_start();
// include "../includes/database_connect.php";
// if(!isseet(_$session['user_id'])){
//     echo json_encode(array('success'=>false, "is_logged_in"=>false ));
//     return;
// }

// $user_id = _$GET['user_id'];
// $property_id = $_GET['property_id'];

//checking if the user has previously marked intersted properties
// $sql = "select from interested_users_properties where user_id = $user_id AND property_id = $property_id ";
// $result = mysqli_query($conn,$sql); //mysqli function gets the query to the database and stores the result in a variable
// if(!$result) {
//     echo json_encode(array("success" => false, "message" => "something went wrong"));
//     return;
// }

//if user has aleredy liked the property unlike it
// if(mysqli_num_rows($result)>0) {
//     $sql_1 = "delete from interested_users_properties where user_id = $user_id AND property_id = $property_id";
//     $result_1 = mysqli_query($conn,$sql_1);
//     if(!$result_1)
//     {
//        echo json_encode(array("success" => false, "message" => "something went wrong"));
//        return;
//     }
//     else
//     {
//         echo json_encode(array("success" => true, "is_interested" =>false, "property_id" => $property_id));
//         return;
//     }
// }

// else
// {
//       $sql_2 = "insert into interested_users_properties (user_id,property_id) values ('$user_id' , '$property_id')";
//       $result_2 = mysqli_query($conn, $sql_2);
//       if(!$result_2) {
//         echo json_encode(array("success" => false, "message" => "something went wrong"));
//         return;
//       }
//       else {
//         echo json_encode(array("success" => true, "is_interested" =>true, "property_id" => $property_id));
//         return;
//       }
        
// }



// 

session_start();

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
header ("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization,X-Requested-with");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: access");

require "../includes/database_connect.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(array("success" => false, "is_logged_in" => false));
    return;
}

     $user_id =  $_SESSION['user_id'];
   
    
      $property_id = $_GET['property_id'];
      
        if(!$property_id){
        $data = json_decode(file_get_contents("php://input"));
        $property_id = $data;}
        
     










$sql_1 = "SELECT * FROM interested_users_properties WHERE user_id = $user_id AND property_id = $property_id";
$result_1 = mysqli_query($conn, $sql_1);
if (!$result_1) {
    echo json_encode(array("success" => false, "message" => "Something went wrong"));
    return;
}

if (mysqli_num_rows($result_1) > 0) {
    $sql_2 = "DELETE FROM interested_users_properties WHERE user_id = $user_id AND property_id = $property_id";
    $result_2 = mysqli_query($conn, $sql_2);
    if (!$result_2) {
        echo json_encode(array("success" => false, "message" => "Something went wrong"));
        return;
    } else {
        echo json_encode(array("success" => true, "is_interested" => false, "property_id" => $property_id));
        return;
    }
} else {
    $sql_3 = "INSERT INTO interested_users_properties (user_id, property_id) VALUES ('$user_id', '$property_id')";
    $result_3 = mysqli_query($conn, $sql_3);
    if (!$result_3) {
        echo json_encode(array("success" => false, "message" => "Something went wrong"));
        return;
    } else {
        echo json_encode(array("success" => true, "is_interested" => true, "property_id" => $property_id));
        return;
    }
}


// ?>