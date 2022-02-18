import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  active = 1;
  constructor() 
  {

  }
    ngOnInit(): void 
  {
    
  }


 onSave(id:any)
  {
    var Element1 = document.getElementById('med');
    var Element2 = document.getElementById('otd');

    if (id==2) 
    {
       (Element1 as any).style = 'color:#000000;border-bottom:none' ;
       (Element2 as any).style = 'color:#0067A2;border-bottom: 5px solid #0067A2';
    }

    if (id==1) 
    {
      (Element2 as any).style = 'color:#000000;border-bottom:none' ;
      (Element1 as any).style = 'color:#0067A2;border-bottom: 5px solid #0067A2';
    }
  }

}
