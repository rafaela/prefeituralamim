import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideToastr, ToastNoAnimation, ToastrService } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './app/interceptor/loading.interceptor';
import { LoadingService } from './app/services/loading.service';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideAnimations(),  // Necessário para animações do Toastr
    provideToastr({   // Provedor global do Toastr
      timeOut: 13000, // 15 seconds
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right', // Posição padrão dos toasts
      preventDuplicates: true,
      newestOnTop: true,
    }),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    LoadingService
  ]
}).catch(err => console.error(err));
