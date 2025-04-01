import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
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

  @Input()
  id: string = '0';
}
