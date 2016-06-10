<?php

require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

class EventDAO extends DAO {

  public function selectByStoreId($id) {
    $sql = "SELECT * FROM `rtl_events` WHERE `store_id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
