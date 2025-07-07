<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and validate input
    $name     = htmlspecialchars(trim($_POST["your-name"] ?? ''));
    $email    = filter_var(trim($_POST["your-email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone    = htmlspecialchars(trim($_POST["tel-496"] ?? ''));
    $location = htmlspecialchars(trim($_POST["menu-278"] ?? ''));
    $address  = htmlspecialchars(trim($_POST["your-address"] ?? ''));

    if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$phone || !$location || !$address) {
        echo json_encode(["success" => false, "message" => "Invalid input. Please fill all fields correctly."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'saikoushik166@gmail.com';
        $mail->Password   = 'nanr hrbh cutz ckdf';  
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email setup
        $mail->setFrom('saikoushik166@gmail.com', 'Website Contact Form');
        $mail->addReplyTo($email, $name);

        // Recipients
        $recipients = [
            'laxmareddy.j@dvpl.org',
            'ramesh@dvpl.in',
            'rpreethikareddy@dvpl.org',
            'maddurinaresh3@gmail.com'
        ];
        foreach ($recipients as $to) {
            $mail->addAddress($to);
        }

        // Message content
        $mail->isHTML(false);
        $mail->Subject = "New Leased Line Form Submission - $name";
        $mail->Body = <<<EOD
New Leased Line Form Submission:

Name:     $name
Email:    $email
Phone:    $phone
Location: $location
Address:  $address
EOD;

        $mail->send();
        echo json_encode(["success" => true, "message" => "✅ Thank you, $name. We’ll contact you soon!"]);
    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        echo json_encode(["success" => false, "message" => "❌ Mail send failed. Please try again later."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
