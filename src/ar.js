import name1 from "./index"
// import {characterMoveComponent, characterRecenterComponent} from './component'

alert(name1)

// AFRAME.registerComponent('character-move', characterMoveComponent)
// AFRAME.registerComponent('character-recenter', characterRecenterComponent)
AFRAME.registerComponent('no-cull', {
  init() {
    console.log("running wooh !!!")
    this.el.addEventListener('model-loaded', () => {
      this.el.object3D.traverse(obj => obj.frustumCulled = false)
    })
  },
})