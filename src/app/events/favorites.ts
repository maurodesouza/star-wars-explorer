import { Entity, Events } from 'types';
import { BaseEventHandle } from './base';

class FavoritesEventsHandle extends BaseEventHandle {
  constructor() {
    super();
  }

  add = (args: Entity) => {
    this.emit(Events.ADD_FAVORITE, args);
  };

  remove = (id: string) => {
    this.emit(Events.REMOVE_FAVORITE, { id });
  };
}

export { FavoritesEventsHandle };
