import { Component, OnInit } from '@angular/core';

import {CalculadoraService} from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private op: string;

  constructor(private service: CalculadoraService) {

  }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.op = null;
  }

  addNumber(num: string): void {
    if (this.op === null) {
      this.number1 = this.concat(this.number1, num);
    } else {
      this.number2 = this.concat(this.number2, num);
    }
  }

 concat(current: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (current === '0' || current === null) {
      current = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && current === '') {
      return '0.';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && current.indexOf('.') > -1) {
      return current;
    }
    return current + numConcat;
  }


  defineOp(op: string): void {
    if (this.op === null) {
      this.op = op;
      return;
    }

    if (this.number2 !== null) {
      this.result = this.service.calc(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.op);
      this.op = op;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calc(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.service.calc(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.op);
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1;
  }


}
