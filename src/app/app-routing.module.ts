import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPropetarioComponent} from './list-propetario/list-propetario.component';
import { DetailsPropetarioComponent} from './details-propetario/details-propetario.component';
import { CreatePropetarioComponent} from './create-propetario/create-propetario.component';
import { UpdatePropetariosComponent} from './update-propetarios/update-propetarios.component';

import { ListPropiedadComponent} from './list-propiedad/list-propiedad.component';
import { DetailsPropiedadComponent} from './details-propiedad/details-propiedad.component';
import { CreatePropiedadComponent} from './create-propiedad/create-propiedad.component';
import { UpdatePropiedadComponent} from './update-propiedad/update-propiedad.component';

import { ListTratadoComponent} from './list-tratado/list-tratado.component';
import { DetailsTratadoComponent} from './details-tratado/details-tratado.component';
import { CreateTratadoComponent} from './create-tratado/create-tratado.component';
import { UpdateTratadoComponent} from './update-tratado/update-tratado.component';


const routes: Routes = [
  {path: '', redirectTo: 'propetario', pathMatch: 'full'},
  {path: 'propietarios', component: ListPropetarioComponent},
  {path: 'propietarioadd', component: CreatePropetarioComponent},
  {path: 'propietarioupdate/:id', component: UpdatePropetariosComponent},
  {path: 'propietariodetails/:id', component: DetailsPropetarioComponent},

  {path: 'propiedades', component: ListPropiedadComponent},
  {path: 'propiedadadd', component: CreatePropiedadComponent},
  {path: 'propiedadupdate/:id', component: UpdatePropiedadComponent},
  {path: 'propiedaddetails/:id', component: DetailsPropiedadComponent},

  {path: 'tratados', component: ListTratadoComponent},
  {path: 'tratadoadd', component: CreateTratadoComponent},
  {path: 'tratadoupdate/:id', component: UpdateTratadoComponent},
  {path: 'tratadodetails/:id', component: DetailsTratadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
