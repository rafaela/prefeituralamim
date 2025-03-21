import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiariosComponent } from './pages/diarios/diarios.component';
import { IndexComponent } from './pages/index/index.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, LoadingComponent, MatProgressSpinnerModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prefeitura';

  isLoading$ = new LoadingService().loading$;

  constructor(private loadingService: LoadingService) {}
}
