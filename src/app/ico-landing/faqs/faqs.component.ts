import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  private active:number = -1;

  ngOnInit() {
  }

  isActive(index:number){
    return index == this.active;
  }

  toggle(index:number){
    if(this.isActive(index)){
      this.active = -1; // close everyone
    }else{
      this.active = index; // toogle only this one
    }
  }
}
