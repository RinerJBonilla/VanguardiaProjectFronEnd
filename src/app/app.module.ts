import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePropetarioComponent } from './create-propetario/create-propetario.component';
import { DetailsPropetarioComponent } from './details-propetario/details-propetario.component';
import { ListPropetarioComponent } from './list-propetario/list-propetario.component';
import { UpdatePropetariosComponent } from './update-propetarios/update-propetarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePropiedadComponent } from './create-propiedad/create-propiedad.component';
import { DetailsPropiedadComponent } from './details-propiedad/details-propiedad.component';
import { ListPropiedadComponent } from './list-propiedad/list-propiedad.component';
import { UpdatePropiedadComponent } from './update-propiedad/update-propiedad.component';
import { CreateTratadoComponent } from './create-tratado/create-tratado.component';
import { DetailsTratadoComponent } from './details-tratado/details-tratado.component';
import { ListTratadoComponent } from './list-tratado/list-tratado.component';
import { UpdateTratadoComponent } from './update-tratado/update-tratado.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePropetarioComponent,
    DetailsPropetarioComponent,
    ListPropetarioComponent,
    UpdatePropetariosComponent,
    CreatePropiedadComponent,
    DetailsPropiedadComponent,
    ListPropiedadComponent,
    UpdatePropiedadComponent,
    CreateTratadoComponent,
    DetailsTratadoComponent,
    ListTratadoComponent,
    UpdateTratadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
