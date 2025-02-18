import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secsaude',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secsaude.component.html',
  styleUrl: './secsaude.component.scss'
})
export class SecsaudeComponent {

}
