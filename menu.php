</head>
<body>
<!-- MENU. BEGIN -->
<div id="Menu">
    <div id="savePage" class="menuDiv">
        Сохранить страницу
    </div>
    <div class="menuDiv">
        Закрыть
    </div>
    <div class="menuDiv" id="clear" style="display: none">
        Очистить
    </div>
    <input type="text" placeholder="Название страницы">
</div>
<!-- MENU. END -->
<div id="Content">
    <div id="curtain">
    </div>
        <div id="leftSideBar">
            <div id="leftSideWrap">
                <div id="elementsList">
                    <span>&lt;p&gt; Параграф</span><br>
                    <span>&lt;table&gt; Таблица</span><br>
                    <span>&lt;img&gt; Изображение</span><br>
                    <span>&lt;div&gt; Блок div</span><br>
                    <span>&lt;span&gt; Блок span</span><br>
                    <span>&lt;input type="text"&gt;</span><br>
                    <span>&lt;input type="password"&gt;</span><br>            
                    <span>&lt;textarea&gt;</span><br>
                    <select>
                        <option value="" disabled selected>
                            &lt;hX&gt;
                         </option>
                        <option>
                            &lt;h1&gt;
                        </option>
                        <option>
                            &lt;h2&gt;
                        </option>
                        <option>
                            &lt;h3&gt;
                        </option>                
                        <option>
                            &lt;h4&gt;
                        </option>
                        <option>
                            &lt;h5&gt;
                        </option>
                        <option>
                            &lt;h6&gt;
                        </option>
                    </select>
                </div>
                <div id="leftBar">
                    <div id="wrapEl"><div style="display: table-cell;vertical-align: middle; text-align: center">Элементы</div></div>
                </div>
            </div>
        </div>
         <div id="pages">
             <div id="pagesWrapper">
                 <div class="pagesBanner">
                     СТРАНИЦЫ
                 </div>
                 <div id="pagesLinks">
                     <ul>
                         <li>newpage.php</li>
                     </ul>
                 </div>
             </div>
         </div>
         <div id="contentOfFolder">
            <div id="pagesWrapper">
                 <div class="pagesBanner">
                     Файлы
                 </div>
                <div class="filesCloud">
                    <?php 
                        $dir =scandir(__DIR__);
                        foreach($dir as $value)
                        if($value!=".."&&$value!="."&&$value!="style.css"&&$value!="script.js"&&$value!=".git"&&$value!="9YkBDt4T.ttf"&&$value!="readme.md"&&$value)
                        if(!preg_match('/.php/i',$value))
                        echo $value."<br>";
                    ?>
                </div>
            </div>
        </div>
        <div id="topMenuBar">
            <div style="position: relative; width: 100%; height: 100%">
                <div id="viewTab" class="singleTab">
                    Вид
                </div>
                <div id="code" class="singleTab">
                    Код
                </div>
                <br>
                <input type='file' style='display:none;' id='picHolder'>
                <div id="pageHolder">
                    <div id="blocksArea">
                    </div>
                    <textarea id="codeEditorArea" style="position:absolute; top: 0; resize: none; display: none"></textarea>
                </div>
            </div>
        </div>