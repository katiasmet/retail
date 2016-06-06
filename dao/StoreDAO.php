<?php

require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

class StoreDAO extends DAO {

  public function selectAll() {
    $sql = "SELECT * FROM `rtl_stores`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function selectAllExceptCurrent($id) {
    $sql = "SELECT * FROM `rtl_stores` WHERE `id` != :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function selectById($id) {
    $sql = "SELECT rtl_stores.*, rtl_store_details.quote, rtl_store_details.portrait
            FROM `rtl_stores`
            INNER JOIN `rtl_store_details` ON rtl_stores.id = rtl_store_details.store_id
            WHERE rtl_stores.id = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function selectByLocation($latitude, $longitude) {
    $sql = "SELECT rtl_stores.*, rtl_store_details.quote, rtl_store_details.portrait
            FROM `rtl_stores`
            INNER JOIN `rtl_store_details` ON rtl_stores.id = rtl_store_details.store_id
            WHERE rtl_stores.latitude = :latitude
            AND rtl_stores.longitude = :longitude";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':latitude', $latitude);
    $stmt->bindValue(':longitude', $longitude);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

}
