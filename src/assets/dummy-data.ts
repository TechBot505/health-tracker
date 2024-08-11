import { User } from "../interfaces/user";

export const Users: User[] = [
  {
    name: 'Ted Mosby',
    workouts: [
      { workoutType: 'Badminton', workoutMinutes: 30 },
      { workoutType: 'Cycling', workoutMinutes: 45 }
    ]
  },
  {
    name: 'Barney Stinson',
    workouts: [
      { workoutType: 'Swimming', workoutMinutes: 60 },
      { workoutType: 'Running', workoutMinutes: 20 }
    ]
  },
  {
    name: 'Marshal Erikson',
    workouts: [
      { workoutType: 'Meditation', workoutMinutes: 50 },
      { workoutType: 'Basketball', workoutMinutes: 40 }
    ]
  }
];
