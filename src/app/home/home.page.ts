import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../trabajador';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }

  addTrabajador(nombre: HTMLInputElement, apellidos:HTMLInputElement, dni: HTMLInputElement,
     telefono: HTMLInputElement, email: HTMLInputElement, departamento: HTMLInputElement){
    const trabajador: Trabajador = {
      nombre: nombre.value, apellidos: apellidos.value, dni: dni.value, telefono: telefono.value,
      email:email.value, departamento: departamento.value};
    this.firestore.setWorker(trabajador);
    nombre.value="";
    apellidos.value="";
    dni.value="";
    telefono.value="";
    email.value="";
    departamento.value="";
    return false;
    };
  }
