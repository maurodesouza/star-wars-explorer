import { Events } from 'types';

import { SearchEventsHandle } from './search';
import { FavoritesEventsHandle } from './favorites';
import { RelationsEventsHandle } from './relations';
import { AchievementsEventsHandle } from './achievements';
import { VisitPageEventsHandle } from './visit-page';

type Callback = (args: any) => void;
type Event = Events | keyof DocumentEventMap;

class EventsHandle {
  search = new SearchEventsHandle();
  favorites = new FavoritesEventsHandle();
  achievements = new AchievementsEventsHandle();
  relations = new RelationsEventsHandle();
  visit_page = new VisitPageEventsHandle();

  on(event: Event, callback: Callback) {
    document.addEventListener(event, callback);
  }

  off(event: Event, callback: Callback) {
    document.removeEventListener(event, callback);
  }
}

const events = new EventsHandle();

export { events };
