<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json'); // Important for AJAX response

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["your-name"] ?? ''));
    $email = filter_var(trim($_POST["your-email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["tel-496"] ?? ''));
    $company = strip_tags(trim($_POST["company-name"] ?? ''));
    $location = strip_tags(trim($_POST["menu-278"] ?? ''));
    $address = strip_tags(trim($_POST["your-address"] ?? ''));

    if (!$name || !$email || !$phone || !$company || !$location || !$address) {
        echo json_encode(["success" => false, "message" => "Please fill in all fields."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email format."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'dvpldigitalmarketing@gmail.com';
        $mail->Password = 'wlon yvqb tome rrvh'; // App Password only
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email headers
        $mail->setFrom('dvpldigitalmarketing@gmail.com', 'DVPL SME Broadband Form');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('laxmareddy.j@dvpl.org');
        $mail->addAddress('rpreethikareddy@dvpl.org');

        // Email content
        $mail->isHTML(false);
        $mail->Subject = "New SME Broadband Submission from $name";
        $mail->Body = <<<EOT
Name: $name
Email: $email
Phone: $phone
Company Name: $company
Location: $location
Address: $address
EOT;

        $mail->send();
        echo json_encode(["success" => true, "message" => "Thank you, $name! We'll contact you shortly."]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
