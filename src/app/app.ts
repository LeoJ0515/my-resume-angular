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
    'assets/Firewatch-B&WStars.png',
    'assets/FirewatchBlue.png',
    'assets/Orange.png',
    'assets/Dark.png',
    'assets/wp10531700-firewatch-4k-wallpapers.png'
  ];

  skills = [
    { icon: '☕', name: 'Java', class: 'java', width: '60%' },
    { icon: '🅰️', name: 'Angular', class: 'angular', width: '60%' },
    { icon: '🗄️', name: 'SQL & Databases', class: 'sql', width: '65%' },
    { icon: '🌐', name: 'Web Design', class: 'web', width: '80%' },
    { icon: '🎨', name: 'HTML5 & CSS3', class: 'html-css', width: '75%' },
    { icon: '🐘', name: 'PHP', class: 'php', width: '65%' },
    { icon: '🟢', name: 'JavaScript', class: 'javascript', width: '65%' },
    { icon: '🍃', name: 'Spring Boot', class: 'springboot', width: '50%' }
  ];

  contact = [
    { icon: '📧', label: 'jyunleong030515@gmail.com', link: 'mailto:jyunleong030515@gmail.com' },
    { icon: 'in', label: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/leong-jyun-859195299/' },
    { icon: '🐙', label: 'GitHub Repositories', link: 'https://github.com/LeoJ0515' },
    { icon: '📞', label: 'Phone: +60-102943918' },
    { icon: '📍', label: 'Location: Malaysia Kangar Perlis' }
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
