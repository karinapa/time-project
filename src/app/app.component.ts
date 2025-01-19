import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { InputComponent } from './component/input/input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'time-proyect';
}
