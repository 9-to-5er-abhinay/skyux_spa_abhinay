import {
  Component, OnInit, Output, EventEmitter
} from '@angular/core';

import {Item} from '../../Item';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit { 
  
 

  @Output() onAddItem: EventEmitter<Item> = new EventEmitter(); 

  public maxAddressCharacterCount:number = 50;

  firstName: string;
  lastName: string;
  contact: number;
  email: string;
  date: string;
  address: string

  onSubmit(){
    
    if(!this.firstName){
      alert('Add First Name');
      return;
    }
    var dateFormatted= new Date(this.date).toLocaleDateString('en-GB');
    if(dateFormatted=="Invalid Date") {
      dateFormatted ="";
    }

    const newItem: Item = {
      firstName: this.firstName,
      lastName: this.lastName,
      contact: this.contact,
      email: this.email,
      date: dateFormatted,
      address: this.address,
    }
    
    this.onAddItem.emit(newItem);

    this.firstName='';
    this.lastName='';
    this.contact=null;
    this.email='';
    this.date='';
    this.address='';
  }

  public ngOnInit(): void {
  } 
}
