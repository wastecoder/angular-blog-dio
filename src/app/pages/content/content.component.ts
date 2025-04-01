import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png';
  contentTitle: string = 'Título padrão';
  contentDescription: string = 'Descrição padrão';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id || '0');
    });
  }

  setValuesToComponent(id: string) {
    const numericId = parseInt(id, 10);
    const selectedComponent = fakeData.find(
      (article) => article.id === numericId
    );

    if (selectedComponent) {
      this.contentTitle = selectedComponent.contentTitle;
      this.contentDescription = selectedComponent.description;
      this.photoUrl = selectedComponent.photoUrl;
    } else {
      alert('Artigo [' + id + '] não encontrado!');
    }
  }
}
