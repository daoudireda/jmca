<?php
class Contact extends Model{
    var $validate = array(
        'nom' => array(
            'rule' => 'notEmpty',
            'message' => 'Vous devez préciser votre nom'
        ),
        'email' => array(
            'rule' => '([_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9]+)*)',
            'message' => 'Vous devez saisir une adresse email valide'
        ),
        'content' => array(
            'rule' => 'notEmpty',
            'message' => 'Vous devez saisir un texte'
        )
    );
}
?>