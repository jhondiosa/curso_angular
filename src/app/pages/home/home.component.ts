import { Component, signal } from '@angular/core';
import { CommonModule,} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome = 'bienvenido a mi primera aplicacion acon angular';
  tasks = signal([
    'instalar  el angular  cli',
    'crear proyecto',
    'crear componentes',
    'crear servicio'
    
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    this.tasks.update((tasks) =>[ ...tasks, newTasks])

  }

  deleteTask(index: number) {
    this.tasks.update((tasks)=> tasks.filter((task, position) =>position !== index));

  }

}
