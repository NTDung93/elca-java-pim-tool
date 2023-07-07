import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://localhost:8080';
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.projectUrl}/project/add`, project);
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectUrl}/project/all`);
  }

  public searchProjects(searchText: String, status: String): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectUrl}/project/search/${searchText}/${status}`);
  }

  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.projectUrl}/project/delete/${projectId}`
    );
  }

  public getProjectByNumber(number: number): Observable<Project> {
    return this.http.get<Project>(`${this.projectUrl}/project/${number}`);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.projectUrl}/project/update`, project);
  }
}
