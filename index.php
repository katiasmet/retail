<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

define('DS', DIRECTORY_SEPARATOR);
define('WWW_ROOT', __DIR__ . DS);

require 'vendor/autoload.php';

use Slim\App;

$app = new App(['settings' => ['displayErrorDetails' => true]]);

/*use MetzWeb\Instagram\Instagram;

$instagram = new Instagram(array(
    'apiKey'      => '616440ac6f1141f2810ea86b843e70cf',
    'apiSecret'   => '7674391c41ef4fe7964e1ae6eecf2f62',
    'apiCallback' => 'http://127.0.0.1/'
));
echo "<a href='{$instagram->getLoginUrl()}'>Login with Instagram</a>";

$code = $_GET['code'];
$data = $instagram->getOAuthToken($code);

echo 'Your username is: ' . $data->user->username;*/

require_once 'routes/tweets.php';
//require_once 'routes/instagram_photos.php';

$app->get('/{anything:.*}', function ($request, $response, $args) {
  $view = new \Slim\Views\PhpRenderer('view/');
  $basePath = $request->getUri()->getBasePath();
  return $view->render($response, 'home.php', ['basePath' => $basePath]);
});

$app->run();
