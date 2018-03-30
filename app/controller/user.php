<?php

include_once "./app/controller/controller.php";
include_once "./app/model/user.php";

class User extends Controller {

    private $userModel;
    private $view;


    public function __construct() {
        $this->userModel = new UserModel();
        $this->view = $this->getTemplate("./app/views/inicio.html");
    }


    public function cargarInicio() {
        $this->showView($this->view);
    }

    public function cargarChat($username) {
        $chat= $this->getTemplate("./app/views/chat.html");
        $chat = $this->renderView($chat, "{{USUARIO}}",$username);
        $_SESSION["username"]=$username;
        $this->showView($chat);
    }

    public function cargarMensajes(){
        $mensajes=$this->userModel->cargarConversacion();
        echo json_encode($mensajes);
    }

    public function enviarMensaje($msj){
        $user=$_SESSION["username"];
        $this->userModel->enviarMensaje($user, $msj);
    }


}

?>