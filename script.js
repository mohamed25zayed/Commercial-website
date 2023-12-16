
// the shopping element
        var main = document.getElementById("main");
        var small = document.getElementsByClassName("small");
    
        small[0].onclick = function () {
            main.src = small[0].getElementsByTagName("img")[0].src;
        }
        small[1].onclick = function () {
            main.src = small[1].getElementsByTagName("img")[0].src;
        }
        small[2].onclick = function () {
            main.src = small[2].getElementsByTagName("img")[0].src;
        }
        small[3].onclick = function () {
            main.src = small[3].getElementsByTagName("img")[0].src;
        }
        small[4].onclick = function () {
            main.src = small[4].getElementsByTagName("img")[0].src;
        }

        // 