<?php

require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

class CreationStepDAO extends DAO {

  public function selectByStoreId($id) {
    $sql = "SELECT rtl_creation_steps.step, rtl_creation_steps.content FROM `rtl_creation_steps` WHERE `store_id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
