import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
// import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ModalEliminarClienteComponent } from '../modal-eliminar-cliente/modal-eliminar-cliente.component';
import { ModalInfoClienteComponent } from '../modal-info-cliente/modal-info-cliente.component';
export interface Cliente {
  id: number;
  firstName: string;
  lastName: string;
  dni: string;
  telefono: number;
  email: string;
  saldo: number;
}

const CLIENTE_DATA: Cliente[] = [
  {id:0, firstName:"Gonzalo", lastName:"Waack Carneado", dni:"111111111A", telefono:111111111, email:"gonzalowc.work@gmail.com",saldo: 135.2},
  {id:1, firstName:"Pepe", lastName:"c v", dni:"2222222222A", telefono:222222222, email:"gonzalowd@mail.cow", saldo: 13000.23}
];

@Component({
  selector: 'tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: [ './tabla-clientes.component.scss']
}) 



export class TablaClientesComponent implements OnInit {
  
  displayedColumns: string[] = ["firstName","lastName","dni","telefono","email","saldo","actions"];
  cliente:Cliente;
  listaCliente: Cliente[];
  route:Router;
  constructor(public dialog: MatDialog, router : Router) {}
  ngOnInit(): void {
    if(getData("clientes")!=null){
      this.listaCliente = getData("clientes")!=null && getData("clientes")!='' ?JSON.parse(getData("clientes")): [];
    }else{
      this.listaCliente = CLIENTE_DATA;
      saveData("clientes",JSON.stringify(CLIENTE_DATA));
    }
    this.comprobarDatos()
  }
  
  openDialogDelete(id: number): void {
    this.cliente = this.listaCliente.find((c: any) => c.id === id);
    const dialogRef = this.dialog.open(ModalEliminarClienteComponent, {
      width: '250',
      data: {id: this.cliente.id, firstName: this.cliente.firstName, lastName: this.cliente.lastName,
            dni: this.cliente.dni, email: this.cliente.email, telefono: this.cliente.telefono}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let copia = [...this.listaCliente]
        let index = copia.indexOf(this.cliente);
        copia.splice(index,1);
        this.listaCliente = copia;
        saveData("clientes", copia);
        this.comprobarDatos();
        console.log("Cliente Borrado");
      }
    });
  }
  // #############################################
  openDialogInfo(id: number): void {
    this.cliente = this.listaCliente.find((c: any) => c.id === id);
    const dialogRef = this.dialog.open(ModalInfoClienteComponent, {
      width: '550px',
      data: {id: this.cliente.id, firstName: this.cliente.firstName, lastName: this.cliente.lastName,
            dni: this.cliente.dni, email: this.cliente.email, telefono: this.cliente.telefono}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let copia = [...this.listaCliente]
        let index = copia.indexOf(this.cliente);
        copia.splice(index,1);
        this.listaCliente = copia;
        saveData("clientes", copia);
        this.comprobarDatos();
        console.log("Cliente Borrado");
      }
    });
  }
  // #############################################
  panelOpenState = false;
  datos = false;
  comprobarDatos(){
    if(this.listaCliente.length>0){
      this.datos = true;
    }else{
      this.datos = false;
    }
  }
}
export function saveData(variable: string, valor: any){
    sessionStorage.setItem(variable, valor);
}
export function getData(variable: string){
  return sessionStorage.getItem(variable);
}
