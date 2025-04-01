import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoUrl: string = '';
  @Input()
  publishDate: string = 'Mês, Ano';
  @Input()
  cardTitle: string = 'Título padrão';
  @Input()
  cardDescription: string = 'Descrição padrão';
}
