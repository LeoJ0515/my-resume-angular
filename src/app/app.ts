import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,              // required for Angular 15+ standalone components
  imports: [CommonModule, TitleCasePipe],  // import CommonModule for *ngIf, *ngFor, ngClass
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  currentPage: string = 'home';

  galleryImages = [
    'assets/images/Firewatch-BWStars.png',
    'assets/images/FirewatchBlue.png',
    'assets/images/Orange.png',
    'assets/images/wp10531700-firewatch-4k-wallpapers.png'
  ];

  skills = [
    { icon: '☕', name: 'Java', class: 'java', width: '70%' },
    { icon: '🅰️', name: 'Angular', class: 'angular', width: '60%' },
    { icon: '🗄️', name: 'SQL & Databases', class: 'sql', width: '65%' },
    { icon: '🌐', name: 'Web Design', class: 'web', width: '60%' }
  ];

  contact = [
    { icon: '📧', label: 'jyunleong030515@gmail.com', link: 'mailto:jyunleong030515@gmail.com' },
    { icon: 'in', label: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/leong-jyun-859195299/' },
    { icon: '🐙', label: 'GitHub Repositories', link: 'https://github.com/LeoJ0515' },
    { icon: '📞', label: 'Phone: +60-123456789' },
    { icon: '📍', label: 'Location: Malaysia' }
  ];

  setPage(page: string) {
    this.currentPage = page;

    // Animate skill bars if on skills page
    if (page === 'skills') {
      setTimeout(() => {
        const bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
          const el = bar as HTMLElement;
          const width = el.getAttribute('data-width');
          if (width) el.style.width = width;
        });
      }, 100);
    }
  }
}
