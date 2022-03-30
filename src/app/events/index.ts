import { Events } from 'types';

type Callback = (args: any) => void;
type Event = Events | keyof DocumentEventMap;

class EventsHandle {
  on(event: Event, callback: Callback) {
    document.addEventListener(event, callback);
  }

  off(event: Event, callback: Callback) {
    document.removeEventListener(event, callback);
  }
}

const events = new EventsHandle();

export { events };
