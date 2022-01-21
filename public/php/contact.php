<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('pl', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom($_POST['email']);

	$mail->addAddress('kontakt@husdor.pl');

	$mail->Subject = 'Wiadomość ze strony Husdor.pl';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Imię:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Telefon:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Wiadomość:</strong> '.$_POST['message'].'</p>';
	}
	if(trim(!empty($_POST['consent']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['consent'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz.';
	} else {
		$message = 'Dziękujemy! Formularz został wysłany.';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($response);
?>