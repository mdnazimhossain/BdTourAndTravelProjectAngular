import { Component } from '@angular/core';
import { Package } from '../model/model';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-packag-list',
  templateUrl: './packag-list.component.html',
  styleUrls: ['./packag-list.component.css']
})
export class PackagListComponent {
  package?: Package[];
  currentPackage: Package = {};
  currentIndex = -1;
  title = '';

 // currentIndex for searching

 constructor(private bookingService: ServiceFileService){}


 ngOnInit(): void {
  this.retrievePackages();
}



  // geAll data from database
  retrievePackages(): void {
    this.bookingService.getAll()
      .subscribe({
        next: (data) => {
          this.package = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


// refreashList for new data
refreshList(): void {
  this.retrievePackages();
  this.currentPackage = {};
  this.currentIndex = -1;        // currentIndex for searching
}

// for showing list click data and open view  
setActivePackage(packages: Package, index: number): void {     // tutorial comming 
  this.currentPackage = packages;                                
  this.currentIndex = index;                                         /// index comming
}



  // deleteAll  methord calling

  removeAllPackages(): void {      
    this.bookingService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }



// for search value by Title
searchTitle(): void {
  this.currentPackage = {};
  this.currentIndex = -1;

  this.bookingService.findByTitle(this.title)
    .subscribe({
      next: (data) => {
        this.package = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}






















}
