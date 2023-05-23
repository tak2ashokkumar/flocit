import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  constructor(private http: HttpClient) { }

  getPDFFromURL(url: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let data: Test = new Test(PUBLIC_API_HTML_TO_PDF_KEY());
    data.url = url;
    return this.http.post(GENERATE_PDF(), data, { headers, responseType: 'blob' });
  }

  getPDFFromHTML(html: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let data: Test = new Test(PUBLIC_API_HTML_TO_PDF_KEY());
    data.html = html;
    return this.http.post(GENERATE_PDF(), data, { headers, responseType: 'blob' });
  }
}

export const PUBLIC_API_HTML_TO_PDF_KEY = () => `f4f43eec2b51c6801e81fd60df8c1fcd336f0585d7bd7d4308c4ad39b5b39e33`;

export const GENERATE_PDF = () => `https://api.html2pdf.app/v1/generate/`;

class Test {
  apiKey: string;
  url?: string;
  html?: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
}
