import { Events } from 'types';
import { BaseEventHandle } from './base';

class RelationsEventsHandle extends BaseEventHandle {
  constructor() {
    super();
  }

  filter = (option: string) => {
    this.emit(Events.RELATIONS_FILTER, option);
  };

  'set.options' = (options: string[]) => {
    this.emit(Events.RELATIONS_FILTER_OPTIONS, options);
  };
}

export { RelationsEventsHandle };
