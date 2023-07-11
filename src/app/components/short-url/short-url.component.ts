import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  url:string = '';
  urlProcessed:string = '';
  isUrlProcessed:boolean = false;
  processingUrl:boolean = false;

  errorMessage:string = '';

  constructor(private _shortUrlService: ShortUrlService){}

  handleCreateUrl(){
    const urlTester = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    
    if(!urlTester.test(this.url)){
      this.showErrorMessage("Plesae enter a valid url");
      return;
    }
    
    this.isUrlProcessed = false;
    this.processingUrl = true;

    this._shortUrlService.getUrlProcessed(this.url).subscribe((data)=>{
      this.urlProcessed = data.link;
      this.isUrlProcessed = true;
      this.processingUrl = false;
    })
  }

  showErrorMessage(message:string, hideTime=3000){
    this.errorMessage = message;
    setTimeout(()=>{
      this.errorMessage = ''
    }, hideTime)
  }

  hideErrorMessage(){
    this.errorMessage = '';
  }

  ngOnDestroy(){

  }
}
