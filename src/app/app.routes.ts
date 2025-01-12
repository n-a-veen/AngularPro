import { Route } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { content } from './shared/routes/content.routes';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.routes';

export const App_Route: Route[] = [
      { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
      {
        path: 'auth/login',
        loadComponent: () =>
          import('../app/authentication/login/login.component').then((m) => m.LoginComponent),
      },
      { path: '', component: ContentLayoutComponent, children: content },
      { path: '', component: AuthenticationLayoutComponent, children: authen },

    ]