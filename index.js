var dispDiv = document.getElementById("display");
    st1 = document.getElementById("st1");
    st2 = document.getElementById("st2");
    bg = document.getElementById("bgcolor")
    stInp = document.getElementById("stickerUrl");
    stC = document.getElementById("cursor");
    stickerHeight = document.getElementById("stickerHeight");
    imgSrc = null;
    stH = 100;
bg.addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    changeImage(this);
});

st2.addEventListener("click", function(){
    changeImage(this);
});

dispDiv.addEventListener("click", function(ev){
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    newImg.style.height = stH + "px";
    dispDiv.appendChild(newImg);
    
    console.log(ev.pageX, ev.pageY);
    newImg.style.left = ev.pageX + "px";
    newImg.style.top = ev.pageY + "px";
});

stInp.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInp.value = "";
        newSticker.addEventListener("click", function(){
            changeImage(this);
        });
    }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY + "px";
    stC.style.left = ev.pageX + "px";
});

    
function changeImage(el) {
    imgSrc = el.src;
    stC.src = imgSrc;
};        
stickerHeight.addEventListener("change", function(){    
    stH = this.value;
	if (ev.keyCode == 13){
		stH = this.value;
	}
});       