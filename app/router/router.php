<?php

include_once "./app/controller/user.php";


class Router
{

    private $user;

    public function __construct(){
        $this->user = new User();

    }

    public function router()
    {

        if (isset($_GET["mode"])) {
                switch ($_GET["mode"]) {
                    case "cargar-chat":
                    $this->user->cargarChat($_GET["username"]);
                    break;
                    
                    default:
                        header("Location:index.php");
                        break;
                }
            
        } else if (isset($_POST["mode"])) {
            switch ($_POST["mode"]) {

                case "cargar-mensajes":
                    $this->user->cargarMensajes();
                    break;
                    case "enviar-mensaje":
                    $this->user->enviarMensaje($_POST["msj"]);
                    break;

            default:
                    header("Location:index.php");
                    break;
            }
        } else {
         $this->user->cargarInicio();
        }
    }


}

?>