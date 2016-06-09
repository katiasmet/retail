<?php

require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

class CreationStepImageDAO extends DAO {

  public function selectByStoreId($id) {
    $sql = "SELECT  rtl_creation_step_images.step,
                    rtl_creation_step_images.class, 
                    rtl_creation_step_images.img
            FROM `rtl_creation_step_images` WHERE `store_id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
