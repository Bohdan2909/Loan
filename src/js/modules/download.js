export default class DownLoad {
  constructor(triggers){
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downLoadItem(path){
    const elem = document.createElement('a');

    elem.setAttribute('href', path);
    elem.setAttribute('download', 'nice-to-picture');
    
    elem.style.display = 'none';
    document.body.append(elem);

    elem.click();

    document.body.remove(elem);
  }

  init(){
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.downLoadItem(this.path);
      });
    });
  }
}