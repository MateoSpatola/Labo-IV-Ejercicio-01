import { Component, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Ejercicio 01';

  edadUno: number | null = null;
  edadDos: number | null = null;
  promedio: number | null = null;
  suma: number | null = null;

  calcular() : void
  {
    if (this.edadUno !== null && this.edadDos !== null)
    {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = (this.edadUno + this.edadDos) / 2;
    }
    else
    {
      alert("Debe completar ambas edades antes de calcular!")
    }
  }

  limpiar() : void
  {
    this.edadUno = null;
    this.edadDos = null;
    this.promedio = null;
    this.suma = null;
  }

}
