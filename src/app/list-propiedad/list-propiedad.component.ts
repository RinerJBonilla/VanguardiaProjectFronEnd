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

  propiedades: Observable<Propiedad[]>;

  constructor(private propiedadService: PropiedadService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.propiedades = this.propiedadService.getListPropiedades();
  }

  eliminarPropiedad(id: number){
    this.propiedadService.deletePropiedad(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detallesPropiedad(id: number){
    this.router.navigate(['propiedaddetails',id]);
  }

}
