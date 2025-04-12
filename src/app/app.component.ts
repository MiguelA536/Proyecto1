import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChamoyComponent } from "./chamoy/chamoy.component";
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChamoyComponent, CuerpoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HolaMundo';
}
