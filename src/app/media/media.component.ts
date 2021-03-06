import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {

  constructor(private router: Router) { }

  public contents: any[] = [/* {
    imgLink: 'assets/images/media.component.images/lalbhai.jpg',
    mediaLink: '/media/lalbhai-group-press-release',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: true,
    heading: 'Press release - The Lalbhai Group',
    date: 'January 2018',
    publisher: 'Ethereal Machines'
  }, */
  {
    imgLink: 'assets/images/media.component.images/digital-trends-logo.png',
      mediaLink: 'https://www.digitaltrends.com/cool-tech/ethereal-machines-halo-3d-printer-ces-2018/',
    heading: 'Ethereal Machines\' HALO',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: false,
    date: 'January 2018',
    publisher: 'DIGITAL TRENDS'
  }, {
    imgLink: 'assets/images/concrete-printer-press-release.component.images/product-image.jpg',
    mediaLink: '/media/concrete-printer-press-release',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: true,
    heading: 'Concrete 3D Printer',
    date: 'December 2017',
    publisher: 'Ethereal Machines'
  }, {
    imgLink: 'assets/images/media.component.images/gadgets-360-logo.png',
    mediaLink: 'https://gadgets.ndtv.com/others/features/meet-ethereal-machines-halo-a-5d-printer-thats-just-won-the-best-of-innovation-ces-2018-award-1779765',
    heading: 'Meet Ethereal Machines\' HALO...',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: false,
    date: 'November 2017',
    publisher: 'Gadgets360'
  }, {
    imgLink: 'assets/images/media.component.images/press-release.jpg',
    mediaLink: '/media/press-release',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: true,
    heading: 'CES 2018 - Best of Innovation Award',
    date: 'November 2017',
    publisher: 'CES'
  }, {
    imgLink: 'assets/images/media.component.images/documentry.jpg',
    mediaLink: 'https://youtu.be/6dun2zbYJmc',
    heading: 'Documentary by Govt. of India',
    btnTitle: 'Play',
    isMediaPlayble: true,
    isPartOfApp: false,
    date: 'August 2016',
    publisher: 'YouTube'
  }, {
    imgLink: 'assets/images/media.component.images/your-story.jpg',
    mediaLink: 'https://yourstory.com/2015/09/ethereal-machines/',
    heading: '63 rejections to break even',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    isPartOfApp: false,
    date: 'September 2015',
    publisher: 'YOURSTORY'
  }];

  public isModalOpen: boolean = false;
  public isPressReleaseModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  loadPressRelease() {
    this.router.navigate(['media/press-release']);
  }

  ngOnInit() {
  }

}
