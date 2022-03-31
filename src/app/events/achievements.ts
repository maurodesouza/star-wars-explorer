import { Entity, Events } from 'types';
import { BaseEventHandle } from './base';

class AchievementsEventsHandle extends BaseEventHandle {
  constructor() {
    super();
  }

  add = (args: Entity) => {
    this.emit(Events.ADD_ACHIEVEMENT, args);
  };
}

export { AchievementsEventsHandle };
