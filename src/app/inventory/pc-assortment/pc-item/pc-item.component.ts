import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pc } from 'src/app/model/pc.model';
import { AssortmentService } from 'src/app/services/assortment.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pc-item',
  templateUrl: './pc-item.component.html',
  styleUrls: ['./pc-item.component.css']
})
export class PcItemComponent implements OnInit {

  id: number;
  pc: Pc;

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
      this.assortmentService.getPcById(this.id).subscribe(pc => this.pc = pc);
    })
  }

}
