import {TratadoService} from '../tratado.service';
import {Tratado} from '../tratado';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-tratado',
  templateUrl: './create-tratado.component.html',
  styleUrls: ['./create-tratado.component.css']
})
export class CreateTratadoComponent implements OnInit {

  tratado: Tratado = new Tratado();
  submitted = false;

  constructor(private tratadoService: TratadoService,
    private router: Router) { }

  ngOnInit() {
  }

  nuevoTratado(): void {
    this.submitted = false;
    this.tratado = new Tratado();
  }

  save(){
    this.tratadoService.createTratado(this.tratado)
     .subscribe(data => console.log(data),
     error => console.log(error));
    
    this.tratado = new Tratado();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/tratados']);
  }

}
