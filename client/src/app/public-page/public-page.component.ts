import { Component, OnInit } from '@angular/core';
import { PublicPageService } from './public-page.service'


@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  constructor(
    private publicPageService: PublicPageService) { }

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

}
