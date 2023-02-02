import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Submission } from 'src/app/models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private http: HttpClient) { }

  getSubmissions(q: string): Observable<Submission[]> {
    // Fake API from https://dummyjson.com/docs/users
    // Transform Users into Submissions
    interface FakeItem {
      firstName: string;
      lastName: string;
      hair: {
        color: string;
      },
      email: string;
      bloodGroup: string;
      address: {
        coordinates: google.maps.LatLngLiteral
      },
      birthDate: string
    }
    interface FakeData {
      users: FakeItem[];
    }

    return this.http.get<FakeData>(`https://dummyjson.com/users/search?q=${q}&limit=100`).pipe(
      map((data: FakeData) => data.users.map((item: FakeItem) => ({
        name:  `Work Flow: ${item.firstName} ${item.lastName}`,
        from: item.hair.color.toLowerCase() + '@gmail.com',
        to: item.email,
        dueDate: new Date(new Date().setDate((new Date(item.birthDate)).getDate())),
        status: item.bloodGroup[0] === 'A' ? 1 : item.bloodGroup[0] === 'B' ? 2 : 0,
        location: {
          lat: item.address.coordinates.lat,
          lng: item.address.coordinates.lng
        }
      }))));
  }
}
