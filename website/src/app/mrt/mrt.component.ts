import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrt',
  templateUrl: './mrt.component.html',
  styleUrls: ['./mrt.component.css']
})
export class MrtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  active = 1;

  onSave(id:any)
  {
    var Element1 = document.getElementById('head-open');
    var Element2 = document.getElementById('mrt-text-open');

    var Element3= document.getElementById('head-close');
    var Element4= document.getElementById('mrt-text-close');

    var Background1 = document.getElementById('ngbNavItem_1');
    var Background2 = document.getElementById('ngbNavItem_2');


    if (id==2) 
    {
       (Element1 as any).style = 'color:#0067A2';
       (Element2 as any).style = 'color:#000000';
       (Element3 as any).style = 'color:#FFFFFF';
       (Element4 as any).style = 'color:#FFFFFF';
       (Background1 as any).style = 'background-color: #FFFFFF';
       (Background2 as any).style = 'background-color: #0067A2';
    }

    if (id==1) 
    {
       (Element1 as any).style = 'color:#FFFFFF';
       (Element2 as any).style = 'color:#FFFFFF';
       (Element3 as any).style = 'color:#0067A2';
       (Element4 as any).style = 'color:#000000';
       (Background1 as any).style = 'background-color: #0067A2';
       (Background2 as any).style = 'background-color: #FFFFFF';
    }
  }

}
