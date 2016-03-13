import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent)
  .catch(err => console.log(err)); // useful to catch the errors;
