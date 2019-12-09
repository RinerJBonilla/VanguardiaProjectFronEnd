import { Component, OnInit } from '@angular/core';
import {Propietario} from '../propetario';
import {PropetarioService} from '../propetario.service';
import {Router, ActivatedRoute} from '@angular/router';
import {ListPropetarioComponent} from '../list-propetario/list-propetario.component';

@Component({
  selector: 'app-details-propetario',
  templateUrl: './details-propetario.component.html',
  styleUrls: ['./details-propetario.component.css']
})
export class DetailsPropetarioComponent implements OnInit {

  id: string;
  propetario: Propietario;

  constructor(private route: ActivatedRoute, private router: Router,
    private propetarioService: PropetarioService) { }

  ngOnInit() {
    this.propetario = new Propietario();

    this.id = this.route.snapshot.params['id'];

    this.propetarioService.getPropetario(this.id)
     .subscribe(data => {
       console.log(data)
       this.propetario = data;
     }, error => console.log(error));
  }

  list(){
    this.router.navigate(['propietarios']);
  }

}
