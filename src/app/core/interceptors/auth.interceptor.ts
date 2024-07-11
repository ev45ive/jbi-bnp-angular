import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { API_URL } from '../../tokens';
import { catchError, pipe } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.token}`,
      },
    }),
  );
};

export const URLInterceptor: HttpInterceptorFn = (req, next) => {
  const api_url = inject(API_URL).url;

  if (req.url.match(/^https?:/)) return next(req);

  return next(req.clone({ url: api_url + req.url }));
};

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(httpErrorHandler());
};

// Interceptors Chain of responsibility Pattern

// HttpClient.next = IntA
// IntA.next = IntB
// IntB.next = IntC
// IntC ->  HttpHandler -> Observable<Response>

// @Injectable({
//   providedIn: 'root'
// })
// export class NameInterceptor implements HttpInterceptor {
//   constructor(auth:AuthService)
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req);
//   }
// }

const httpErrorHandler = <T>() =>
  pipe(
    catchError<T, never>((error, originalObs) => {
      if (
        error instanceof HttpErrorResponse &&
        isSpotifyErrorResponse(error.error)
      )
        throw new Error(error.error.error.message);
      throw new Error('Unknown error');
    }),
  );

interface SpotifyErrorResponse {
  error: {
    code: number;
    message: string;
  };
}

function isSpotifyErrorResponse(error: any): error is SpotifyErrorResponse {
  return (
    error &&
    'error' in error &&
    error.error &&
    'message' in error.error &&
    typeof error.error.message == 'string'
  );
}
