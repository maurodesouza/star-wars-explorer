import { Entities, Events } from 'types';
import { BaseEventHandle } from './base';

type MakeSearchArgs = {
  entity?: Entities;
  search?: string;
};

type FillSearchArgs = MakeSearchArgs;

class SearchEventsHandle extends BaseEventHandle {
  constructor() {
    super();
  }

  make = (args: MakeSearchArgs) => {
    this.emit(Events.MAKE_SEARCH, args);
  };

  fill = (args: FillSearchArgs) => {
    this.emit(Events.FILL_SEARCH, args);
  };

  error = (message: string) => {
    this.emit(Events.SEARCH_ERROR, message);
  };
}

export { SearchEventsHandle };
