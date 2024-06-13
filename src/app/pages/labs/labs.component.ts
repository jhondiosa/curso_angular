import { CommonModule} from '@angular/common';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'bienvenido a mi primera aplicacion acon angular';
  tasks = signal([
    'instalar  el angular  cli',
    'crear proyecto',
    'crear componentes',
    'crear servicio'
    
  ]);
  name = signal('jhon');
  age = 30;
  disabled = true;
  img ='https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'jhon',
    age: 18,
    avatar:'https://w3schools.com/howto/img_avatar.png'

  }

  clickHandler() {
    alert('hola')
  }

changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newvalue = input.value;
  this.name.set(newvalue);
}

keydownHandler(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  console.log(input.value);

}

}
