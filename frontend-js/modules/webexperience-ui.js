// import { Scene } from "three"

export class UImodule  {
    
    constructor() {
        // alert("executed from experience ui")

        this.packtype = "hello"
        this.template = "yo"
        $('.owl-carousel').owlCarousel({
            center:true,
            loop: false,
            margin: -70,
            nav: true,
            // autoplay : false,
            // autoplayTimeout: 5500,
            // autoplayHoverPause : false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }

    untapKisses(){
        var Image_Id = document.getElementById('hoverhershey');
        Image_Id.src='/images/kisses.png'

        // Image_Id.src = "/images/kisses.png"

        // if (Image_Id.src.match("/images/hershey.png")) {
        //     Image_Id.src = "/images/kisses.png"
            

        // }

    }
  
    changeKissesPack() {
        var Image_Id = document.getElementById('hoverChange');
    //    this.untapKisses();
        if (Image_Id.src.match("/images/kisses.png")) {
            Image_Id.src = "/images/tapkisses.png"
            this.packtype = "kisses"
            console.log("module" +  this.packtype)
            
        }
        else {
            Image_Id.src = "/images/kisses.png";
            this.packtype = ""
        }
       
    }
    // ------------------

    // --------------------------
  changeHersheyPack() {
        var Image_Id = document.getElementById('hoverhershey');
        // this.untapKisses();
        if (Image_Id.src.match("/images/hershey.png")) {
            Image_Id.src = "/images/taphershey.png"
            console.log("chocolatebar")
            this.packtype = "chocolatebar"
            console.log("module" +  this.packtype)

        }
        else {
            Image_Id.src = "/images/hershey.png";
            this.packtype = ""
        }
    }
    changeExoticPack() {
        var Image_Id = document.getElementById('hoverexotic');
        if (Image_Id.src.match("/images/exotic.png")) {
            Image_Id.src = "/images/tapexotic.png"
            console.log("exotic")
            this.packtype = "exotic"
            console.log("module" +  this.packtype)
        }
        else {
            Image_Id.src = "/images/exotic.png";
            this.packtype = ""
        }
    }

    changeLongDistance() {
        var imageId = document.getElementById('distancewali')

        if(imageId.src.match('/images/distancewali.png')) {
            imageId.src = '/images/tap-distancewali.png'
            this.template = "long-distance"
        } else {
            imageId.src = '/images/distancewali.png'
            this.template = ""
        }
        console.log(this.template)
    }

    changeFriendWali() {
        var imageId = document.getElementById('friendwali')

        if(imageId.src.match('/images/friendwali.png')) {
            imageId.src = '/images/tap-friendwali.png'
            this.template = 'friend-wali'
        } else {
            imageId.src = '/images/friendwali.png'
            this.template = ""
        }
        console.log(this.template)
    }

    changeFamilyWali() {
        var imageId = document.getElementById('familywali')

        if(imageId.src.match('/images/familywali.png')) {
            imageId.src = '/images/tap-familywali.png'
            this.template = 'family-wali'
        } else {
            imageId.src = '/images/familywali.png'
            this.template = ''
        }
        console.log(this.template)
    }

    
}

