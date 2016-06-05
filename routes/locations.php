<?php

$base = '/api/locations';
$key = "AIzaSyA5n7GDHC8PvCNkfqXjvQvU6-bhD_R5b-s";

$app->get($base, function($request, $response, $args){

  $query = $request->getQueryParams();

  $data = file_get_contents('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins='
   . $query['lat1'] . ','
   . $query['long1'] .
   '&destinations='
   . $query['lat2'] . ','
   . $query['long2']
   . '&mode=walking&key='
   . $key);

  $response->getBody()->write($data);
  return $response->withHeader('Content-Type','application/json');

});
