import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-gallery',
  templateUrl: './videos-gallery.component.html',
  styleUrls: ['./videos-gallery.component.scss']
})
export class VideosGalleryComponent implements OnInit {
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  safeSrc: SafeResourceUrl;
  campaigns_list: any = [
    {
      defaultVideo:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ahknw6uGaIw"),
      // campaigns: [
      //   {
      //     name: 'FEATURES VIDEOS',
      //   }
      // ],
      videos: [
        {
          name: 'Sustainable Agriculture Roadmapt',
          url: 'https://www.youtube.com/embed/n9EhtsSVLBs' ,
          thumb:'https://img.youtube.com/vi/n9EhtsSVLBs/0.jpg'
        },
        {
          name: 'Sustainable Agriculture Roadmap',
          url: 'https://www.youtube.com/embed/n9EhtsSVLBs' ,
          thumb:'https://img.youtube.com/vi/n9EhtsSVLBs/0.jpg'
        },
        {
          name: 'Himalayas’ shy otters',
          url: 'https://www.youtube.com/embed/prqVUa_vkOE' ,
          thumb:'https://img.youtube.com/vi/prqVUa_vkOE/0.jpg'
        },
        {
          name: 'Our River, Our Rights- The Story of Goa',
          url: 'https://www.youtube.com/embed/3cvZpORNOl8' ,
          thumb:'https://img.youtube.com/vi/3cvZpORNOl8/0.jpg'
        },
        {
          name: 'Agumbe Monsoon',
          url: 'https://www.youtube.com/embed/4-6o4Nb21FU' ,
          thumb:'https://img.youtube.com/vi/4-6o4Nb21FU/0.jpg'
        },
        {
          name: 'Save River Cauvery',
          url: 'https://www.youtube.com/embed/FI6YlxLPWC8' ,
          thumb:'https://img.youtube.com/vi/FI6YlxLPWC8/0.jpg'
        },
        {
          name: 'Aghanishini',
          url: 'https://www.youtube.com/embed/pkk0tk5WUtA' ,
          thumb:'https://img.youtube.com/vi/pkk0tk5WUtA/0.jpg'
        },
        {
          name: 'Kali',
          url: 'https://www.youtube.com/embed/RuVnAwkuTVw' ,
          thumb:'https://img.youtube.com/vi/RuVnAwkuTVw/0.jpg'
        },
        {
          name: 'Small Dams, Big Problems',
          url: 'https://www.youtube.com/embed/0LqdOwYmFwU' ,
          thumb:'https://img.youtube.com/vi/0LqdOwYmFwU/0.jpg'
        },
      ],
    },


  ]

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/oVXmpxZkoTQ");
  }

  ngOnInit(): void {

  }

  bla(i, url){
    this.campaigns_list[i].defaultVideo=this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }
}
