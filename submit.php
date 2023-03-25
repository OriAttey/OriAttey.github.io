<?php

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Validate form data
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
  echo "Error: Please fill out all form fields.";
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Error: Invalid email address.";
  exit;
}

// Compose email message
$to = "oriaatteyp@gmail.com";
$subject = "New message from $name";
$body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";

// Send email
if (mail($to, $subject, $body)) {
  echo "Success: Your message has been sent!";
} else {
  echo "Error: There was a problem sending your message. Please try again later.";
}

?>
