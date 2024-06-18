import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  welcome = 'hola';
  tasks = [
    'instalar  el angular  cli',
    'crear proyecto',
    'crear componentes',
    'crear servicio'
    
  ];
}
