import { MenuItem } from "primeng/api";

export interface Thumbnail {
  id: number;
  imageUrl: string;
  name: string;
  desc: string;
  path?: string;
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
      imageUrl:"https://primefaces.org/cdn/primeng/images/usercard.png",
      name: "prvy nazov", 
      desc: "prvy desc",
      path: "../../assets/videos/pop-daniela.mp4",
    }
      ,
    // { id:2 , 
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XvvMFfz2sf5o2MNsvg8TYgY3YeL0YgJmmA&usqp=CAU", name: "druhy nazov", 
    //   desc: "druhy desc",
    // }
    //   ,
    //   { id:3 , 
    //   imageUrl: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=480&h=205.7142857142857&q=90&fit=crop&ar=21%3A9", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:4 , 
    //   imageUrl: "https://www.sdetmi.com/assets/Uploads/Event/79966/IMG-20230610-192821699-HDR.jpg", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:5 , 
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XvvMFfz2sf5o2MNsvg8TYgY3YeL0YgJmmA&usqp=CAU", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:6 , 
    //   imageUrl:"https://primefaces.org/cdn/primeng/images/usercard.png",
    //   name: "prvy nazov", 
    //   desc: "prvy desc"}
    //   ,
    // { id:7, 
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XvvMFfz2sf5o2MNsvg8TYgY3YeL0YgJmmA&usqp=CAU", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:8 , 
    //   imageUrl: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=480&h=205.7142857142857&q=90&fit=crop&ar=21%3A9", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:9 , 
    //   imageUrl: "https://www.sdetmi.com/assets/Uploads/Event/79966/IMG-20230610-192821699-HDR.jpg", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,
    //   { id:10, 
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XvvMFfz2sf5o2MNsvg8TYgY3YeL0YgJmmA&usqp=CAU", name: "druhy nazov", 
    //   desc: "druhy desc"}
    //   ,

 ]