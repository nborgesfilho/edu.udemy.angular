import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MULT: string = '*';

  constructor() { }

  calc(number1: number, number2: number, op: string): number {
    let res: number;
    switch (op) {
      case CalculadoraService.SUB:
        res = number1 - number2;
        break;
      case CalculadoraService.SUM:
        res = number1 + number2;
        break;
      case CalculadoraService.MULT:
        res = number1 * number2;
        break;
      case CalculadoraService.DIV:
        res = number1 / number2;
        break;
    }
    return res;
  }
}
