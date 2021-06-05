import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-user-item',
  templateUrl: './app-user-item.component.html',
  styleUrls: ['./app-user-item.component.css']
})
export class AppUserItemComponent implements OnInit {

    name: string;
    
  constructor() { 
  
      this.name = 'Felipe';
  }

  ngOnInit(): void {
  }

}
