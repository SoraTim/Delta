$(document).ready(function () {
    $('#blocksArea').bind("DOMSubtreeModified", function () {
        // С этой штукой надо разобраться. Это привязка к исходному коду. Нужны будут переносы, подсветка синтаксиса
        var str = document.getElementById("blocksArea").innerHTML;
        while (str.charAt(0) == ' ' || str.charAt(0) == '\n')
            str = str.substr(1);
        document.getElementById("codeEditorArea").value = str;
    });
    $("html").click(function (e) { //спрятать контекстное меню
        if (!$(e.target).is('#picChangeSpan')) {
            var elem = document.getElementsByClassName("ownContextMenu")[0];
            if (elem != null)
                document.getElementsByTagName("body")[0].removeChild(elem);
        }
    });
    if (document.addEventListener) { //собственное контесктное меню на динамических элементах
        document.addEventListener('contextmenu', function (e) {
            if ($(e.target).is(".dynamicElement")) {
                e.target.id = 'contexted';
                var content = "<img src='refresh.png'><span id='refreshPageSpan'>Обновить</span><br><img src='addid.png'><span id='addId'>Назначить id</span><br><img src='class.png'><span id='changeClassSpan'>Изменить класс</span><br><img src='event.png'><span id='beginJS'>Присобачить событие</span>";
                if (e.target.tagName == "IMG")
                    content += "<br><span id='picChangeSpan'>Изменить изображение</span>";
                var node = document.createElement("div");
                node.innerHTML = content;
                node.className = "ownContextMenu";
                node.style.left = e.clientX + "px";
                node.style.top = e.clientY + "px";
                document.getElementsByTagName("body")[0].appendChild(node);
                e.preventDefault();
            }
        }, false);

    } else {
        document.attachEvent('oncontextmenu', function () {
            alert("You've tried to open context menu");
            window.event.returnValue = false;
        });
    }
    $(document).on('click', '#picChangeSpan', function (e) {
        $("#picHolder").trigger('click');
    });
    //$(document).on('change', '#picHolder', function (e) {
    //    console.log(e);
    //});
    $("#picHolder").change(function () {
        document.getElementById("contexted").src = this.value;
    });
    $(document).on('click', '#refreshPageSpan', function () {
        location.reload();
    });
    //добавление эелементов на панели кода и предварительного вида
    $("#leftSideBar span").click(function () {
        $("#blocksArea").show();
        $("#codeEditorArea").hide();
        var str = "";
        var text = this.innerHTML.substring(4, this.innerHTML.indexOf("&gt;")); //получить тег элемента, находящийся между "<" и ">"
        if (text.indexOf("\"") <= 0) //если не тег input
            node = document.createElement(text);
        switch (text) {
            case "p":
                node.className = "sampleParagraph dynamicElement";
                node.innerHTML = "paragraph";
                str = "<p class=\"samplePargraph dynamicElement\">paragraph</p>\n";
                break;
            case "img":
                node.className = "dynamicElement";
                node.src = "sampleImg.jpg";
                str = "<img src=\"sampleImg.jpg\" class=\"dynamicElement\">\n";
                break;
            case "div":
                node.className = "sampleBlock dynamicElement";
                node.innerHTML = "DIV";
                str = "<div class=\"sampleBlock dynamicElement\">DIV</div>\n";
                break;
            case "span":
                node.innerHTML = "span";
                node.className = "dynamicElement";
                str = "<span class=\"dynamicElement\">span</span>\n";
                break;
            case "input type=\"text\"":
                node.className = "dynamicElement";
                node = document.createElement("input");
                str = "<input type=text class=\"dynamicElement\">\n";
                break;
            case "input type=\"password\"":
                node = document.createElement("input");
                node.className = "dynamicElement";
                node.type = "password";
                str = "<input type=\"password\" class=\"dynamicElement\">\n";
                break;
        }
        var myNode = document.getElementById("blocksArea");
        $(node).draggable();
        if (document.getElementById("clear").style.display == 'none')
            $("#clear").show();
        myNode.appendChild(node); //вставка элемента в панель предварительного просмотра элемнтов
    });
    //Очистить предварительный выбор элементов, очистить панель кода
    $("#clear").click(function () {
        var myNode = document.getElementById("blocksArea");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        document.getElementById("codeEditorArea").innerHTML = document.getElementById("blocksArea").innerHTML;
        $("#clear").hide();
    })
    // Спрятать предварительный вид элементов, открыть панель кода
    $('#code').click(function () {
        document.getElementById("blocksArea").style.display = "none";
        var node = document.getElementById("codeEditorArea");
        node.style.height = ($("#pageHolder").height() - 5) + "px";
        node.style.width = ($("#pageHolder").width() - 5) + "px";
        node.style.display = "block";
    });
    //Спрятать панель кода, открыть предварительный вид элементов
    $("#viewTab").click(function () {
        document.getElementById("blocksArea").style.display = "block";
        document.getElementById("codeEditorArea").style.display = "none";
    });
});