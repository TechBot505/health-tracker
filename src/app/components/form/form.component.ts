import { WorkoutService } from './../../services/workout.service';
import { Component } from '@angular/core';
import { Form } from '../../interfaces/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  workout: Form = {
    name: '',
    workoutType: 'Basketball',
    workoutMinutes: null as number | null
  };

  constructor(private router: Router, private workoutService: WorkoutService) {}

  onSubmit(form: any) {
    this.workoutService.addUserToLocalStorage(form, this.workout);
    this.router.navigate(['/dashboard']);
  }
}
