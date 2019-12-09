import {DetailsPropiedadComponent} from '../details-propiedad/details-propiedad.component'
import {Observable} from "rxjs";
import {PropiedadService} from "../propiedad.service";
import {Propiedad} from "../propiedad";
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-propiedad',
  templateUrl: './list-propiedad.component.html',
  styleUrls: ['./list-propiedad.component.css']
})
export class ListPropiedadComponent implements OnInit {

  propiedades: Propiedad[];

  constructor(private propiedadService: PropiedadService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.propiedadService.getListPropiedades()
    .subscribe(propiedades => {
      this.propiedades = propiedades;
      console.log(propiedades);
    });
  }

  eliminarPropiedad(id: string){
    this.propiedadService.deletePropiedad(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detallesPropiedad(id: string){
    this.router.navigate(['propiedaddetails',id]);
  }

}
