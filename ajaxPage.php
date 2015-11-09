<?php
    $choice = $_POST['action'];
    $str="";
    switch($choice)
    {
        case "updateFilesList":
        break;
        case "savePage":
        $file = fopen("newpage.php",'w');
        $str=fwrite($file,$_POST['content']);
        /*
        Запись данных, пришедших с script.js в файл
        */
        fclose($file);
        break;
        default:
        break;
    }
    echo $str; //Вывод отладочного сообщения
?>