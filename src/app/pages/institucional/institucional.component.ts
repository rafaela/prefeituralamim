import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-institucional',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './institucional.component.html',
  styleUrl: './institucional.component.scss'
})
export class InstitucionalComponent {

}
