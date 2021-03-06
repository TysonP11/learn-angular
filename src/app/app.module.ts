import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningSuccessComponent } from './warning-success/warning-success.component';
import { UsernameComponent } from './username/username.component';
import { SecretTextComponent } from './secret-text/secret-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    WarningSuccessComponent,
    UsernameComponent,
    SecretTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
