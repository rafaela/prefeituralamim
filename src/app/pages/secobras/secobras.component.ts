import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secobras',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secobras.component.html',
  styleUrl: './secobras.component.scss'
})
export class SecobrasComponent {

}
