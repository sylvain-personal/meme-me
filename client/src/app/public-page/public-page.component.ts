import { Component, OnInit } from '@angular/core';
import { MemeService } from './../services/meme.service'


@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  constructor(private memeService: MemeService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    
    this.memeService.getMemes().subscribe((response)=>{
      console.log('response is ', response)
    },(error) => {
      console.log('error is ', error)
    })
    
  }

}
