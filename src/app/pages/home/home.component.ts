import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { VerticalCardComponent } from '../../components/vertical-card/vertical-card.component';

@Component({
  selector: 'app-home',
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    VerticalCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
