import { Component, OnInit } from '@angular/core';
import { PublicPageService } from './public-page.service'
import { DomSanitizer } from '@angular/platform-browser';

declare function test(object):any;

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  image: Blob;
  imageToShow: any;

  constructor(
    private publicPageService: PublicPageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    var requestBody = {
      user_id: 'test-id',
      image: file
    }

    const formData = new FormData();
    formData.append('user_id', requestBody.user_id);
    formData.append('image', requestBody.image);

    this.publicPageService.addMeme(formData).subscribe(response => {
      console.log(response)
    }, (error) => {
      console.log('error is ', error)
    });
  }

  onButtonClick($event) {
    this.publicPageService.getMeme('asdasd').subscribe(response => {

     // this.createImageFromBlob(response);

     var imageUrl =  URL.createObjectURL(response);
     let objectURL = 'data:image/jpeg;base64,' + imageUrl;
     this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    }, (error) => {
      console.log('error is ', error)
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      // var imageUrl = test(reader.result);
      let objectURL = 'data:image/jpeg;base64,' + reader.result;
      this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(objectURL);;
    }, false);
 
    console.log(image);
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
