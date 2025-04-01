import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-card',
  imports: [RouterModule],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.css',
})
export class VerticalCardComponent {
  @Input()
  photoUrl: string = '';

  @Input()
  publishDate: string = 'Mês, Ano';

  @Input()
  cardTitle: string = 'Título padrão';

  @Input()
  cardSumary: string = 'Resumo padrão';

  @Input()
  id: string = '0';
}
