import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Output() sliderBtnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleButtonClick(val: boolean) {
    this.sliderBtnClick.emit(val);
  }
}
