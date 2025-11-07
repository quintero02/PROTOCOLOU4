import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private API = 'http://localhost:4000/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.API);
  }
}
