<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["your-name"]));
    $email = filter_var(trim($_POST["your-email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["tel-496"]));
    $location = strip_tags(trim($_POST["menu-278"]));
    $address = strip_tags(trim($_POST["your-address"]));

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'dvpldigitalmarketing@gmail.com';
        $mail->Password = 'wlon yvqb tome rrvh';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('laxmareddy.j@dvpl.org');
        $mail->addAddress('ramesh@dvpl.in');
        $mail->addAddress('rpreethikareddy@dvpl.org');

        // Content
        $mail->isHTML(false);
        $mail->Subject = "New SME Broadband Submission from $name";
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nLocation: $location\nAddress: $address\n";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Thank you for contacting us, $name. We will get back to you soon!"]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Oops! Something went wrong. Please try again later. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "There was a problem with your submission. Please try again."]);
}
?>
