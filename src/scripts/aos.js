import AOS from "aos";
import 'aos/dist/aos.css';

export function aosInit(){
    AOS.init({
        duration: 900,
        mirror: true,
        once: false,
    });
}