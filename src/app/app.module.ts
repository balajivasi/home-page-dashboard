import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LogoComponent } from './logo/logo.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PopupWarningComponent } from './popup-warning/popup-warning.component';
import { PopupInformationComponent } from './popup-information/popup-information.component';

import { HttpModule } from '@angular/http';
import { GetMenuDataService } from './get-menu-data.service';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component'

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    LogoComponent,
    RightPanelComponent,
    FooterComponent,
    FeedbackComponent,
    PopupWarningComponent,
    PopupInformationComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetMenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
