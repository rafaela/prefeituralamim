import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exibe o loading quando a requisição começa
    this.loadingService.show();

    return next.handle(req).pipe(
      tap({
        next: () => {},
        error: () => {},
        complete: () => {
          // Oculta o loading quando a requisição é completada
          this.loadingService.hide();
        }
      })
    );
  }

}
