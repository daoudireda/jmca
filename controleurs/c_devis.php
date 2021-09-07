<?php 

$subjectPrefix = '[Contact via website]';
$emailTo = 'monstage555@gmail.com';
$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	
	if (isset($_POST['Envoyer'])) {

		# code...
		$MiseEnAvant = stripcslashes(trim($_POST['MiseEnAvant']));
		$types = stripcslashes(trim($_POST['types'])); // a recuperer
		$charte = stripcslashes(trim($_POST['charte'])); 
		$design  = stripcslashes(trim($_POST['design']));
		$attentes =  stripcslashes(trim($_POST['attentes']));
		$références = stripcslashes(trim($_POST['références']));
		$structure = stripcslashes(trim($_POST['structure']));
		$structure1 = stripcslashes(trim($_POST['structure1[]']));
		$deadlines = stripcslashes(trim($_POST['deadlines']));
		$nous = stripcslashes(trim($_POST['nous[]']));
		$nom = stripcslashes(trim($_POST['nom']));
		$prenom = stripcslashes(trim($_POST['prenom']));
		$email = stripcslashes(trim($_POST['mail']));
		$tel  = stripcslashes(trim($_POST['tel']));
		$entreprise = stripcslashes(trim($_POST['entreprise']));
		$pays = stripcslashes(trim($_POST['pays']));
		$adresse = stripcslashes(trim($_POST['adresse']));


		if (!empty($tel) && ($tel[0] != '0' && $tel[0] != '+')) {
            $errors['form-tel2'] = 'Mauvais format du numéro de téléphone.';
        }
           if (!empty($errors)) {
            $data['form-success'] = false;
            $data['form-errors'] = $errors;
            foreach ($errors as $value) {
                echo $value . '<br />';
            }
        } else {
            $subject = "$subjectPrefix $subject";
            $body = '
            		<strong>Que voulez vous mettre en avant ? :</strong> <br>' . $MiseEnAvant . '<br />
            		<strong>Que type de site voulez vous ? :</strong><br>' . $types . '<br />
            		<strong>Disposez-vous d’une charte graphique ?:</strong><br>' . $charte . '<br />
            		<strong>Avez-vous des prérequis pour le design ? :</strong><br>' . $design . '<br />
            		<strong>Quels sont vos attentes en terme de Design ? :</strong><br>' . $attentes . '<br />
            		<strong>Avez-vous des références de sites similaires à ce que vous souhaitez?:</strong><br>' . $références . '<br />
            		<strong>Quel type de structure êtes vous ? :</strong><br>' . $structure . '<br />
            		<strong>Quelle est vôtre cible clientèle ? : </strong> <br>' . $structure1 . '<br />
            		<strong>Quelles sont vos deadlines pour ce projet ? :</strong> <br>' . $deadlines . '<br/>
            		<strong>comment avez-vous entendus parler de nous ? :</strong><br>' . $nous . '<br />
					<strong>Nom: </strong>' . $nom . '<br />
					<strong>Prenom: </strong>' . $nom . '<br />
					<strong>Email: </strong>' . $email . '<br />
					<strong>Telephone: </strong>' . nl2br($tel) . '<br />
					<strong>Entreprise: </strong>' . $entreprise . '<br />
					<strong>pays: </strong>' . $pays . '<br />
					<strong>Adresse: </strong>' . $adresse . '<br />
				';
            $headers = "MIME-Version: 1.1" . PHP_EOL;
            $headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
            $headers .= "Content-Transfer-Encoding: 8bit" . PHP_EOL;
            $headers .= "Date: " . date('r', $_SERVER['REQUEST_TIME']) . PHP_EOL;
            $headers .= "Message-ID: <" . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>' . PHP_EOL;
            $headers .= "From: " . "=?UTF-8?B?" . base64_encode($entreprise) . "?=" . "<$email>" . PHP_EOL;
            $headers .= "Return-Path: $emailTo" . PHP_EOL;
            $headers .= "Reply-To: $email" . PHP_EOL;
            $headers .= "X-Mailer: PHP/" . phpversion() . PHP_EOL;
            $headers .= "X-Originating-IP: " . $_SERVER['SERVER_ADDR'] . PHP_EOL;

           if (mail($emailTo, "=?utf-8?B?" . base64_encode($subject) . "?=", $body, $headers)){
                echo "Votre message a bien été envoyé";
            } else {
                echo "Une erreur s'est produite votre mail n'a pas été envoyé. veuillez réessayer utlérieurement";
            }
            //  $data['form-success'] = true;
            //$data['form-message'] = 'Votre message a bien été envoyyé!';
            //////////////////////////
            /**
             * } else {
             * echo "Nous avons détecté que vous êtes un robot :/"
             * }**/
        }


	}/*elseif ($isset($_POST['site_marchand'] and $_POST['Envoyer'] )) {
		# code...
	}*/



	# code...
}





 ?>