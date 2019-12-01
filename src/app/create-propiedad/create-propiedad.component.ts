import {PropiedadService} from '../propiedad.service';
import {Propiedad} from '../propiedad';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-propiedad',
  templateUrl: './create-propiedad.component.html',
  styleUrls: ['./create-propiedad.component.css']
})
export class CreatePropiedadComponent implements OnInit {

  propiedad: Propiedad = new Propiedad();
  submitted = false;

  constructor(private propiedadService: PropiedadService,
    private router: Router) { }

  ngOnInit() {
  }

  nuevaPropiedad(): void {
    this.submitted = false;
    this.propiedad = new Propiedad();
  }

  save(){
    this.propiedadService.createPropiedad(this.propiedad)
     .subscribe(data => console.log(data),
     error => console.log(error));
    
    this.propiedad = new Propiedad();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/propiedades']);
  }

}
