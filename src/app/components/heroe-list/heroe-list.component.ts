import { Component, inject } from '@angular/core';
import { HeroeService } from '../../services/heroe-service.service';

@Component({
  selector: 'app-heroe-list',
  standalone: true,
  imports: [],
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  heroeService = inject(HeroeService)
  listHeroe: any[] = []

  constructor() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.cargarHeroes()

    })
  }

  cargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      console.log(data.heroes)
      this.listHeroe = data.heroes

    })
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.estado == 1) {
        this.cargarHeroes()
      } else {
        alert(data.msg)
      }
    })
  }


}
