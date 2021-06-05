import { Component, OnInit } from '@angular/core';
import { SortByPipe} from '../sortpipe';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
userList =[
  { 
    Title:"Mr", 
    FirstName:"Gururaj",  
    LastName:"Jewargi", 
    Age:35, 
    Email:"gururaj@gmail.com",
    Country: "India"    
  },  
  {  
    Title:"Mr", 
    FirstName:"Sathick",  
    LastName:"Basha", 
    Age:30, 
    Email:"gururaj@gmail.com",
    Country: "US"
  },  
  {  
    Title:"Mr", 
    FirstName:"Vinoth",  
    LastName:"Kumar", 
    Age:40, 
    Email:"vinoth@gmail.com",
    Country: "US"
  },
  { 
    Title:"Mr", 
    FirstName:"Raj",  
    LastName:"Kumar", 
    Age:40, 
    Email:"raj@gmail.com",
    Country: "India"    
  },  
  {  
    Title:"Mr", 
    FirstName:"Senthil",  
    LastName:"Kumar", 
    Age:30, 
    Email:"Senthil@gmail.com",
    Country: "US"
  },  
  {  
    Title:"Mr", 
    FirstName:"Pandi",  
    LastName:"Raj", 
    Age:40, 
    Email:"pandi@gmail.com",
    Country: "UK"
  }
  
]

}
