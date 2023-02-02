import { Submission } from "src/app/models/submission.model";

export interface SubmissionsState {
  items: Submission[];
  filteredItems: Submission[];
  filters: {
    from: string;
    status: number;
    date: Date;
  }
  selectedItem: Submission | undefined;
  error: Error | null;
  isLoading: boolean
}