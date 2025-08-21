import { EventManager } from "../src/services/EventManager";
import { Event } from "../src/models/Event";
import { Participant } from "../src/models/Participant";

test("Add participant to event", () => {
  const manager = new EventManager();
  const concert = new Event(1, "Rock Concert", "Arena", new Date(), "Concert");
  manager.createEvent(concert);

  const bob = new Participant(1, "Bob", "bob@example.com");
  manager.addParticipant(1, bob);

  expect(manager.getEventsByType("Concert")[0].participants.length).toBe(1);
});
