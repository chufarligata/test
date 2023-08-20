<?php
require 'bot_check.php';

function get_user_agent() {
    return $_SERVER['HTTP_USER_AGENT'];
}

function redirect_to_page($url) {
    header('Location: ' . $url);
    exit();
}

$user_agent = get_user_agent();
$is_google_bot = is_google_bot($user_agent);

$white_page = 'home.php';
$affiliate_offer_page = 'https://8a470nte28z6esfa1fb13hxe2v.hop.clickbank.net';

if($is_google_bot) {
    redirect_to_page($white_page);
} else {
    echo '<script>
        setTimeout(function(){
            window.location.href = "' . $affiliate_offer_page . '";
        }, 4000);
    </script>';
}
?>
