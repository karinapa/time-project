import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() max: number = 0;
  @Input() min: number = 0;
  @Input() required: boolean = false;
  @Input() regex: string = '';
  @Input() name: string = '';
  @Input() input: string = '';
  @Input() noequal: number = 0;
  @Input() valid: boolean = false;
  @Output() validInput = new EventEmitter<boolean>();
  @Output() inputChange = new EventEmitter<string>();
  @Output() validChange = new EventEmitter<boolean>();
  errors: Array<string> = [];

  /**
   * inputのバリデーションを行いエラーメッセージを設定する
   */
  validateInput() {
    this.errors = [];
    if (this.required == true && this.input === '') {
      this.errors.push(`${this.label}は必須です`);
    }

    if (this.regex !== '') {
      const regexp = new RegExp(this.regex),
        test = regexp.test(this.input.toString());
      if (!test) {
        this.errors.push(`正しい${this.label}を入力してください`);
      }
    }

    if (Number(this.input) > Number(this.max)) {
      this.errors.push(`${this.label}は最大${this.max}までです`);
    }

    if (Number(this.input) < Number(this.min)) {
      this.errors.push(`${this.label}は最小${this.min}までです`);
    }

    this.valid = this.errors.length > 0 ? false : true;
    this.emitValue(this.valid);
  }

  /**
   * parentコンポーネントにデータを通す
   * @param valid
   * @returns
   */
  emitValue(valid: boolean) {
    this.inputChange.emit(this.input);
    this.validChange.emit(valid);
    this.validInput.emit(valid);
    return;
  }
}
