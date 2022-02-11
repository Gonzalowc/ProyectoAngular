import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Cliente, getData, saveData } from '../tabla-clientes/tabla-clientes.component';
import {FormControl, FormGroup, Validators,FormBuilder, NgControl} from '@angular/forms';
@Component({
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {
  title = 'Editar Cliente';
  angForm: FormGroup;
  cliente: Cliente;
  guardado = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { 
    this.getDataCliente();
    this.createForm();
  }
  
  ngOnInit(): void {
    
  }
  createForm() {
    this.angForm = this.fb.group({
      name: [this.cliente.firstName, Validators.required ],
      apellidos: [this.cliente.lastName, Validators.required ],
      dni: [this.cliente.dni, Validators.required],
      telefono: [this.cliente.telefono, Validators.required],
      email: [this.cliente.email, Validators.required],
      saldo: [this.cliente.saldo, Validators.required]
    });
  }
  saveDataCliente(){
    let id = this.cliente.id;
    let firstName = this.angForm.get(["name"]).value;
    let lastName = this.angForm.get(["apellidos"]).value;
    let dni = this.angForm.get(["dni"]).value;
    let telefono = this.angForm.get(["telefono"]).value;
    let email = this.angForm.get(["email"]).value;
    let saldo = this.angForm.get(["saldo"]).value;
    let copia:Cliente = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      telefono: telefono,
      email: email,
      saldo: saldo
    };
    let clientes:Cliente[] = getData("clientes")!=null && getData("clientes")!='' ?JSON.parse(getData("clientes")): [];
    clientes[copia.id] = copia
    saveData("clientes", JSON.stringify(clientes))
    this.guardado = true;
  }
  closeInfo(){
    this.guardado = false;
  }
  getDataCliente(){
    let id = +this.route.snapshot.queryParamMap.get('id');
    this.cliente = getCliente(id);
    console.log(this.cliente)
  }
}

function getCliente(id: number){
  let clientes:Cliente[] = getData("clientes")!=null && getData("clientes")!='' ?JSON.parse(getData("clientes")): [] 
  let cliente = clientes.find((c: Cliente) => c.id === id)
  return cliente;
}
