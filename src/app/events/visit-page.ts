import { Events } from 'types';
import { BaseEventHandle } from './base';

class VisitPageEventsHandle extends BaseEventHandle {
  constructor() {
    super();
  }

  explorer = () => {
    this.emit(Events.VISIT_EXPLORER_PAGE);
  };
}

export { VisitPageEventsHandle };
