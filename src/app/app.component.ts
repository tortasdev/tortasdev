import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { constants } from 'src/common/constants';

const { LANGUAGE_DEFAULT } = constants;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(LANGUAGE_DEFAULT);
    translate.use(LANGUAGE_DEFAULT);
  }
  title = 'tortaDev';

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
