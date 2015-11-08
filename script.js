$(document).ready(function () {
    $("#leftSideBar span").click(function () {
        $("#pageHolder").append("<div class='sampleBlock'>DIV</div>")
    });
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