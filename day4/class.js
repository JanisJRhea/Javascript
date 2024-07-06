function highlightElements() {
    var elements = document.getElementsByClassName("highlight");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "yellow";
    }
}