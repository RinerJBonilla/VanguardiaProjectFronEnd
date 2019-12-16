import {TratadoService} from '../tratado.service';
import {Tratado} from '../tratado';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Web3 from 'web3'; 

var web3: any;
var contract: any;

@Component({
  selector: 'app-create-tratado',
  templateUrl: './create-tratado.component.html',
  styleUrls: ['./create-tratado.component.css']
})
export class CreateTratadoComponent implements OnInit {

  tratado: Tratado = new Tratado();
  submitted = false;

  constructor(private tratadoService: TratadoService,
    private router: Router) { 


    if(typeof web3 !== 'undefined'){
      web3 = new Web3(web3.currentProvider);
    }else{
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];
    contract = web3.eth.contract([
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "string"
          },
          {
            "name": "property",
            "type": "string"
          },
          {
            "name": "time",
            "type": "string"
          }
        ],
        "name": "setInfo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getInfo",
        "outputs": [
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          },
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]);

  }

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
    this.createSmartContract();
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/tratados']);
  }

  createSmartContract(){
    let myContract = contract.at("0xf8585fE2Bc44C86d5eD744b0A85A2725238E35dE");
    myContract.setInfo(this.tratado.propietario, this.tratado.propiedad,this.tratado.fecha);
  }

}
