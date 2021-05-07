import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      title: 'A walk in the woods',
      url: 'https://images.unsplash.com/photo-1487111023822-2e903e12f6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29vZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Climb!',
      url: 'https://images.unsplash.com/photo-1610347598525-6ec7cf8d7624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Farm',
      url: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
  ]

  setCurrentPage(pageSelection){
    this.currentPage = pageSelection;
  }
}
