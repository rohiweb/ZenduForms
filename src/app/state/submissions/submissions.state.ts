import { Submission } from "src/app/models/submission.model";

export interface SubmissionsState {
  items: Submission[];
  selectedItem: Submission | undefined;
}