/* Event */
    $('.button').on("click", function(){
        if (this.id == "btn-close") {
            $('#logo').css("opacity", "1");
            $('#buttons').css("opacity", "1");
            $('#content').css("opacity", "0");
            setTimeout(function(){
                $('#content').css("display", "none");
            }, 300);
            
        } else {
            $('#logo').css("opacity", "0");
            $('#buttons').css("opacity", "0");
            $('#content').css("display", "block");
            setTimeout(function(){
                $('#content').css("opacity", "1");
            }, 300);
        }
    });

    var buttons = document.getElementsByClassName("textBtn"), hiddenText = document.getElementsByClassName("hiddenText");
    // document.getElementById('buttonScript').innerHTML = 'var buttons = document.getElementsByClassName("textBtn"), hiddenText = document.getElementsByClassName("hiddenText");';
    // for (var i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", function(){document.getElementById("text").innerHTML = hiddenText[i].innerHTML;});
    // }

    buttons[0].addEventListener("click", function(){document.getElementById("text").innerHTML = hiddenText[0].innerHTML;});
    buttons[1].addEventListener("click", function(){document.getElementById("text").innerHTML = hiddenText[1].innerHTML;});
    buttons[2].addEventListener("click", function(){document.getElementById("text").innerHTML = hiddenText[2].innerHTML;});
    buttons[3].addEventListener("click", function(){document.getElementById("text").innerHTML = hiddenText[3].innerHTML;});

/*  Avatar-Shake */ /* Great thanks to @DIYgod (https://diygod.me)! */
$('#avatar').on("mouseover", function() {this.classList.add("animated", "tada")});
$('#avatar').on("mouseout", function() {this.classList.remove("animated", "tada")});

/* Final loading */
window.onload = function() {
    // loadlive2d("live2d", "./sources/live2d/HyNK-v2/HyNK.model.json");
    const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Beautiful Now',
            artist: 'Zedd / Jon Bellion',
            url: 'https://cdn.jsdelivr.net/gh/bimOvO/homepage@v1.1/sources/audio/beautiful-now.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/bimOvO/homepage@v1.1/sources/audio/beautiful-now.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/bimOvO/homepage@v1.1/sources/audio/beautiful-now.lrc'
        }]
    });
    console.log("欢迎来到冰喵新世界~");
}