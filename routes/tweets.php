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

$app->get($base, function($request, $response, $args){

  $query = $request->getQueryParams();

  $connection = getConnectionWithAccessToken("1608412375-uhvmddZ0CcIo5r3iiH4BUQBMh2S9OUfW6aNYWHb",  "2m2AhbyqM1IaVM8ZkRokZoo14NG4rvY6UQTCO25LY7LH4");

  if(empty($query)) {
    $data = $response->withStatus(400);
    return $response;
  }

  if(!empty($query['screen_name'])) { //from specific user
    $data = $connection->get("statuses/user_timeline", ["screen_name" => $query['screen_name'], "count" => $query['count'], "exclude_replies" => true]);
  } else {
    $data = $connection->get("search/tweets", ["q" => $query['search'], "count" => $query['count'], "result_type" => $query['result_type']]);
  }

  if(empty($data)){
    $data = $response->withStatus(400);
    return $response;
  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
