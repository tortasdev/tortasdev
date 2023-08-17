import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-projects' ,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  

  
})
export class ProjectsComponent {

  images: string[] = [
    './assets/images/Pracofi_evi.png',
    './assets/images/kinymuulogo.png',
    './assets/images/kinymuuk.png',
    // Agrega más URLs de imágenes según necesites
    
    
  ];
  //acomodIMG lo uso para poner la lista en valor 0
  acomodIMG: number = 0;

  showImage(index: number): boolean {
    return index === this.acomodIMG;
  }

  nextImage() {
    this.acomodIMG = (this.acomodIMG + 1) % this.images.length;
  }
  
  prevImage() {
    this.acomodIMG = (this.acomodIMG - 1 + this.images.length) % this.images.length;
  }
}
