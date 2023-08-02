// import { Scene } from "three"

export class UImodule  {
    
    constructor() {
        // alert("executed from experience ui")

        this.packtype = "hello"
        $('.owl-carousel').owlCarousel({
            center:true,
            loop: false,
            margin: -70,
            nav: true,
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
            console.log("kisses")
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

    
}

