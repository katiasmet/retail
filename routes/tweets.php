<?php

//401 unauthorized
//403 forbidden

use Abraham\TwitterOAuth\TwitterOAuth;

$base = '/api/tweets';

$oauth_token = "1608412375-uhvmddZ0CcIo5r3iiH4BUQBMh2S9OUfW6aNYWHb";
$oauth_token_secret = "2m2AhbyqM1IaVM8ZkRokZoo14NG4rvY6UQTCO25LY7LH4";

function getConnectionWithAccessToken($oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth("jXQtl6fqvZISXTLbvvxjzSRox", "DgYxuGy3pD6BKcQmD8ofOfEWvLDkjbZEv4RCjJN0zjUmNDmjwi", $oauth_token, $oauth_token_secret);
  return $connection;
}

//tweets ophalen met bepaalde #
//tweets ophalen van bepaalde user

$app->get($base, function($request, $response, $args){

  $query = $request->getQueryParams();

  $connection = getConnectionWithAccessToken("1608412375-uhvmddZ0CcIo5r3iiH4BUQBMh2S9OUfW6aNYWHb",  "2m2AhbyqM1IaVM8ZkRokZoo14NG4rvY6UQTCO25LY7LH4");
  $data = $connection->get("search/tweets", ["q" => $query['search'], "count" => $query['count']]);

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
