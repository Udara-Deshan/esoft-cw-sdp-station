import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AuthUserDTO} from "./AuthUserDTO";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.authUrl;

  private currentUserSubject: BehaviorSubject<AuthUserDTO | null>;
  private currentUser!: Observable<AuthUserDTO | null>;

  constructor(private httpClient: HttpClient,
              private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<AuthUserDTO | null>
    (JSON.parse(sessionStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get getCurrentUser(): AuthUserDTO | null {
    return this.currentUserSubject.value;
  }

  isLodged(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.url, {
      username,
      password
    }).pipe(map((user:any) => {
      this.currentUserSubject.next(user.content as AuthUserDTO);
      sessionStorage.setItem('currentUser', JSON.stringify(user.content));
      return user;
    }));
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

}
