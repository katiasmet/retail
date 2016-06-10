<?php

require_once WWW_ROOT . 'dao' . DS . 'DAO.php';

class TagDAO extends DAO {

  public function selectByStoreId($id) {
    $sql = "SELECT rtl_tags.tag FROM `rtl_store_tags`
            INNER JOIN `rtl_tags` ON rtl_store_tags.tag_id = rtl_tags.id
            WHERE `store_id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

}
