import { Directive, HostListener, ElementRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Directive({
  selector: '[appNumero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any): void {
    let valor = $event.target.value;
    const posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
        valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }
    $event.target.value = valor;
    this.onChange(valor);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
