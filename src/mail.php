<?php
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  var_dump($_POST);
  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = 'maksympushkaryov@gmail.com';

    $subject = 'Форма с фабрика-двери';

    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $tel = test_input($_POST["tel"]);
    $type = test_input($_POST["type"]);
    if ($_POST["textarea"]) {
      $textarea = test_input($_POST["textarea"]);
    }

    $message = '
      <html>
          <head>
              <title>Форма с фабрика двери</title>
          </head>
          <body>
              <p>Имя: '.$name.'</p>
              <p>Телефон: '.$tel.'</p>';
      if ($mail) {
        $message .= '<p>Почта: '.$email.'</p>';
      }

      $message .= '<p>Хочет: '.$type.'</p>';

      if ($textarea) {
        $message .= '<p>Сообщение: '.$textarea.'</p>';
      }

      $message .= '</body>
      </html>';

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Фабрика дверей <fabrika-dverei@com.ua>\r\n";

    mail($to, $subject, $message, $headers);

    header('Location: ./thanks.html');
    exit;
  }

  header('Location: ./');
  exit;
?>