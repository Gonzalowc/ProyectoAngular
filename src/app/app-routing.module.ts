import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '', component: TablaClientesComponent },
  { path: 'Home', component: TablaClientesComponent },
  { path: 'Clientes', component: TablaClientesComponent},
  { path: 'AltaCliente', component: AltaClienteComponent},
  { path: 'editarCliente', component: EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
