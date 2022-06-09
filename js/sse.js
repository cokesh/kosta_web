window.addEventListener('load', function() {
    var source = new EventSource("../demo_sse.jsp");
    // source.addEventListener('message', function(){});
    source.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
    }
});