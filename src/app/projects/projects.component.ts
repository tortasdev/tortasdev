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


   generateSafeUrl(url: string): string {
    // Reemplazar "http://localhost:4200" con una URL segura
    const safeUrl = url.replace('', 'https://');
    return safeUrl;
  }
  images: string[] = [
    './assets/images/Pracofi_evi.png',
    './assets/images/EHC_evi.png',
    // Agrega más URLs de imágenes según necesites
    
    
  ];
  Enlace: string[] = [
    'pracofi.com','eduardohc.com.mx',

    // Agrega más 
  ];
  //acomodIMG lo uso para poner la lista en valor 0
  acomodIMG: number = 0;
  acomodURL: number = 0;

  showImage(index: number): boolean {
    return index === this.acomodIMG;

  }
  showEnla(index: number): boolean {
    return index === this.acomodURL;
  }

  nextImage() {
    this.acomodIMG = (this.acomodIMG + 1) % this.images.length;
    this.acomodURL= (this.acomodURL + 1) % this.Enlace.length;
  }
  
  prevImage() {
    this.acomodIMG = (this.acomodIMG - 1 + this.images.length) % this.images.length;
    this.acomodURL = (this.acomodURL - 1 + this.Enlace.length) % this.Enlace.length;
  }
 
  

}
