<?php
$errorMSG = "";
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
	$name = $_POST['name'];
}
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
	$email = $_POST['email'];
}
// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
	$message = $_POST['message'];
}
$EmailTo = "zachnagatani@gmail.com";
$Subject = "Someone Has Contacted You Through the COTC Website!";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
if ($errorMSG != ""){
	die();
}
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
} else {
    if($errorMSG == ""){
        echo "Something went wrong :(";       	
    } else {
        echo $errorMSG;
    }
}
?>