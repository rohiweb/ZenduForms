import { SubmissionsState } from "./submissions/submissions.state";

export interface AppState {
  route: {
    current: string;
    segments: string[];
  }
  submissions: SubmissionsState;
}