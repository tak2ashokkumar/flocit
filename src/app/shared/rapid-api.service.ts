import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RapidApiService {

  constructor(private http: HttpClient) { }

  // getPercentageByNames(formData: FormValues): Observable<LoveCalculatorOutput> {
  //   let headers: HttpHeaders = new HttpHeaders().set('x-rapidapi-host', 'love-calculator.p.rapidapi.com').append('x-rapidapi-key', RAPID_API_KEY());
  //   return this.http.get<LoveCalculatorOutput>(GET_LOVE_PERCENTAGE(formData.boyname, formData.girlname), { headers: headers });
  // }

  getCovidStatistics(country?: string): Observable<CovidStatisticsObject> {
    let headers: HttpHeaders = new HttpHeaders().set('x-rapidapi-host', 'covid-193.p.rapidapi.com').append('x-rapidapi-key', RAPID_API_KEY());
    return this.http.get<CovidStatisticsObject>(GET_COVID_DATA(country), { headers: headers });
  }
}


export const RAPID_API_KEY = () => `17657b4f76msh44aa853e1c8deb6p165dacjsncb5ba85cccae`;

export const LOVE_CALCULATOR_HOST = () => `love-calculator.p.rapidapi.com`;

export const COVID_TRACKER_HOST = () => `covid-193.p.rapidapi.com`;

export const QUOTE_OF_THE_DAY_HOST = () => `quotes15.p.rapidapi.com`;


export const GET_LOVE_PERCENTAGE = (fname: string, sname: string) => {
  return `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`;
}

export const GET_COVID_DATA = (country?: string) => {
  if (country) {
      return `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
  } else {
      return `https://covid-193.p.rapidapi.com/statistics`;
  }
}

export const GET_QUOTE_OF_THE_DAY = () => {
  return `https://quotes15.p.rapidapi.com/quotes/random/?language_code=en`;
}


export class LoveCalculatorOutput {
  fname: string;
  sname: string;
  percentage: string;
  result: string;
  constructor(fname: string, sname: string, percentage: string, result: string) {
    this.fname = fname;
    this.sname = sname;
    this.percentage = percentage;
    this.result = result;
  }
}

// for covid data
export interface CovidStatisticsObject {
  get: string;
  parameters: CovidAPIParameter;
  errors: any[];
  results: number;
  response: CovidResponseItem[];
}
export interface CovidAPIParameter {
  country: string;
}
export interface CovidResponseItem {
  continent: string;
  country: string;
  population: number;
  cases: CovidCases;
  deaths: CovidDeaths;
  tests: CovidTests;
  day: string;
  time: string;
}
export interface CovidCases {
  'new': string;
  active: number;
  critical: number;
  recovered: number;
  '1M_pop': string;
  total: number;
}
export interface CovidDeaths {
  'new': null;
  '1M_pop': string;
  total: number;
}
export interface CovidTests {
  '1M_pop': string;
  total: number;
}


