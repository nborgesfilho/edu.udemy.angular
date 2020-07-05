import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum', () => {
    const number1 = 1;
    const number2 = 10;
    const op = '+';
    const expected = 11;
    const result = service.calc(number1, number2, op);
    expect(result).toEqual(expected);

  });

  it('should sub', () => {
    const number1 = 1;
    const number2 = 10;
    const op = '-';
    const expected = -9;
    const result = service.calc(number1, number2, op);
    expect(result).toEqual(expected);

  });

  it('should div', () => {
    const number1 = 10;
    const number2 = 1;
    const op = '/';
    const expected = 10;
    const result = service.calc(number1, number2, op);
    expect(result).toEqual(expected);

  });

  it('should mult', () => {
    const number1 = 10;
    const number2 = 10;
    const op = '*';
    const expected = 100  ;
    const result = service.calc(number1, number2, op);
    expect(result).toEqual(expected);

  });

});
