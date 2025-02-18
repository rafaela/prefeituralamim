import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secretarias',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secretarias.component.html',
  styleUrl: './secretarias.component.scss'
})
export class SecretariasComponent {

}
