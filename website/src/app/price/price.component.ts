import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
 
  isMrt=true;
  isRkt=true;
  isRentgen=true;


  constructor() { }

  ngOnInit(): void 
  {
     
  }

  Mrt()
  {
    this.isMrt=true;
    this.isRkt=false;
    this.isRentgen=false;
  }

  Rkt()
  {
    this.isMrt=false;
    this.isRkt=true;
    this.isRentgen=false;
  }

  Rentgen()
  {
    this.isMrt=false;
    this.isRkt=false;
    this.isRentgen=true;
  }


  over1()
  {
      var myElement = document.getElementById('card_1');
      var newElement = document.getElementById('card_h2_1');
      (myElement as any).style.background = '#0067A2';
      (myElement as any).style.color = '#FFFFFF';
      (newElement as any).style.color = '#FFFFFF'; 
  }

  out1()
  {
    var myElement = document.getElementById('card_1');
    var newElement = document.getElementById('card_h2_1');
    (myElement as any).style.background = '#FFFFFF';
    (myElement as any).style.color = '#000000';
    (newElement as any).style.color = '#0067A2';
  }

  over2()
  {
      var myElement = document.getElementById('card_2');
      var newElement = document.getElementById('card_h2_2');
      (myElement as any).style.background = '#0067A2';
      (myElement as any).style.color = '#FFFFFF';
      (newElement as any).style.color = '#FFFFFF'; 
  }

  out2()
  {
    var myElement = document.getElementById('card_2');
    var newElement = document.getElementById('card_h2_2');
    (myElement as any).style.background = '#FFFFFF';
    (myElement as any).style.color = '#000000';
    (newElement as any).style.color = '#0067A2';
  }

  over3()
  {
      var myElement = document.getElementById('card_3');
      var newElement = document.getElementById('card_h2_3');
      (myElement as any).style.background = '#0067A2';
      (myElement as any).style.color = '#FFFFFF';
      (newElement as any).style.color = '#FFFFFF'; 
  }

  out3()
  {
    var myElement = document.getElementById('card_3');
    var newElement = document.getElementById('card_h2_3');
    (myElement as any).style.background = '#FFFFFF';
    (myElement as any).style.color = '#000000';
    (newElement as any).style.color = '#0067A2';
  }
}
