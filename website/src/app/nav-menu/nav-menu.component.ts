import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
 
  }
  
  over(id:any)
  {
    if(id=="home")
    {
      var Element = document.getElementById("home");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';
    }

    if(id=="news")
    {
      var Element = document.getElementById("news");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';
 
    }

    if(id=="services")
    {
      var Element = document.getElementById("services");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';
   
    }

    if(id=="diagnosis")
    {
      var Element = document.getElementById("diagnosis");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';
    
    }

    if(id=="doctors")
    {
      var Element = document.getElementById("doctors");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';

    }

    if(id=="contacts")
    {
      var Element = document.getElementById("contacts");
      (Element as any).style = 'border-bottom:  2px solid #FFFFFF';
    }
  }


  out(id:any)
  {
    if(id=="home")
    {
      var Element = document.getElementById("home");
      (Element as any).style = 'border-bottom:  2px solid #E3051C;';
    }
    if(id=="news")
    {
      var Element = document.getElementById("news");
      (Element as any).style = '  border-bottom:  2px solid #E3051C;';
    }
    if(id=="services")
    {
      var Element = document.getElementById("services");
      (Element as any).style = '  border-bottom:  2px solid #E3051C;';
    }
    if(id=="diagnosis")
    {
      var Element = document.getElementById("diagnosis");
      (Element as any).style = '  border-bottom:  2px solid #E3051C;';
    }
    if(id=="doctors")
    {
      var Element = document.getElementById("doctors");
      (Element as any).style = '  border-bottom:  2px solid #E3051C;';
    }
    if(id=="contacts")
    {
      var Element = document.getElementById("contacts");
      (Element as any).style = '  border-bottom:  2px solid #E3051C;';
    }
  }
}
