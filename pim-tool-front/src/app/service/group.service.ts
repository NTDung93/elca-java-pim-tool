import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../model/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://localhost:8080';
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.projectUrl}/group/all`);
  }
}