<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode([
            "success" => false,
            "message" => "No input data received"
        ]);
        exit;
    }

    $name = $data["name"] ?? "";
    $email = $data["email"] ?? "";
    $subject = $data["subject"] ?? "";
    $message = $data["message"] ?? "";

    $to = "er.swapnil1315@gmail.com";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "
    <h2>New Contact Message</h2>
    <p><b>Name:</b> $name</p>
    <p><b>Email:</b> $email</p>
    <p><b>Subject:</b> $subject</p>
    <p><b>Message:</b> $message</p>
    ";

    $mailSent = mail($to, $subject, $body, $headers);

    echo json_encode([
        "success" => $mailSent,
        "message" => $mailSent
            ? "Message sent successfully"
            : "Mail failed"
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>