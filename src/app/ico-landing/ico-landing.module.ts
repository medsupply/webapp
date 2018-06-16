import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcoLandingComponent } from '../ico-landing/ico-landing/ico-landing.component';
import { IcoLandingHeaderComponent } from './ico-landing-header/ico-landing-header.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TokenDistributionComponent } from './token-distribution/token-distribution.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { JoinOurCommunityComponent } from './join-our-community/join-our-community.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IcoLandingComponent, IcoLandingHeaderComponent, WhyChooseUsComponent, TokenDistributionComponent, AboutComponent, DevelopmentComponent, RoadMapComponent, TeamMembersComponent, JoinOurCommunityComponent],
  exports: [IcoLandingComponent]
})
export class IcoLandingModule { }
