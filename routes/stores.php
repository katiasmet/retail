<?php

require_once WWW_ROOT . 'dao' . DS . 'StoreDAO.php';

require_once WWW_ROOT . 'dao' . DS . 'OpeningHourDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'TagDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'CreationStepDAO.php';

$base = '/api/stores';

$app->get($base, function($request, $response, $args){

  $storeDAO = new StoreDAO();
  $data = array();
  $query = $request->getQueryParams();

  if($query['latitude'] && $query['longitude']) {
    $data = $storeDAO->selectByLocation($query['latitude'], $query['longitude']);
  } else if($query['current']) {
    $data = $storeDAO->selectAllExceptCurrent($query['current']);
  } else {
    $data = $storeDAO->selectAll();
  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});

$app->get($base.'/{id}', function($request, $response, $args){

  $data = array();
  $query = $request->getQueryParams();

  if($query['opening_hours']) {
    $OpeningHourDAO = new OpeningHourDAO();
    $data = $OpeningHourDAO->selectByStoreId($args['id']);
  } else if ($query['tags']) {
    $TagDAO = new TagDAO();
    $data = $TagDAO->selectByStoreId($args['id']);
  } else if ($query['creation_steps']) {
    $CreationStepDAO = new CreationStepDAO();
    $data = $CreationStepDAO->selectByStoreId($args['id']);
  } else {
    $storeDAO = new StoreDAO();
    $data = $storeDAO->selectById($args['id']);
  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
