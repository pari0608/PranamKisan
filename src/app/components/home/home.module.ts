import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FeaturesComponent } from '../../components/features/features.component';

import { ContributorsComponent } from '../../components/contributors/contributors.component';
import { MDBBootstrapModulesPro, CarouselModule,CollapseModule , WavesModule,CardsModule, ButtonsModule,LightBoxModule,ModalModule,TabsModule} from 'ng-uikit-pro-standard';
import { MatInputModule} from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VideosGalleryComponent } from '../../components/videos-gallery/videos-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    // MapsFloodWatchComponent,
    // CollapseModule ,
    
    // WavesModule,
    // CardsModule,
    ButtonsModule,
    // LightBoxModule,
    // ModalModule,
    // TabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro.forRoot(),
    GoogleMapsModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyALR2ZDTTyZXGBRFeCV0AHd0S-TV_GWYm8",
      libraries: ["places"]
    }),

  ],
  exports: [
    HomeComponent,
    BannerComponent,
    VideosGalleryComponent,
    FeaturesComponent,
    ContributorsComponent,

  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    FeaturesComponent,
    ContributorsComponent,
    VideosGalleryComponent,

    
  ],
})
export class HomeModule { }
