import { Component, OnInit } from '@angular/core';
import {Tratado} from '../tratado';
import {TratadoService} from '../tratado.service';
import {Router, ActivatedRoute} from '@angular/router';
import {ListTratadoComponent} from '../list-tratado/list-tratado.component';

@Component({
  selector: 'app-details-tratado',
  templateUrl: './details-tratado.component.html',
  styleUrls: ['./details-tratado.component.css']
})
export class DetailsTratadoComponent implements OnInit {

  id: string;
  tratado: Tratado;

  constructor(private route: ActivatedRoute, private router: Router,
    private tratadoService: TratadoService) { }

  ngOnInit() {
    this.tratado = new Tratado();

    this.id = this.route.snapshot.params['id'];

    this.tratadoService.getTratado(this.id)
     .subscribe(data => {
       console.log(data)
       this.tratado = data;
     }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tratados']);
  }

}
