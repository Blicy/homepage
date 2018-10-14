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

/* ContentFiller */
var friendsList = [
        ["Bokutake", "https://bokutake.com", "https://cn.gravatar.com/avatar/e57379eaaadeba99e175d5173eb6ba0d"],
        ["MoeDog", "https://prprpr.love", "https://cn.gravatar.com/avatar/5e6892e999ca8c85a358d21164167f38"],
        ["DIYgod", "https://diygod.me", "https://cn.gravatar.com/avatar/2c0e7571f32704cc893de555a669865b"]
    ];
for (var i = 0; i < friendsList.length; i++) {
    document.getElementById('friendsList').innerHTML += '<a href="'+friendsList[i][1]+'" target="_blank" data-balloon="'+friendsList[i][0]+'"><img src="'+friendsList[i][2]+'" /></a><br />';
}

var linkList = [
    ["个人博客", "https://blog.lcy.moe"],
    ["API服务器", "https://api.lcy.moe"],
    ["MC服务器", "https://mc.lcy.moe"],
    ["静态博客", "https://puq.moe"]
];
for (var i = 0; i < linkList.length; i++) {
    document.getElementById('linkList').innerHTML += '<a href="'+linkList[i][1]+'" target="_blank" class="siteLink">'+linkList[i][0]+'</a><br />';
}

var projList = [
    ["一只Hexo主题", "https://github.com/bimOvO/Kratos-Rebirth"],
    ["这只个人主页", "https://github.com/bimOvO/homepage"]
];
for (var i = 0; i < projList.length; i++) {
    document.getElementById('projList').innerHTML += '<a href="'+projList[i][1]+'" target="_blank" class="siteLink">'+projList[i][0]+'</a><br />';
}

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