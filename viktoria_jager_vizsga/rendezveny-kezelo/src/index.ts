import { EventManager } from "./services/EventManager";
import { Event } from "./models/Event";
import { Participant } from "./models/Participant";

const manager = new EventManager();

const birthday = new Event(1, "John Birthday", "Budapest", new Date("2025-09-01"), "Birthday");
const alice = new Participant(1, "Alice", "alice@example.com");

manager.createEvent(birthday);
manager.addParticipant(1, alice);

console.log(manager.getEventsByType("Birthday"));
