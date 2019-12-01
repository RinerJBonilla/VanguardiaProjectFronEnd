import { Component, OnInit } from '@angular/core';
import {Propietario} from '../propetario';
import {ActivatedRoute, Router} from '@angular/router';
import {PropetarioService} from '../propetario.service';

@Component({
  selector: 'app-update-propetarios',
  templateUrl: './update-propetarios.component.html',
  styleUrls: ['./update-propetarios.component.css']
})
export class UpdatePropetariosComponent implements OnInit {

  id: number;
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
  
  updatePropetario(){
    this.propetarioService.updatePropetario(this.id,this.propetario)
     .subscribe(data => console.log(data), error => console.log(error));
    this.propetario = new Propietario();
    this.gotoList();
  }

  onSubmit(){
    this.updatePropetario();
  }

  gotoList(){
    this.router.navigate(['/propietarios']);
  }

}
