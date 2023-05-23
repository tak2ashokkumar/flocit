import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }

  ngOnDestroy() {
    let scripts = document.getElementsByTagName('script');
    for(let i = 0; i < scripts.length; i++){
      scripts[i].remove();
      // scripts[i].parentElement.removeChild(c[0]);
      // if(scripts[i] && scripts[i].parentNode){
      //   scripts[i].parentNode.removeChild(scripts[i]);
      // }
    }
  }

  private loadScript() {
    let nubis_swiper = document.createElement('script');
    nubis_swiper.src = '../assets/js/nubis-swiper.min.js';
    nubis_swiper.type = 'text/javascript';
    nubis_swiper.async = true;
    document.getElementsByTagName('body')[0].append(nubis_swiper);

    setTimeout(() => {
      let nubis_scripts = document.createElement('script');
      nubis_scripts.src = '../assets/js/nubis-scripts.js';
      nubis_scripts.type = 'text/javascript';
      nubis_scripts.async = true;
      document.getElementsByTagName('body')[0].append(nubis_scripts);
    }, 50)
  }
}
