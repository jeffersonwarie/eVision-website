<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);
    
    // hCaptcha secret key (replace with your secret key)
    $secret_key = 'ES_85287341ada84cb8b20521afa1c6a701';
    
    // Verify the hCaptcha response
    $hcaptcha_response = $_POST['h-captcha-response'];
    $verify_url = 'https://hcaptcha.com/siteverify';
    
    // Prepare POST request to verify hCaptcha
    $data = array(
        'secret' => $secret_key,
        'response' => $hcaptcha_response,
        'remoteip' => $_SERVER['REMOTE_ADDR']
    );
    
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    
    $context  = stream_context_create($options);
    $verify_response = file_get_contents($verify_url, false, $context);
    $response_data = json_decode($verify_response);
    
    // Validate form data and hCaptcha
    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Invalid input
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    if (!$response_data->success) {
        // hCaptcha failed
        http_response_code(400);
        echo "Captcha verification failed. Please try again.";
        exit;
    }
    
    // Recipient email
    $recipient = "info@epidemicvision.com";
    
    // Email content
    $email_subject = "New contact from $name: $subject";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Email headers
    $email_headers = "From: $name <$email>";
    
    // Attempt to send the email
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        // Email sent successfully
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        // Email sending failed
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission. Please try again.";
}
?>
