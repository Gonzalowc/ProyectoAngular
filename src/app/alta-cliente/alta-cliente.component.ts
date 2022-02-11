import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder, NgControl} from '@angular/forms';
import { Cliente, getData, saveData } from '../tabla-clientes/tabla-clientes.component';
@Component({
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent {
  title = 'Nuevo Cliente';
  angForm: FormGroup;
  guardado = false;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      apellidos: ['', Validators.required ],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      saldo: ['0', Validators.required]
    });
  }
  saveDataCliente(){
    let id = getData("clientes")!=null && getData("clientes")!=''? JSON.parse(getData("clientes")).length : 0;
    let firstName = this.angForm.get(["name"]).value;
    let lastName = this.angForm.get(["apellidos"]).value;
    let dni = this.angForm.get(["dni"]).value;
    let telefono = this.angForm.get(["telefono"]).value;
    let email = this.angForm.get(["email"]).value;
    let saldo = this.angForm.get(["saldo"]).value;
    let cliente:Cliente = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      telefono: telefono,
      email: email,
      saldo: saldo
    };
    let clientes:Cliente[] = getData("clientes")!=null && getData("clientes")!='' ?JSON.parse(getData("clientes")): [];
    console.log(cliente);
    console.log(clientes)
    clientes.push(cliente);
    saveData("clientes", JSON.stringify(clientes))
    this.guardado = true;
  }
  closeInfo(){
    this.guardado = false;
  }
  
}

