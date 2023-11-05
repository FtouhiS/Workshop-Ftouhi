import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
/////////////pour l injection du service//////////
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.baseUrl+"users/";

constructor(private HttpCLT :HttpClient) { }
//getAllUsers(){
 // return  new Observable((o)=>{
   //setTimeout(()=> o.next(this.list),2000);
   //o.error('error');
   //o.complete();
  //});
//}


fetchNbInList(list: any, attribute:string, attributeVal: string){
  return list.filter((e:any)=>e[attribute]===attributeVal.length);
}
fetchAllUsers() {
  return this.HttpCLT.get(this.apiUrl);
}
addUser(body:User){
    return this.HttpCLT.post(this.apiUrl,body);

}
updateUser(id:number,body:User){
    return this.HttpCLT.put(this.apiUrl+id,body);

}
deleteUser(id:number){
    return this.HttpCLT.delete(this.apiUrl+id)

}











}
