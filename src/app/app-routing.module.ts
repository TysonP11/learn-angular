import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent,
      children: [
        {
          path: ':id/:name',
          component: UserComponent
        },
      ]
    },  
    {
      path: 'servers',
      //canActivate:[AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersComponent,
      children: [
        {
          path: ':id/edit',
          component: EditServerComponent,
          canDeactivate: [CanDeactivateGuard]
        },
        {
          path: ':id',
          component: ServerComponent,
          resolve: {
              server: ServerResolver
          }
        }
      ]
    },
    // {
    //     path: 'not-found',
    //     component: ErrorPageComponent
    // },
    {
      path: 'not-found',
      component: ErrorPageComponent,
      data: {
          message: 'Page Not Found!'
      }
    },
    {
      path: '**', 
      redirectTo: '/not-found'
    }
    
  ]

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}