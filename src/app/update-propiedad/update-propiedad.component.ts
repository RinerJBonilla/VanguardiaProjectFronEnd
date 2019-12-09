import { Component, OnInit } from '@angular/core';
import {Propiedad} from '../propiedad';
import {ActivatedRoute, Router} from '@angular/router';
import {PropiedadService} from '../propiedad.service';

@Component({
  selector: 'app-update-propiedad',
  templateUrl: './update-propiedad.component.html',
  styleUrls: ['./update-propiedad.component.css']
})
export class UpdatePropiedadComponent implements OnInit {

  id: string;
  propiedad: Propiedad;

  constructor(private route: ActivatedRoute, private router: Router,
    private propiedadService: PropiedadService) { }

  ngOnInit() {
    this.propiedad = new Propiedad();

    this.id = this.route.snapshot.params['id'];

    this.propiedadService.getPropiedad(this.id)
      .subscribe(data => {
        console.log(data)
        this.propiedad = data;
      }, error => console.log(error));
  }
  
  updatePropiedad(){
    this.propiedadService.updatePropiedad(this.id,this.propiedad)
     .subscribe(data => console.log(data), error => console.log(error));
    this.propiedad = new Propiedad();
    this.gotoList();
  }

  onSubmit(){
    this.updatePropiedad();
  }

  gotoList(){
    this.router.navigate(['/propiedades']);
  }

}
