<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('pl', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom('kontakt@husdor.pl');

	$mail->addAddress('kontakt@husdor.pl');

	$mail->Subject = 'Zapytanie o produkt - Husdor.pl';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Imię:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Telefon:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['product']))){
		$body.='<p><strong>Produkt:</strong> '.$_POST['product'].'</p>';
	}
	if(trim(!empty($_POST['consent']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['consent'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz.';
	} else {
		$message = 'Dziękujemy! Zapytanie zostało wysłane.';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	header('Access-Control-Allow-Origin: *');
	echo json_encode($response);
?>