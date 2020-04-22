import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ZombiesmodalComponent } from '../../modals/zombiesmodal/zombiesmodal.component';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  zombies: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    console.log('Actualizando tabla...');
    this.actualizarTabla();
  }

  actualizarTabla() {
    this._dataService.zombiesObservable.subscribe((resultados) => {
      this.zombies = resultados;
    });

    this._dataService.obtenerZombies();
  }

  async eliminarZombie(id: string) {
    await this._dataService.eliminarZombie(id).subscribe((resultado) => {
      console.log(resultado);
      this.actualizarTabla();
    });
  }

  async editZombie(ZombiesmodalComponent) {
    await this._dataService.putZombie(ZombiesmodalComponent).subscribe((resultado)=>{
      console.log(resultado);
      this.actualizarTabla();
        });
    //this.employeeService.selectedEmployee = employee;
  }

  editzombie(zombie: ZombiesmodalComponent["nombre"]){
    this._dataService.putZombie=zombie;
  }
}
