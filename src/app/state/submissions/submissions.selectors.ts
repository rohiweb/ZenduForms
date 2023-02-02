import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SubmissionsState } from "./submissions.state";

export const selectSubmissions = createFeatureSelector<SubmissionsState>('submissions');
export const selectFilteredSubmissions = createSelector(
  selectSubmissions,
  (submissionsState: SubmissionsState) => submissionsState.filteredItems
);
export const selectIsLoading = createSelector(
  selectSubmissions,
  (submissionsState: SubmissionsState) => submissionsState.isLoading
);

export const selectSelectedSubmission = createSelector(
  selectSubmissions,
  (submissionsState: SubmissionsState) => submissionsState.selectedItem
);