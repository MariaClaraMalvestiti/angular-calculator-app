import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  numberA: number = 0;
  numberB: number = 0;
  result: number = 0;

  add(): void {
    this.result = this.numberA + this.numberB;
  }
  multiply(): void {
    this.result = this.numberA * this.numberB;
    }
    divide() {
      if(this.numberB == 0) {
        alert('No se puede dividir por 0');
        return;
      }
      this.result = this.numberA / this.numberB;
    }
    subtract() {
      this.result = this.numberA - this.numberB;
    }

    clear() {
      this.numberA = 0;
      this.numberB = 0;
      this.result = 0;
    }

  }
