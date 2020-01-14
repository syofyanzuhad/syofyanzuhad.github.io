<?php

if (isset($_POST['kirim'])) {
    $to = "sofyanzuhad2@gmail.com";
    $subject = "YOU'VE NEW REPORT !";
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $pesan = $nama." Mengirim anda pesan. "."\n"."Pesan : "."\n". $_POST['pesan'];
    
    if (mail($to, $subject, $pesan)) {
        echo "" ?> <div class="alert alert-success fixed-top text-center" role="alert">EMAIL SENDED ! Thank You !</div> <?php
    }  else {
      echo "" ?> <div class="alert alert-danger  text-center" role="alert">EMAIL FAILED ! (correct your email !)</div> <?php
    }
}