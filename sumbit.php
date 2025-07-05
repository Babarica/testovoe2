<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Метод не разрешён']);
    exit;
}

$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

$errors = [];

if (empty($name)) {
    $errors[] = 'Имя обязательно';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Неверный email';
}

if (empty($message)) {
    $errors[] = 'Сообщение обязательно';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors' => $errors
    ]);
    exit;
}

$data = [
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'date' => date('Y-m-d H:i:s')
];

$file = __DIR__ . '/messages.json';

if (!file_exists($file)) {
    file_put_contents($file, json_encode([$data], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
} else {
    $existing = json_decode(file_get_contents($file), true);
    $existing[] = $data;
    file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}


echo json_encode([
    'success' => true,
    'message' => 'Сообщение успешно отправлено!'
]);
