import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../../Item';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() public onAddItem: EventEmitter<Item> = new EventEmitter();

  public maxAddressCharacterCount: number = 50;

  public firstName: string;
  public lastName: string;
  public contact: number;
  public email: string;
  public date: string;
  public address: string;

  public onSubmit() {
    if (!this.firstName) {
      alert('Add First Name');
      return;
    }
    let dateFormatted = new Date(this.date).toLocaleDateString('en-GB');
    if (dateFormatted === 'Invalid Date') {
      dateFormatted = '';
    }
    this.date = dateFormatted;

    const newItem: Item = {
      firstName: this.firstName,
      lastName: this.lastName,
      contact: this.contact,
      email: this.email,
      date: this.date,
      address: this.address
    };

    this.onAddItem.emit(newItem);

    this.firstName = '';
    this.lastName = '';
    this.contact = undefined;
    this.email = '';
    this.date = '';
    this.address = '';
  }

  public ngOnInit(): void {}
}
