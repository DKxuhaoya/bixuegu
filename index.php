<?php


// include "/views/dashboard/index.html";
// var_dump($_SERVER);
$pathinfo="/dashboard/index";
// $pathinfo = $_SERVER["PATH_INFO"];
if (array_key_exists("PATH_INFO", $_SERVER)) {
	$pathinfo = $_SERVER["PATH_INFO"];
}
// echo substr($pathinfo, 1);
   
$pathArr= explode("/",substr($pathinfo, 1));
if (count($pathArr) ==2) {
	
	 include "/views/".$pathArr[0]."/".$pathArr[1].".html";

}else{
	include "/views/dashboard/".$pathArr[0].".html";
}

?>