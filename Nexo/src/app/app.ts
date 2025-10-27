import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './features/navigation/navigation';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navigation,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nexo';
}
