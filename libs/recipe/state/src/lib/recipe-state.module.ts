import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENTITY_METADATA_TOKEN, EntityDataService, EntityCollectionReducerRegistry } from 'ngrx-data';

import { recipeEntityMetadata } from './recipe-entity-metadata';
import { RecipeDataService } from './services/recipe-data.service';
import { recipeTotalNReducer } from './+state/recipe.reducer';

export { RecipeEntityCollectionService } from './services/recipe-entity-collection.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: ENTITY_METADATA_TOKEN, multi: true, useValue: recipeEntityMetadata },
    RecipeDataService
  ]
})
export class RecipeStateModule {
  constructor(
    entityDataService: EntityDataService,
    recipeDataService: RecipeDataService,
    entityCollectionReducerRegistry: EntityCollectionReducerRegistry
  ) {
    entityDataService.registerService('Recipe', recipeDataService);
    entityCollectionReducerRegistry.registerReducer('Recipe', recipeTotalNReducer);
  }
}
