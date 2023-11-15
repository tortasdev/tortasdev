import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'boxicons';

import { constants } from 'src/common/constants';

const { LANGUAGE_DEFAULT } = constants;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(LANGUAGE_DEFAULT);
    translate.use(LANGUAGE_DEFAULT);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
