import { Component, ViewChild } from '@angular/core';
import { NavController, Content, Platform, normalizeURL } from 'ionic-angular';
import { File } from '@ionic-native/file';
// import { Storage } from '@ionic/storage'; 
// import { IonicStorageModule } from '@ionic/storage';

// const STORAGE_KEY = 'IMAGE_LIST';

@Component({
  selector: 'page-paint',
  templateUrl: 'paint.html'
})
export class PaintPage {
  selectedColor = 'red';
  colorList = [
    'green',
    'red',
    'blue',
    'pink',
    'orange',
    'yellow',
    'grey',
    'black',
    'lime'
  ];
  
  @ViewChild('imagesCanvas') canvas: any;
  canvasElement: any;
  saveX: number;
  saveY: number;
  storedImages = [];
  @ViewChild(Content) content: Content;
  @ViewChild('fixedContainer') fixedContainer: any ;
  
  constructor(public navCtrl: NavController, private plt: Platform, private file: File) { 
  //    this.storage.ready().then(() =>{
  //      this.storage.get(STORAGE_KEY).then(data => {
  //       if(data !== null){
  //         this.storedImages = data;
  //       }
  //      });
  // });
  }
  ionViewDidLoad() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 300;
  }
  // ionViewDidEnter(){
  //   let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
  //   let scroll = this.content.getScrollElement();

  //   itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
  //   scroll.style.marginTop = itemHeight + 'px';
  // }
  
  
  startDraw(ev){
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }
  moved(ev){
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;

    let ctx = this.canvasElement.getContext('2d');

    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.stroke();
    this.saveX = currentX;
    this.saveY = currentY;
  }
  slctedColor(color) {
    this.selectedColor = color;
  }
  
  saveImage(){
    alert('save image');
    var dataUrl = this.canvasElement.toDataURL();
    console.log(dataUrl);

    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // let name = new Date().getTime() + '.png';
    // let path = this.file.dataDirectory;

    // var data = dataUrl.split(',')[1];
    this.getImage(name);
    // // this.storeImages(name);
    // let text = 'image name';
    // this.file.writeFile(path, name, text).then(res =>{
    //   this.getImage(name);
    // }, err =>{
    //   console.log('err:', err);
    // })
  }
  getImage(imageName){
    let path = this.file.dataDirectory + imageName;
    path = normalizeURL(path);
    return path;
  }
  // storeImages(imageName){
  //   let saveObj = { img: imageName};
  //   this.storedImages.push(saveObj);
  //   this.storage.set(STORAGE_KEY, this.storedImages).then(()=>{
  //     setTimeout(() => {
  //       this.content.scrollToBottom();
  //     }, 500);
  //   })
  // }
  b64toBlob(){

  }
  
}
