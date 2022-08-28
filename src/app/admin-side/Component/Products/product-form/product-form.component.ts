import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { ProductService } from 'src/app/adminModule/Services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  formData:any=null;

  aimage:any[]=[]

  page:number=1;

  ProductForm!:FormGroup;

  Types=["____Select___","Laptops","Computers","Phones","Acessories"]

  constructor(private fb:FormBuilder,private productStateServices:ProductService) { }
  ngOnInit(){
   let features=this.fb.array([]);
   let specifications=this.fb.array([]);
   let Images=this.fb.array([]);
 
    this.ProductForm=this.fb.group({
    name:['',Validators.required],
    cost:['',Validators.required],
    brand:['',Validators.required],
    description:['',Validators.required],
    Features:features,
    Specifications:specifications,
    images:Images,
    type:['',Validators.required]
    })
    this.ProductForm.valueChanges.subscribe(res=>console.log(res));
  }
  getId(){
    return this.ProductForm.get('id');
  }
  getName(){
    return this.ProductForm.get('name');
  }
  getCost(){
    return this.ProductForm.get('cost');
  }
  getBrand(){
    return this.ProductForm.get('brand');
  }
 getDescription(){
    return this.ProductForm.get('description');
  }
  getFeatures(){
    return this.ProductForm.get('Features') as FormArray;
  }
 getSpecifications(){
    return this.ProductForm.get('Specifications') as FormArray;
  }

getImages(){
    return this.ProductForm.get('images') as FormArray;
  }
 getType(){
    return this.ProductForm.get('type');
  }

  //Form arrays
  addSpecification(){
   const  control =this.fb.control('',Validators.required)
   const formarray= this.getSpecifications()
   formarray.push(control)
  }

  getControls(){
     return this.getSpecifications().controls
  }

   getImageControls(){
     return this.getImages().controls
  } 
  
  addFeature(){
     const  feature=this.fb.control('',Validators.required)
     const f =this.getFeatures()  
     f.push(feature);
  }
  addimages(){
     const  image=this.fb.control('', Validators.required)
     const a = this.getImages()
     a.push(image);
  }
  removeFeature(id:number){
    this.getFeatures().removeAt(id)
    
  }
  removeSpecification(id:number){
    this.getSpecifications().removeAt(id)
  }
  removeImage(id:number){

    this.getImages().removeAt(id);

  }
  
  onSubmit($event:any) { 
  
    $event.preventDefault();
  this.formData=new FormData();
  this.formData.append('data',JSON.stringify(this.ProductForm.value));
  this.aimage.map(file=>{
    this.formData.append('Product',file,'Product');
  })
  console.log(this.formData.value);
  

  this.productStateServices.createProducts(this.formData).subscribe(res=>{  console.log(res); })
  
  }
   getPage(){
     return this.page
   }
   nextPage(){
    if(this.page<4){
       this.page++
     }
     console.log(this.page);
     
    }
    prevPage(){
    if(this.page>1){
       this.page--
     }
          console.log(this.page);
    }

     HandleFileImageChange(event:any) {
       console.log(event.target.files[0]);

      // this.getImages().at(1).setValue(event.target.files[0]);
      this.aimage.push(event.target.files[0])
       console.log(this.aimage);
      
       
  }

}
