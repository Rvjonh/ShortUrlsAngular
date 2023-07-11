import { Component } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  url:string = '';
  urlProcessed:string = '';
  isUrlProcessed:boolean = false;

  handleCreateUrl(){
    const urlTester = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    console.log("create url: ", this.url)
    console.log("create url: ", urlTester.test(this.url))
  }
}
