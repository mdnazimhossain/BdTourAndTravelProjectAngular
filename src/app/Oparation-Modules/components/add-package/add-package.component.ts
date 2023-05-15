import { Component } from '@angular/core';
import { Package } from '../model/model';
import { ServiceFileService } from '../service-file.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {


  package: Package ={

    title: "",
    description:"",
    published: false,
  }

  submitted = false;

  constructor(private bookingService: ServiceFileService){}

  // ts package name
  ///////////////////////////////////////////
  
    savePackage(): void {
      const data = {
        title: this.package.title,
        description: this.package.description
      };
  
  
  
  
  // ts service class name
      this.bookingService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }
  
    newPackage(): void {
      this.submitted = false;
      this.package = {
        title: '',
        description: '',
        published: false
      };
    }
  
  













}
