<?php

require_once WWW_ROOT . 'dao' . DS . 'StoreDAO.php';

require_once WWW_ROOT . 'dao' . DS . 'OpeningHourDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'TagDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'CreationStepDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'EventDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'ProductDetailDAO.php';

$base = '/api/stores';

$app->get($base, function($request, $response, $args){

  $storeDAO = new StoreDAO();
  $data = array();
  $query = $request->getQueryParams();

  if(empty($query)) {
    $data = $storeDAO->selectAll();
  } else {
    if(empty($query['current'])) {
      $data = $storeDAO->selectByLocation($query['latitude'], $query['longitude']);
    } else {
      $data = $storeDAO->selectAllExceptCurrent($query['current']);
    }
  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});

$app->get($base.'/{id}', function($request, $response, $args){

  $data = array();
  $query = $request->getQueryParams();

  if(empty($query)) {
    $storeDAO = new StoreDAO();
    $data = $storeDAO->selectById($args['id']);
  }else if(!empty($query['opening_hours'])) {
    $OpeningHourDAO = new OpeningHourDAO();
    $data = $OpeningHourDAO->selectByStoreId($args['id']);
  } else if (!empty($query['tags'])) {
    $TagDAO = new TagDAO();
    $data = $TagDAO->selectByStoreId($args['id']);
  } else if (!empty($query['creation_steps'])) {
    $CreationStepDAO = new CreationStepDAO();
    $data = $CreationStepDAO->selectByStoreId($args['id']);
  } else if(!empty($query['events'])) {
    $EventDAO = new EventDAO();
    $data = $EventDAO->selectByStoreId($args['id']);
  } else if(!empty($query['products'])) {
    $ProductDetailDAO = new ProductDetailDAO();
    $data = $ProductDetailDAO->selectByStoreId($args['id']);
  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
