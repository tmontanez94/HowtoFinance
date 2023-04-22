<?php
// retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// validate form data
if (empty($name) || empty($email) || empty($message)) {
  // handle form validation error
  die("Please fill out all fields.");
}

// send email
$to = 'tmontanez@htu.edu';
$subject = 'New message from your website';
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  // handle successful email sending
  echo "Thank you for your message!";
} else {
  // handle email sending error
  echo "An error occurred while sending your message.";
}
?>