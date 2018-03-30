<?php
require_once "./app/model/model.php";

class UserModel extends Model {


    public function cargarConversacion(){
        $array= array();
        $this->connect();
        $consulta="SELECT id, emisor, mensaje, DATE_FORMAT(hora, '%l:%i %p') as hora from mensajes order by id desc";  
        $consulta=$this->query($consulta);
         while($row = mysqli_fetch_array($consulta)){
            array_unshift($array, $row);
        }
        $this->terminate();
        return $array;

    }

    public function enviarMensaje($username, $mensaje){
        $this->connect();
        $insert = "INSERT INTO mensajes (emisor,mensaje) values ('$username', '$mensaje')";
        $query = $this->query($insert);
        $this->terminate();
        return $query;
    }
}

?>