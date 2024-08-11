import { Component } from '@angular/core';
import { Workout } from '../../interfaces/workout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  workout: Workout = {
    userName: '',
    age: null as number | null,
    workoutType: 'Basketball',
    workoutMinutes: null as number | null
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(this.workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
      this.router.navigate(['/dashboard']);
    }
  }
}
