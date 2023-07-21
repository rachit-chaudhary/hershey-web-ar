
export default class UImodule {
    constructor() {
        alert("executed from experience ui")


        let packtype
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 1,
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
        
        function changeKissesPack() {
            var Image_Id = document.getElementById('hoverChange');
            if (Image_Id.src.match("/images/kisses.png")) {
                Image_Id.src = "/images/tapkisses.png"
                console.log("kisses")
                packtype = "kisses"

            }
            else {
                Image_Id.src = "/images/kisses.png";
                packtype = ""
            }
        }
        function changeHersheyPack() {
            var Image_Id = document.getElementById('hoverhershey');
            if (Image_Id.src.match("/images/hershey.png")) {
                Image_Id.src = "/images/taphershey.png"
                console.log("chocolatebar")
                packtype = "chocolatebar"

            }
            else {
                Image_Id.src = "/images//hershey.png";
                packtype = ""
            }
        }
        function changeExoticPack() {
            var Image_Id = document.getElementById('hoverexotic');
            if (Image_Id.src.match("/images/exotic.png")) {
                Image_Id.src = "/images/tapexotic.png"
                console.log("exotic")
                packtype = "exotic"
            }
            else {
                Image_Id.src = "/images/exotic.png";
                packtype = ""
            }
        }

        // const sendgift = document.getElementById("sendgift")
        sendgift.onclick = () => {
            firstscreen.style.display = "none"
            secondscreen.style.display = "block"
        }
        sendthankyou.onclick = () => {
            firstscreen.style.display = "none"
            secondscreen.style.display = "block"
        }
        hoverChange.onclick=()=>{
            changeKissesPack()
        }
        hoverhershey.onclick=()=>{
            changeHersheyPack()
        }
        hoverexotic.onclick=()=>{
            changeExoticPack()
        }
    }
}
