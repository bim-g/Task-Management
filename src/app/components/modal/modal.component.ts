import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal:boolean=false;
  @Input() title!:string;
  @Input() text!:string;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleModal(){
    this.showModal=!this.showModal;
  }
}
