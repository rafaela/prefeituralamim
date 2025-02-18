import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secsocial',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secsocial.component.html',
  styleUrl: './secsocial.component.scss'
})
export class SecsocialComponent {

}
