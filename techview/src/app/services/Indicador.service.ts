import { Injectable } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Estrutura } from '../models/Estrutura';


@Injectable(
{
    providedIn: 'root'
})

export class IndicadorService {
    sub!: Subscription;
    private indicadorGetUrl = 'http://localhost:5266/api/allusers';

    constructor(private http: HttpClient){}

    getAllIndicadores(): Observable<IEstrutura[]>
    {
        return this.http.get<IEstrutura[]>(this.indicadorGetUrl);
    }
}