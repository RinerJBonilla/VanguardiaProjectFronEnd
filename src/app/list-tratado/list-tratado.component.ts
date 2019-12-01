import {DetailsTratadoComponent} from '../details-tratado/details-tratado.component'
import {Observable} from "rxjs";
import {TratadoService} from "../tratado.service";
import {Tratado} from "../tratado";
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-tratado',
  templateUrl: './list-tratado.component.html',
  styleUrls: ['./list-tratado.component.css']
})
export class ListTratadoComponent implements OnInit {

  tratados: Observable<Tratado[]>;

  constructor(private tratadoService: TratadoService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.tratados = this.tratadoService.getListTratados();
  }

  eliminarTratado(id: number){
    this.tratadoService.deleteTratado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detallesTratado(id: number){
    this.router.navigate(['tratadodetails',id]);
  }

}
