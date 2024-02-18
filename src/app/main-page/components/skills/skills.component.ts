import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/core/shared/scroll.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('changeColor', [
      state(
        'inactive',
        style({
          backgroundColor: 'transparent',
        })
      ),
      state(
        'active',
        style({
          backgroundColor: '{{ color }}',
        }),
        { params: { color: '#ffffff' } }
      ),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class SkillsComponent implements OnInit, OnDestroy {
  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    setInterval(this.changeRandomColor, 500);
    this.scrollSubscription = this.scrollService.scrollSubject.subscribe(
      (section: string) => {
        if (section === 'mySkills') {
          this.scrollToContact();
        }
      }
    );
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  scrollToContact() {
    const contactElement = document.getElementById('mySkills');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  changeRandomColor() {
    const listItems = document.querySelectorAll('#mySkills li');
    const randomIndex = Math.floor(Math.random() * listItems.length);
    const randomColor = 'rgb(173, 216, 230)';

    (listItems[randomIndex] as HTMLLIElement).style.backgroundColor =
      randomColor;
    setTimeout(() => {
      (listItems[randomIndex] as HTMLLIElement).style.backgroundColor = '';
    }, 1000);
  }
}
