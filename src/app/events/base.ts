import { config } from 'app';
import { Events } from 'types';

const isDev = config.envs.environment === 'development';
class BaseEventHandle {
  protected emit(event: Events, payload?: unknown) {
    isDev && console.info(`events[emit]: ${event}`, payload);

    const customEvent = new CustomEvent(event, { detail: payload });
    document.dispatchEvent(customEvent);
  }
}

export { BaseEventHandle };
