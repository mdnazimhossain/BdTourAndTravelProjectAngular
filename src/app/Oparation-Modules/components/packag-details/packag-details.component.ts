import { Component, Input } from '@angular/core';
import { ServiceFileService } from '../service-file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../model/model';

@Component({
  selector: 'app-packag-details',
  templateUrl: './packag-details.component.html',
  styleUrls: ['./packag-details.component.css']
})
export class PackagDetailsComponent {

//////////////////////////////




@Input() viewMode = false;

@Input() currentPackage: Package = {
  title: '',
  description: '',
  published: false
};

message:any;



constructor(private bookingService: ServiceFileService,
  private route: ActivatedRoute,
  private router: Router,){}


//////////////////////////////

ngOnInit(): void{

  if(!this.viewMode){
    this.message = this.getPackage(this.route.snapshot.params["id"]);
    console.log(this.message+"dddd");
    
  }
  
  }
  
  
  
  getPackage(id: string): void{
  this.bookingService.get(id).subscribe({
  
    next:(data)=>{
      this.currentPackage = data;
      console.log(data)
    }
  })
  
  }
  
  
  // new model ts data will change here
  
  updatePublished(status: boolean): void{
    const data ={
      title: this.currentPackage.title,
      description: this.currentPackage.description,
      published: status
    };
    this.message ='';
    this.bookingService.update(this.currentPackage.id, data).subscribe
    ({
      next: (res)=>{
        console.log(res);
        this.currentPackage.published = status;
        this.message = res.message? res.message : " The Status was updated succefulluy!";
      },
      error: (e)=> console.error(e)
    });
  }
  
  
  updatePackage(): void{
    this.message = '';
    this.bookingService.update(this.currentPackage.id, this.currentPackage).subscribe
    ({
      next: (res)=>{
        console.log(res);
        this.message = res.message? res.message : " The package was updated succefulluy!";
      },
      error: (e)=> console.error(e)
    });
  }
  
  
  ///  router navigate code write here
  deletePackage(): void{
    this.bookingService.delete(this.currentPackage.id).subscribe
    ({
      next: (res)=>{
        console.log(res);
        this.router.navigate (['/packages']);
      },
      error: (e)=> console.error(e)
    });
  }
  
  
  


















}
