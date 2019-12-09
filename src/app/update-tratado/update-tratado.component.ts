import { Component, OnInit } from '@angular/core';
import {Tratado} from '../tratado';
import {ActivatedRoute, Router} from '@angular/router';
import {TratadoService} from '../tratado.service';

@Component({
  selector: 'app-update-tratado',
  templateUrl: './update-tratado.component.html',
  styleUrls: ['./update-tratado.component.css']
})
export class UpdateTratadoComponent implements OnInit {

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
  
  updateTratado(){
    this.tratadoService.updateTratado(this.id,this.tratado)
     .subscribe(data => console.log(data), error => console.log(error));
    this.tratado = new Tratado();
    this.gotoList();
  }

  onSubmit(){
    this.updateTratado();
  }

  gotoList(){
    this.router.navigate(['/tratados']);
  }

}
