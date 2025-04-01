import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  photoUrl: string = '';

  @Input()
  publishDate: string = 'Mês, Ano';

  @Input()
  cardTitle: string = 'Título padrão';

  @Input()
  id: string = '0';
}
