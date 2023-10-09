import { MenuItem } from "primeng/api";

export interface Video {
  id: number;
  name: string;
  desc: string;
  path: string;
  thumbnail: string;
}

export interface Photogallery {
  id: number;
  mainImgPath: string;
  imagePaths: string[];
}

 export const socialIcons: MenuItem[] = [
  {
   label: 'About',
    icon: 'pi pi-fw pi-eye',
    routerLink: '/about'          
  },
  {
    label: 'Videos',
    icon: 'pi pi-fw pi-video',
    routerLink: '/videos'
  },
   {
    label: 'Photos',
    icon: 'pi pi-fw pi-camera',
    routerLink: '/photos'
  },
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-phone',
    routerLink: '/contact'
  }
];
        
 export const videos: Video[] = [
    { id:1 , 
      name: "prvy nazov", 
      desc: "prvy desc",
      path: "../../assets/videos/1.mp4",
      thumbnail: "https://dam.nmhmedia.sk/image/725a6f00-10b7-45bb-9f79-bad7c51758a9_daniela-hantuchova-nema-s-nahotou-problem-a-tento-zaber-to-dokazuje.jpg/960/540"
    }
    ,
    { id:2 , 
      name: "2", 
      desc: "prvy desc",
      path: "../../assets/videos/2.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:3 , 
      name: "3", 
      desc: "prvy desc",
      path: "../../assets/videos/3.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"

    }
    ,
     { id:4 , 
      name: "4", 
      desc: "prvy desc",
      path: "../../assets/videos/4.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:5 , 
      name: "5", 
      desc: "prvy desc",
      path: "../../assets/videos/5.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:6 , 
      name: "6", 
      desc: "prvy desc",
      path: "../../assets/videos/6.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:7 , 
      name: "7", 
      desc: "prvy desc",
      path: "../../assets/videos/7.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:8 , 
      name: "8", 
      desc: "prvy desc",
      path: "../../assets/videos/8.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:9 , 
      name: "9", 
      desc: "prvy desc",
      path: "../../assets/videos/9.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:10 , 
      name: "10", 
      desc: "prvy desc",
      path: "../../assets/videos/10.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:11 , 
      name: "11", 
      desc: "prvy desc",
      path: "../../assets/videos/11.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    ,
     { id:12 , 
      name: "12", 
      desc: "prvy desc",
      path: "../../assets/videos/12.mp4",
      thumbnail: "https://www.doucma.sk/images/mustard/illustrations/tutoring.svg"
    }
    
 ];

 export const photoGalleries: Photogallery[] = [
  {
  id: 1,
  mainImgPath: "../../assets/pictures/2.jpg",
  imagePaths: ["../../assets/pictures/2.jpg"]
  },
  {
  id: 2,
  mainImgPath: "../../assets/pictures/1.jpg",
  imagePaths: ["../../assets/pictures/1.jpg"]
  },
  {
  id: 3,
  mainImgPath: "../../assets/pictures/3.jpg",
  imagePaths: ["../../assets/pictures/3.jpg"]
  },
  {
  id: 4,
  mainImgPath: "../../assets/pictures/4.jpg",
  imagePaths: ["../../assets/pictures/4.jpg"]
  },
   {
  id: 5,
  mainImgPath: "../../assets/pictures/5.jpg",
  imagePaths: ["../../assets/pictures/5.jpg"]
  },
  {
  id: 6,
  mainImgPath: "../../assets/pictures/6.jpg",
  imagePaths: ["../../assets/pictures/6.jpg"]
  },
  {
  id: 7,
  mainImgPath: "../../assets/pictures/7.jpg",
  imagePaths: ["../../assets/pictures/7.jpg"]
  },
  {
  id: 8,
  mainImgPath: "../../assets/pictures/8.jpg",
  imagePaths: ["../../assets/pictures/8.jpg"]
  },
     {
  id: 9,
  mainImgPath: "../../assets/pictures/9.jpg",
  imagePaths: ["../../assets/pictures/9.jpg"]
  },
  {
  id: 10,
  mainImgPath: "../../assets/pictures/10.jpg",
  imagePaths: ["../../assets/pictures/10.jpg"]
  },
  {
  id: 11,
  mainImgPath: "../../assets/pictures/11.jpg",
  imagePaths: ["../../assets/pictures/11.jpg"]
  },
  {
  id: 12,
  mainImgPath: "../../assets/pictures/12.jpg",
  imagePaths: ["../../assets/pictures/12.jpg"]
  },
 ]

