import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  index = 0;
  yes = false;
  yesButtonSize = 12;
  phrases = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Surely not?',
    'Think again!',
    'Last chance!',
    'Give it another thought!',
    'Are you absolutely certain?',
    'You might regret this!',
    'Pookie please',
    'Have a heart!',
    "Don't be so cold!",
    'You can always reconsider!',
    "I'm gonna cry...",
    'You are breaking my heart ;(',
  ];

  handleNo() {
    this.yesButtonSize = this.yesButtonSize + 16;
    console.log(this.yesButtonSize);

    this.index > this.phrases.length - 2
      ? (this.index = -1)
      : (this.index += 1);
  }

  setStyle() {
    return {
      'font-size.px': this.yesButtonSize,
      'padding.px': this.yesButtonSize,
    };
  }
}
