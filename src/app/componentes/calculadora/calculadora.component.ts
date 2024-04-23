import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sumadora } from '../../clases/sumadora';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
public mostrarDetalle:boolean = false;
  sumadora: Sumadora;

constructor(){
  this.sumadora = new Sumadora();
}

}
