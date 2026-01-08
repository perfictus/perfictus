import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index7-choose',
  imports: [GsapRevealDirective, CommonModule],
  templateUrl: './index7-choose.component.html',
  styles: ``
})
export class Index7ChooseComponent {
 @Input() items: { text: string; imageUrl: string }[] = [
    { 
      text: 'Perfection is the Perfictus signature!', 
      imageUrl: 'assets/img/testimonial/tes1-smoll-image1.png' 
    },
    { 
      text: 'Perfictus sets the benchmark for excellence!', 
      imageUrl: 'assets/img/testimonial/tes1-smoll-image2.png' 
    },
    { 
      text: 'Their execution is precise and dependable!', 
      imageUrl: 'assets/img/testimonial/tes1-smoll-image3.png' 
    },
    { 
      text: 'Perfictus transformed our digital operations!', 
      imageUrl: 'assets/img/testimonial/tes1-smoll-image1.png' 
    },
    { 
      text: 'A partner we trust for long-term growth!', 
      imageUrl: 'assets/img/testimonial/tes1-smoll-image1.png' 
    }
  ];

  @Input() duration: string = '30s';
  @Input() direction: 'left' | 'right' = 'left';

  clients = [
    {
      name: 'Wellness Brand',
      description: 'Shopify DTC · Conversion-focused UI',
      image: 'assets/img/testimonial/tes4-author3.png'
    },
    {
      name: 'Beauty & Skincare',
      description: 'Mobile-first storefront · CRO',
      image: 'assets/img/testimonial/tes4-author3.png'
    },
    {
      name: 'Coffee & Lifestyle',
      description: 'Branding + E-commerce execution',
      image: 'assets/img/testimonial/tes4-author3.png'
    }
  ];

  
}
