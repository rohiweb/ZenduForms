import { createReducer, on } from '@ngrx/store';
import { filterSubmissions, getSubmissions, selectSubmission, setSubmissions, setSubmissionsError } from './submissions.actions';
import { SubmissionsState } from './submissions.state';
import { differenceInDays } from 'date-fns';

export const initialSubmissionsState: SubmissionsState = {
  items: [],
  filteredItems: [],
  filters: {
    from: '',
    status: -1,
    date: new Date()
  },
  selectedItem: undefined,
  error: null,
  isLoading: false
};

export const submissionsReducer = createReducer(
  initialSubmissionsState,
  on(getSubmissions, (state): SubmissionsState => ({...state, isLoading: true})),
  on(setSubmissions, (state, {submissions}): SubmissionsState => ({
    ...state, 
    items: submissions, 
    isLoading: false, 
    filteredItems: submissions.filter(
      item => (state.filters.from === '' || item.from === state.filters.from)
            && (state.filters.status === -1 || item.status === state.filters.status) 
            && differenceInDays(item.dueDate, state.filters.date) < 5)})
  ),
  on(filterSubmissions, (state, {from, status, date}): SubmissionsState => ({
    ...state, 
    filteredItems: state.items.filter(
      item => (from === '' || item.from === from) 
            && (status === -1 || item.status === status) 
            && differenceInDays(item.dueDate, date) < 5), 
    filters: { from: from, status: status, date: date}})
  ),
  on(setSubmissionsError, (state, {error}): SubmissionsState => ({...state, error: error, isLoading: false})),
  on(selectSubmission, (state, { submission }): SubmissionsState => ({...state, selectedItem: submission}))
);