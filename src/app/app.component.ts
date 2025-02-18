import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiariosComponent } from './pages/diarios/diarios.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prefeitura';
}
