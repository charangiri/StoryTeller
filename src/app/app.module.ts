import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './category/create/create.component';
import { VolumeComponent } from './volume/volume.component';
import { StoriesComponent } from './stories/stories.component';
import { VolumeCreateComponent } from './volume/volume-create/volume-create.component';
import { StoryCreateComponent } from './stories/story-create/story-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CreateComponent,
    VolumeComponent,
    StoriesComponent,
    VolumeCreateComponent,
    StoryCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
