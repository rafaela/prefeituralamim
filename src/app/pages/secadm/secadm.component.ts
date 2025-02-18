import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-secadm',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './secadm.component.html',
  styleUrl: './secadm.component.scss'
})
export class SecadmComponent {

}
