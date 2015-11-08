$(document).ready(function () {
    $("html").click(function () {
        var elem = document.getElementsByClassName("ownContextMenu")[0];
        if (elem != null)
            document.getElementsByTagName("body")[0].removeChild(elem);
    });
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            if ($(e.target).is(".dynamicElement")) {
                var node = document.createElement("div");
                node.innerHTML = "<img src='refresh.png'><span id='refreshPageSpan'>Refresh</span><br><span id='changeClassSpan'>Change class</span><br><span id='beginJS'>Add an event</span>";
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


    $("#leftSideBar span").click(function () {
        var text = this.innerHTML.substring(4, this.innerHTML.indexOf("&gt;"));
        if (text.indexOf("\"") <= 0)
            node = document.createElement(text);
        switch (text) {
            case "p":
                node.className = "sampleParagraph dynamicElement";
                node.innerHTML = "paragraph";
                break;
            case "img":
                node.className = "dynamicElement";
                node.src = "sampleImg.jpg";
                break;
            case "div":
                node.className = "sampleBlock dynamicElement";
                node.innerHTML = "DIV";
                break;
            case "span":
                node.innerHTML = "span";
                node.className = "dynamicElement";
                break;
            case "input type=\"text\"":
                node.className = "dynamicElement";
                node = document.createElement("input");
                break;
            case "input type=\"password\"":
                node = document.createElement("input");
                node.className = "dynamicElement";
                node.type = "password";
                break;
        }
        var myNode = document.getElementById("pageHolder");
        if (document.getElementById("clear").style.display == 'none')
            $("#clear").show();
        myNode.appendChild(node);
    });
    $("#clear").click(function () {
        var myNode = document.getElementById("pageHolder");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        $("#clear").hide();
    })
    $('#code').click(function () {

        var myNode = document.getElementById("pageHolder");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        var node = document.createElement("textarea");
        node.innerHTML = "<?php\n echo\"Hello world!\";\n?>";
        node.style.resize = "none";
        node.style.height = ($(myNode).height() - 5) + "px";
        node.style.width = ($(myNode).width() - 5) + "px";

        document.getElementById("pageHolder").appendChild(node);
    });
});