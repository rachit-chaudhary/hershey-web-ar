export default class Activate{
    //Select DOM element
    constructor() {
        this.enterBtn = document.querySelector("#enterBtn")
        this.story = document.querySelector(".story")
        this.events()
    }

    // Events
    events() {
        this.enterBtn.addEventListener("click", (e) => {
            e.preventDefault()
            this.scrollDiv()
        })
    }

    //Methods
    alertBox() {
        alert("Alert Box!")
    }
    scrollDiv() {
        window.scrollTo(0, 500);
    }

}