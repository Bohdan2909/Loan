export default class VideoPlayer {
  constructor(triggers, overlay){
    this.buttonos = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
  play(){
    this.buttonos.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(btn);
      });
    });
  }
}