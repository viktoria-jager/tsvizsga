import { Event, EventType } from "../models/Event";
import { Participant } from "../models/Participant";
import { Log } from "../decorators/Logger";

export class EventManager {
  private events: Event[] = [];

  @Log
  createEvent(event: Event) {
    this.events.push(event);
  }

  @Log
  deleteEvent(eventId: number) {
    this.events = this.events.filter(e => e.id !== eventId);
  }

  @Log
  addParticipant(eventId: number, participant: Participant) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) throw new Error("Event not found");
    event.addParticipant(participant);
  }

  @Log
  removeParticipant(eventId: number, participantId: number) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) throw new Error("Event not found");
    event.removeParticipant(participantId);
  }

  getEventsByType(type: EventType) {
    return this.events.filter(e => e.type === type);
  }

  async createEventAsync(event: Event): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.createEvent(event);
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  }
}
