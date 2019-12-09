import {PropetarioService} from '../propetario.service';
import {Propietario} from '../propetario';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-propetario',
  templateUrl: './create-propetario.component.html',
  styleUrls: ['./create-propetario.component.css']
})
export class CreatePropetarioComponent implements OnInit {

  propetario: Propietario = new Propietario();
  submitted = false;

  constructor(private propetarioService: PropetarioService,
    private router: Router) { }

  ngOnInit() {
    this.propetario = new Propietario();
  }

  nuevoPropetario(): void {
    this.submitted = false;
    this.propetario = new Propietario();
  }

  save(){
    this.propetarioService.createPropetario(this.propetario)
     .subscribe(response => {
       console.table(response);
       this.gotoList();
     },
     error => {
       console.log(error);
     });
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/propietarios']);
  }

}
