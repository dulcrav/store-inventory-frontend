import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/model/laptop.model';
import { ActivatedRoute } from '@angular/router';
import { AssortmentService } from 'src/app/services/assortment.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {

  id: number;
  laptop: Laptop;

  constructor(private route: ActivatedRoute, private location: Location,
              private assortmentService: AssortmentService, private iconRegistry: MatIconRegistry, 
              private sanitizer: DomSanitizer) { 
                iconRegistry.addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('assets/img/arrow_back.svg'));
              }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.assortmentService.getLaptopById(this.id).subscribe(laptop => this.laptop = laptop);
    })
  }

}
