import { Workout } from "./workout";

export interface User {
  name: string;
  workouts: Workout[];
}
