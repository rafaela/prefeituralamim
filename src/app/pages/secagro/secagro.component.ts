import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secagro',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secagro.component.html',
  styleUrl: './secagro.component.scss'
})
export class SecagroComponent {

}
