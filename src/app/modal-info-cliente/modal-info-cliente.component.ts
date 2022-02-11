import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Cliente } from '../tabla-clientes/tabla-clientes.component';
@Component({
  templateUrl: './modal-info-cliente.component.html',
  styleUrls: ['./modal-info-cliente.component.scss']
})
export class ModalInfoClienteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalInfoClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
