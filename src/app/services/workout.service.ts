import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Form } from '../interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  constructor() {}

  getTotalWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, workout) => total + workout.workoutMinutes, 0);
  }

  getWorkoutTypes(user: User): string {
    return user.workouts.map(workout => workout.workoutType).join(', ');
  }

  clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  loadUsersFromLocalStorage = (users: User[]) => {
    const localStorageUsers = JSON.parse(localStorage.getItem('workouts') || '[]');
    localStorageUsers.forEach((localStorageUser: any) => {
      const userIndex = users.findIndex(user => user.name === localStorageUser.name);
      if (userIndex !== -1) {
        users[userIndex].workouts.push({
          workoutType: localStorageUser.workoutType,
          workoutMinutes: localStorageUser.workoutMinutes
        });
      } else {
        users.push({
          name: localStorageUser.name,
          workouts: [
            {
              workoutType: localStorageUser.workoutType,
              workoutMinutes: localStorageUser.workoutMinutes
            }
          ]
        });
      }
    });
  }

  addUserToLocalStorage(form: any, workout: Form) {
    if (form.valid) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
    }
  }
}
