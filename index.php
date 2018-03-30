<?php

include_once "./app/router/router.php";
session_start();
$router = new Router();
$router->router();

?>