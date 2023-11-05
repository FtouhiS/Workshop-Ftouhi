import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit {
  searchtext: string = '';
  listusers: User[] = [
   
  ];
constructor(private userserv:UserService){}
ngOnInit() {
  this.userserv.fetchAllUsers().subscribe({
    next: (data) => this.listusers = data as User[],
    error: (err) => console.log(err),
  })
  console.log(
    this.userserv.fetchNbInList(
      this.listusers,
      'accountCategory',
      'Customer'
    )
  );
}
ngOnDestroy() {
  this.listusers = [];
  console.log(this.listusers);
  console.log('I m destroyed');
}
deleteUser(id: number) {

  this.userserv.deleteUser(id).subscribe({
    next: () =>
      (this.listusers = this.listusers.filter((u) => u.id != id)),
    error: (err) => console.log(err),
  });
}



  onCalculateClick(attribute: string, attributeVal: string) {
    // Pass the list of users (this.listusers) to fetchNbInList
    const filteredUsers = this.userserv.fetchNbInList(this.listusers, attribute, attributeVal);
    console.log('Nombre d\'utilisateurs filtrés :', filteredUsers.length);
  }


  
  searchUser() {
    this.searchtext != ''
      ? (this.listusers = this.listusers.filter(
          (u) => u.accountCategory == this.searchtext
        ))
      : (this.listusers = this.listusers);
  }


}
