import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Trabajador } from '../trabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage implements OnInit {
  public idSelect: string = "";
  listaWorkers : Trabajador[] = [];
  public visual = true;
 
 
  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.listarTrabajadores();
  }

  listarTrabajadores()
  {
    this.firestore.readWorkers().subscribe(res=>{
      //console.log("Datos del observable", res);
      this.listaWorkers=[];
      res.forEach((element:any) => {
        this.listaWorkers.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()})
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      console.log(this.listaWorkers);
    })

  }
  eliminarTrabajador(id: any){
    this.idSelect = id;
    console.log("id del trabajador seleccionado", this.idSelect);
    this.firestore.deleteWorker(this.idSelect).then(()=>
    { console.log("Eliminado");}, error => {console.log(error)}
    );
  }

}
