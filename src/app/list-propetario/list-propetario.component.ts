import {DetailsPropetarioComponent} from '../details-propetario/details-propetario.component'
import {Observable} from "rxjs";
import {PropetarioService} from "../propetario.service";
import {Propietario} from "../propetario";
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-propetario',
  templateUrl: './list-propetario.component.html',
  styleUrls: ['./list-propetario.component.css']
})
export class ListPropetarioComponent implements OnInit {

  propietarios: Observable<Propietario[]>;

  constructor(private propetarioService: PropetarioService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.propietarios = this.propetarioService.getListPropetarios();
  }

  eliminarPropetario(id: number){
    this.propetarioService.deletePropetario(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detallesPropetario(id: number){
    this.router.navigate(['propietariodetails',id]);
  }

}
