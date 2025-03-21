import { FormsModule } from '@angular/forms';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  implements OnInit{

  isLoading = false;

  loadingService = inject(LoadingService)

  ngOnInit(): void {
  }

}
