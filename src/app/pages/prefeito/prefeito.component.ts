import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-prefeito',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './prefeito.component.html',
  styleUrl: './prefeito.component.scss'
})
export class PrefeitoComponent {

}
