import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() text: string = '';
  @Input() isWarning: boolean = true;
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();

  /**
   * モーダルをクローズする
   */
  closeModal() {
    this.showModalChange.emit(false);
  }
}
