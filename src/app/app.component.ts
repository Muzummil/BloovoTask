import { Component,OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SharedModule } from './common/shared.module';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from '../../projects/ngx-loading/src/public_api';
import { LoaderService } from './services/loader.service';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const Primary = '#9b8242';
const SecondaryBlue = '#006ddd';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloovoTask';
  public isLoggedIn=false;

  @ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loader  = false;
  public loading = true;
  public primaryColour = SecondaryBlue;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = true;
  public loadingTemplate: TemplateRef<any>;
  public config = { 
    animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, 
    secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour
  };
  


  constructor(public sharedModule:SharedModule,public loaderService:LoaderService){
    this.isLoggedIn = this.sharedModule.isUserLoggedIn();
  }
  ngOnInit() {
    this.loaderService.change.subscribe(isOpen => {
      this.loader = isOpen;
    });
    this.isLoggedIn = this.sharedModule.isUserLoggedIn();
  }
}
