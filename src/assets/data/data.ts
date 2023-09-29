import { MenuItem } from "primeng/api";

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