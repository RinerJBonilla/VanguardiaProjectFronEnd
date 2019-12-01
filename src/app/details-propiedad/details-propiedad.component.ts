import { Component, OnInit } from '@angular/core';
import {Propiedad} from '../propiedad';
import {PropiedadService} from '../propiedad.service';
import {Router, ActivatedRoute} from '@angular/router';
import {ListPropiedadComponent} from '../list-propiedad/list-propiedad.component';

@Component({
  selector: 'app-details-propiedad',
  templateUrl: './details-propiedad.component.html',
  styleUrls: ['./details-propiedad.component.css']
})
export class DetailsPropiedadComponent implements OnInit {

  id: number;
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

  list(){
    this.router.navigate(['propiedades']);
  }


}
