import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IIndicador } from '../models/Indicador';

@Injectable({
    providedIn: 'root'
})

export class IndicadorService
{
    sub!: Subscription;
    private indicadorGetURL = 'http://';

    constructor(private http: HttpClient){}

    getAllIndicadores(): Observable<IIndicador[]> {
        return this.http.get<IIndicador[]>(this.indicadorGetURL);
    }
    
}