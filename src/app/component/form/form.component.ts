import { Component } from '@angular/core';
import { InputComponent } from '../input/input/input.component';
import { ModalComponent } from '../modal/modal/modal.component';
import { CommonModule } from '@angular/common';
import {
  ENDTIME_LABEL,
  INITTIME_LABEL,
  MODAL_MESSAGE_ERROR,
  MODAL_MESSAGE_OK,
  TIME_LABEL,
} from '../../services/constant-services.data';

@Component({
  selector: 'app-form',
  imports: [InputComponent, ModalComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  time: string = '';
  initTime: string = '';
  endTime: string = '';
  modalText: string = '';
  validTime: boolean = false;
  validInitTime: boolean = false;
  validEndTime: boolean = false;
  isDisabledButton: boolean = true;
  showModal: boolean = false;
  timeLabel: string = TIME_LABEL;
  initTimeLabel: string = INITTIME_LABEL;
  endTimeLabel: string = ENDTIME_LABEL;
  isWarning: boolean = false;

  constructor() {}

  ngOnInit() {}

  /**
   * DISABLEDボタンのステータスをセットする
   */
  setIsDisabledButton(): void {
    this.isDisabledButton = !(
      this.validTime &&
      this.validInitTime &&
      this.validEndTime
    );
  }

  /**
   * 確認ボタンをクリックして時刻が含まれているか確認する
   */
  clickButton(): void {
    let isTimeInclude = this.isIncludeTime(
      this.time,
      this.initTime,
      this.endTime
    );
    this.setSettingModal(isTimeInclude);
    this.showModal = true;
  }

  /**
   * 時刻が開始時刻と終了時刻に含まれているか確認する
   * @param time
   * @param initTime
   * @param endTime
   * @returns
   */
  isIncludeTime(time: string, initTime: string, endTime: string): boolean {
    if (initTime === endTime) {
      this.modalText = MODAL_MESSAGE_OK;
      return true;
    }
    let number = Number(initTime);
    let ar = [];
    while (number !== Number(endTime)) {
      ar.push(number);
      number = number === 23 ? 0 : number + 1;
    }
    return ar.includes(Number(time)) ? true : false;
  }

  /**
   *　時間の範囲に時刻が含まれているか確認をする
   * @param isTimeInclude
   */
  setSettingModal(isTimeInclude: boolean): void {
    this.modalText = isTimeInclude ? MODAL_MESSAGE_OK : MODAL_MESSAGE_ERROR;
    this.isWarning = isTimeInclude ? false : true;
  }
}
