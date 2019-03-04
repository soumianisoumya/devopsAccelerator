import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ParalaxComponentComponent } from './paralax-component/paralax-component.component';
import { AcceleratorComponent } from './accelerator/accelerator.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AcclKubeComponent } from './accl-kube/accl-kube.component';
import { AcclOpenshiftComponent } from './accl-openshift/accl-openshift.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParalaxComponentComponent,
    AcceleratorComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AcclKubeComponent,
    AcclOpenshiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
