import { MenuItem } from "primeng/api";

export interface Thumbnail {
  id: number;
  name: string;
  desc: string;
  path: string;
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
        

 export const thumbnails: Thumbnail[] = [
    { id:1 , 
      name: "prvy nazov", 
      desc: "prvy desc",
      path: "../../assets/videos/1.mp4",
    }
    ,
     { id:2 , 
      name: "2", 
      desc: "prvy desc",
      path: "../../assets/videos/2.mp4",
    }
    ,
     { id:3 , 
      name: "3", 
      desc: "prvy desc",
      path: "../../assets/videos/3.mp4",
    }
    ,
     { id:4 , 
      name: "4", 
      desc: "prvy desc",
      path: "../../assets/videos/4.mp4",
    }
    ,
     { id:5 , 
      name: "5", 
      desc: "prvy desc",
      path: "../../assets/videos/5.mp4",
    }
    ,
     { id:6 , 
      name: "6", 
      desc: "prvy desc",
      path: "../../assets/videos/6.mp4",
    }
    ,
     { id:7 , 
      name: "7", 
      desc: "prvy desc",
      path: "../../assets/videos/7.mp4",
    }
    ,
     { id:8 , 
      name: "8", 
      desc: "prvy desc",
      path: "../../assets/videos/8.mp4",
    }
    ,
     { id:9 , 
      name: "9", 
      desc: "prvy desc",
      path: "../../assets/videos/9.mp4",
    }
    ,
     { id:10 , 
      name: "10", 
      desc: "prvy desc",
      path: "../../assets/videos/10.mp4",
    }
    ,
     { id:11 , 
      name: "11", 
      desc: "prvy desc",
      path: "../../assets/videos/11.mp4",
    }
    ,
     { id:12 , 
      name: "12", 
      desc: "prvy desc",
      path: "../../assets/videos/12.mp4",
    }
    
 ]