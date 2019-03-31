import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/model/smarthphone.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AssortmentService } from 'src/app/services/assortment.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-smartphone-item',
  templateUrl: './smartphone-item.component.html',
  styleUrls: ['./smartphone-item.component.css']
})
export class SmartphoneItemComponent implements OnInit {

  id: number;
  smartphone: Smartphone;

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
      this.assortmentService.getSmartphoneById(this.id).subscribe(smartphone => this.smartphone = smartphone);
    })
  }

}
