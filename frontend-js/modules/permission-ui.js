export default class ZAPPPermissionUI {
    // 1. Select DOM elements, and keep track of useful events
    constructor()  {
        this.ZAPPPermissionUI = document.querySelector(".zappar-permission-request")
        this.events()
    }

    // 2. Events
    events() {
        this.ZAPPPermissionUI.addEventListener(mousemove, (e) => {
            this.openLogo()
        })
    }

    // 3. Methods
    openLogo() {
        alert("openlogo just ran")
    }

}