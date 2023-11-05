import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Product } from '../core/product';
/////////////pour l injection du service//////////
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiUrl = environment.baseUrl+"products/";

constructor(private HttpCLT :HttpClient) { }



fetchNbInList(list: any, attribute:string, attributeVal: string){
  return list.filter((e:any)=>e[attribute]===attributeVal.length);
}
fetchAllProducts() {
  return this.HttpCLT.get(this.apiUrl);
}
addProduit(body:Product){
    return this.HttpCLT.post(this.apiUrl,body);

}
updateProduit(id:number,body:Product){
    return this.HttpCLT.put(this.apiUrl+id,body);

}
deleteProduit(id:number){
    return this.HttpCLT.delete(this.apiUrl+id)

}











}
