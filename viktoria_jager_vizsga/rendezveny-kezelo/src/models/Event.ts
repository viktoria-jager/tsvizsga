import { Participant } from "./Participant";

export type EventType = "Birthday" | "Family" | "Festival" | "Concert" | "Other";

export interface IEvent {
  id: number;
  name: string;
  location: string;
  date: Date;
  type: EventType;
  participants: Participant[];
}

export class Event implements IEvent {
  participants: Participant[] = [];

  constructor(
    public id: number,
    public name: string,
    public location: string,
    public date: Date,
    public type: EventType
  ) {}

  addParticipant(participant: Participant) {
    this.participants.push(participant);
  }

  removeParticipant(participantId: number) {
    this.participants = this.participants.filter(p => p.id !== participantId);
  }
}
