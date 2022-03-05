import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  tabuada() {
    let div = document.getElementById('tabuada');

    for (let i = 1; i < 11; i++) {
      let p = document.createElement('p');
      p.innerHTML += '5 X ' + i + '= ' + i * 5;
      div.appendChild(p);
    }
  }
}
