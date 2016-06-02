<?php

//401 unauthorized
//403 forbidden

use MetzWeb\Instagram\Instagram;

$base = '/api/instagram_photos';

$instagram = new Instagram(array(
    'apiKey'      => '616440ac6f1141f2810ea86b843e70cf',
    'apiSecret'   => '7674391c41ef4fe7964e1ae6eecf2f62',
    'apiCallback' => 'http://127.0.0.1/'
));
echo "<a href='{$instagram->getLoginUrl()}'>Login with Instagram</a>";

$code = $_GET['code'];
$data = $instagram->getOAuthToken($code);

echo 'Your username is: ' . $data->user->username;


$app->get($base, function($request, $response, $args){

  $query = $request->getQueryParams();

  $connection = getConnectionWithAccessToken("1608412375-uhvmddZ0CcIo5r3iiH4BUQBMh2S9OUfW6aNYWHb",  "2m2AhbyqM1IaVM8ZkRokZoo14NG4rvY6UQTCO25LY7LH4");
  $data = $connection->get("search/tweets", ["q" => $query['search'], "count" => $query['count']]);

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
