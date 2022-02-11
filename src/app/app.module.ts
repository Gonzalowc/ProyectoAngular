import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ModalEliminarClienteComponent } from './modal-eliminar-cliente/modal-eliminar-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalInfoClienteComponent } from './modal-info-cliente/modal-info-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    TablaClientesComponent,
    NavbarComponent,
    AltaClienteComponent,
    EditarClienteComponent,
    ModalEliminarClienteComponent,
    ModalInfoClienteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
