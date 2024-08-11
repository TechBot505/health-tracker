import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Users } from '../../assets/dummy-data';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  users: User[] = [];
  paginatedUsers: User[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  pagesArray: number[] = [];
  searchWord: string = '';
  filterType: string = '';
  itemsPerPageOptions = [5, 10, 15, 20];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadInitialUsers();
    this.workoutService.loadUsersFromLocalStorage(this.users);
    this.applyFilters();
  }

  public loadInitialUsers = () => {
    this.users = Users;
  }

  public applyFilters = () => {
    let filteredUsers = this.users;

    if (this.searchWord) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(this.searchWord.toLowerCase())
      );
    }

    if (this.filterType && this.filterType !== 'All') {
      filteredUsers = filteredUsers.filter(user =>
        user.workouts.some(workout => workout.workoutType === this.filterType)
      );
    }

    this.paginatedUsers = filteredUsers.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
    this.generatePagesArray(filteredUsers.length);
  }

  paginateUsers() {
    this.applyFilters();
  }

  goToPage(page: number) {
    if (page > 0 && page <= this.pagesArray.length) {
      this.currentPage = page;
      this.paginateUsers();
    }
  }

  updateItemsPerPage() {
    this.currentPage = 1;
    this.applyFilters();
  }

  generatePagesArray(totalItems: number) {
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  getTotalWorkoutMinutes(user: User): number {
    return this.workoutService.getTotalWorkoutMinutes(user);
  }

  getWorkoutTypes(user: User): string {
    return this.workoutService.getWorkoutTypes(user);
  }

  deleteWorkouts() {
    this.workoutService.clearLocalStorage();
  }
}
