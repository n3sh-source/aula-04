import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { TabuadaComponent } from './tabuada/tabuada.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'tabuada', component: TabuadaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    SobreComponent,
    TabuadaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
