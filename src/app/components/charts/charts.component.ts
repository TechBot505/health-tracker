import { AgChartOptions } from 'ag-charts-community';
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { User } from '../../interfaces/user';
import { Users } from '../../../assets/dummy-data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent implements OnInit {
  public chartOptions: AgChartOptions;

  users: User[] = [];
  paginatedUsers: User[] = [];
  currentPage = 1;
  itemsPerPage = 4;
  pagesArray: number[] = [];

  constructor (private workoutService : WorkoutService) {
    this.chartOptions = {
      title: { text: `Ted Mosby's Workout Progress` },
      data: [
        { workoutType: 'Badminton', workoutMinutes: 30 },
        { workoutType: 'Cycling', workoutMinutes: 45 }
      ],
      series: [{ type: 'bar', xKey: 'workoutType', yKey: 'workoutMinutes' }],
    }
  }

  ngOnInit() {
    this.loadInitialUsers();
    this.workoutService.loadUsersFromLocalStorage(this.users);
    this.paginateUsers();
  }

  public loadInitialUsers = () => {
    this.users = Users;
  }

  public paginateUsers = () => {
    this.paginatedUsers = this.users.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
    this.generatePagesArray(this.users.length);
  }

  goToPage(page: number) {
    if (page > 0 && page <= this.pagesArray.length) {
      this.currentPage = page;
      this.paginateUsers();
    }
  }

  generatePagesArray(totalItems: number) {
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  onClick(user: User) {
    console.log(user.workouts);
    this.chartOptions = {
      title: { text: `${user.name}'s Workout Progress` },
      data: user.workouts,
      series: [{ type: 'bar', xKey: 'workoutType', yKey: 'workoutMinutes' }],
    }
  }
}
