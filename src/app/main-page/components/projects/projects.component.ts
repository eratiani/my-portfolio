import { Component } from '@angular/core';

export interface project {
  id: number;
  title: string;
  description: string;
  date: string;
  deploylink?: string;
  repoLink: string;
  tools: string;
  imgLink?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: project[] = [
    {
      id: 1,
      title: 'project-1',
      description: 'my first project',
      date: 'Sep 13, 2021',
      deploylink: 'https://eratiani.github.io/project-1/',
      repoLink: 'https://github.com/eratiani/project-1',
      tools: 'HTML/CSS',
    },
    {
      id: 2,
      title: 'project-2',
      description: 'my first SCSS project',
      date: 'Oct 22, 2021',
      deploylink: 'https://eratiani.github.io/profect-2/',
      repoLink: 'https://github.com/eratiani/profect-2',
      tools: 'HTML/SCSS',
    },
    {
      id: 3,
      title: 'project-3',
      description:
        'after leaving codig for a long time i started going to collage and studying online, this is my first project with bootstrap',
      date: 'Apr 6, 2022',
      deploylink:
        'https://raw.githack.com/eratiani/learningBootstrap/df45a0c196cc1a80cdfda5b94774a83b944150ef/index.html',
      repoLink: 'https://github.com/eratiani/learningBootstrap',
      tools: 'HTML/CSS/Bootstrap',
    },
    {
      id: 4,
      title: 'order summary in scss',
      description: 'i recreated my old css project into scss',
      date: 'Apr 8, 2022',
      deploylink: 'https://eratiani.github.io/project/',
      repoLink: 'https://github.com/eratiani/project',
      tools: 'HTML/SCSS',
    },
    {
      id: 5,
      title: 'furniture store',
      description: 'furniture store project for collage',
      date: 'Apr 8, 2022',
      deploylink: 'https://eratiani.github.io/project/',
      repoLink: 'https://github.com/eratiani/project',
      tools: 'HTML/CSS/Bootstrap',
    },
    {
      id: 6,
      title: 'Pizza store',
      description:
        'everyone loves pizza, i did this project as learning process for college',
      date: 'Apr 9, 2022',
      deploylink:
        'https://raw.githack.com/eratiani/learning_bootstrap2/a1596ab66f632bd69a8882bc6c1c46888178d0f4/index.html',
      repoLink: 'https://github.com/eratiani/learning_bootstrap2',
      tools: 'HTML/CSS/Bootstrap',
    },
    {
      id: 7,
      title: 'hiking gallery website',
      description:
        "IT'S TIME FOR HIKING, i did this project as learning process for college",
      date: 'Apr 9, 2022',
      deploylink:
        'https://raw.githack.com/eratiani/learning4/8b5b037f430ab692404296f29f658bfb7f6dc8ef/index.html#',
      repoLink: 'https://github.com/eratiani/learning4',
      tools: 'HTML/CSS/Bootstrap',
    },
    {
      id: 8,
      title: 'inheritance project',
      description:
        'this project was task for RS School js course, deep dive into obj inheritance with prototypes and classes',
      date: 'Jun 20, 2022',
      repoLink: 'https://github.com/eratiani/inheritance',
      tools: 'Javascript',
    },
    {
      id: 9,
      title: 'English For Kids',
      description:
        'this project was task for RS School js course, it is a game for children to learn english',
      date: 'Jul 12, 2022',
      deploylink: 'https://eratiani.github.io/english-for-kids/index.html',
      repoLink: 'https://github.com/eratiani/english-for-kids',
      tools: 'HTML/Css/Javascript',
    },
    {
      id: 10,
      title: 'Shelter For Pets',
      description:
        'this project was task for RS School js course, it is a pixel perfect project from figma',
      date: 'Oct 14, 2022',
      deploylink: 'https://eratiani.github.io/shelter/index.html',
      repoLink: 'https://github.com/eratiani/shelter',
      tools: 'HTML/Css/Javascript',
    },
    {
      id: 11,
      title: 'Books-Shop',
      description:
        'this project was task for RS School js course, it is done fully with js, also my own design',
      date: 'Nov 27, 2022',
      deploylink: 'https://eratiani.github.io/Books-shop/index.html',
      repoLink: 'https://github.com/eratiani/Books-shop',
      tools: 'HTML/Css/Javascript',
    },
    {
      id: 12,
      title: 'Online-Zoo',
      description:
        'this project was task for RS School js course, it is a pixel perfect project from figma',
      date: 'Oct 25, 2022',
      deploylink: 'https://eratiani.github.io/Online-zoo/',
      repoLink: 'https://github.com/eratiani/Online-zoo',
      tools: 'HTML/Css/Javascript',
    },
    {
      id: 13,
      title: 'Async-Cars',
      description:
        'this project was task for RS School js course, it was a great learning expirience for async javascript, to see working task u must run it on local machine',
      date: 'Jan 11, 2023',
      deploylink: 'https://eratiani.github.io/async--cars/index.html',
      repoLink: 'https://github.com/eratiani/async--cars',
      tools: 'HTML/Css/Javascript/webpack',
    },
    {
      id: 14,
      title: 'core-js-101',
      description:
        'this project was task for RS School js course, it was a great learning expirience for javascript core functions, finished every task listed',
      date: 'Jan 21, 2023',
      repoLink: 'https://github.com/eratiani/core-js-101',
      tools: 'Javascript',
    },
    {
      id: 15,
      title: 'news-JS',
      description:
        'this project was task for RS School js course, it was a great learning expirience for typescript, fully migrated existing project to typescript',
      date: 'Jan 31, 2023',
      repoLink: 'https://github.com/eratiani/news-JS',
      tools: 'Typescript',
    },
    {
      id: 16,
      title: 'mapty-app',
      description:
        'this project was task for Udemy js course, it was a great learning expirience for using api. it is website to log your running/cycling data',
      date: 'Feb 17, 2023',
      deploylink: 'https://eratiani.github.io/mapty--app/',
      repoLink: 'https://github.com/eratiani/mapty--app',
      tools: 'geo api/javascript',
    },
    {
      id: 17,
      title: 'project-management-app',
      description:
        'this project was task for RS School js course, it was a great learning expirience with angular and also my first task with it. it is website to create board and fill it with data, app is fully deployed on railway/fiorebase',
      date: 'Apr 5, 2023',
      deploylink:
        'https://project-management-app-deploy.web.app/project-management-app/board/main',
      repoLink: 'https://github.com/eratiani/project-management-app',
      tools: 'Angular',
    },
    {
      id: 18,
      title: 'Yutube-client-app',
      description:
        'this project was task for RS School Angular, it was a great learning expirience with angular course. this website uses google developers account to make api calls to Youtube, app is fully deployed on railway/fiorebase. source code is in RS School private repo',
      date: 'Apr 16, 2023',
      deploylink: 'https://client-app-383810.web.app/Home/logIn',
      repoLink:
        'https://github.com/rolling-scopes-school/eratiani-ANGULAR2023Q1/tree/Yutube-client-app',
      tools: 'Angular',
    },
    {
      id: 19,
      title: 'Airways',
      description:
        'this is project i am most proud of so far, project was final task for RS School  Angular course, it was done in pairs and was great experience for development process of a project, unfortunatelly we did not have back end so app needs to run locally',
      date: 'May 29, 2023',
      repoLink: 'https://github.com/eratiani/airways/pull/2',
      tools: 'Angular',
    },
  ];
}
