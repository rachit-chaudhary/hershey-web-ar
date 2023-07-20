$('.owl-carousel').owlCarousel({
    loop:false,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function changeKissesPack() {
    var Image_Id = document.getElementById('hoverChange');
    if (Image_Id.src.match("/images/kisses.png")) {
        Image_Id.src = "/images/tapkisses.png"
    }
    else {
        Image_Id.src = "/images/kisses.png";
    }
}
function changeHersheyPack() {
    var Image_Id = document.getElementById('hoverhershey');
    if (Image_Id.src.match("/images/hershey.png")) {
        Image_Id.src = "/images/taphershey.png"
    }
    else {
        Image_Id.src = "/images//hershey.png";
    }
}
function changeExoticPack() {
    var Image_Id = document.getElementById('hoverexotic');
    if (Image_Id.src.match("/images/exotic.png")) {
        Image_Id.src = "/images/tapexotic.png"
    }
    else {
        Image_Id.src = "/images/exotic.png";
    }
}