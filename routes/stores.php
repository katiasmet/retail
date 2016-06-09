<?php

require_once WWW_ROOT . 'dao' . DS . 'StoreDAO.php';

require_once WWW_ROOT . 'dao' . DS . 'OpeningHourDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'TagDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'CreationStepDAO.php';
require_once WWW_ROOT . 'dao' . DS . 'CreationStepImageDAO.php';
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

      $TagDAO = new TagDAO();
      $data['tags'] = $TagDAO->selectByStoreId($data['id']);

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

    $TagDAO = new TagDAO();
    $data['tags'] = $TagDAO->selectByStoreId($args['id']);

  }else if(!empty($query['details'])) {

    $OpeningHourDAO = new OpeningHourDAO();
    $data['openingHours'] = $OpeningHourDAO->selectByStoreId($args['id']);

    $EventDAO = new EventDAO();
    $data['events'] = $EventDAO->selectByStoreId($args['id']);

    $ProductDetailDAO = new ProductDetailDAO();
    $data['products'] = $ProductDetailDAO->selectByStoreId($args['id']);

  }  else if (!empty($query['creation_steps'])) {

    $CreationStepDAO = new CreationStepDAO();
    $data['steps'] = $CreationStepDAO->selectByStoreId($args['id']);

    $CreationStepImageDAO = new CreationStepImageDAO();
    $data['images'] = $CreationStepImageDAO->selectByStoreId($args['id']);

  }

  $response->getBody()->write(json_encode($data));
  return $response->withHeader('Content-Type','application/json');

});
