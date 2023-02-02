export interface Submission {
  name: string;
  from: string;
  to: string;
  dueDate: Date;
  status: number;
  location: google.maps.LatLngLiteral
}