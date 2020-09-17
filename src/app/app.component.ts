import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Green Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Nice green three',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mountain',
      content: 'Nice picture of mountain',
    },
    {
      title: 'Road Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'goBikes',
      content: 'Bike trail',
    },
  ];
}
