import { Component, signal } from '@angular/core';

// importando componente header
import { Header } from './components/header/header';

// importando componentes de interpolación
import { Interpolacion } from './components/interpolacion/interpolacion';

// importando componentes de binding 
import { Binding } from './components/binding/binding';

// importando componedes de control de flujo
import { Ej05ControlFlow } from './components/ej05-control-flow/ej05-control-flow';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [Header, Interpolacion, Binding, Ej05ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-s03-lab');
}
