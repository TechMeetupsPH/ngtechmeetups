export class Meetup {
  id: number;
  title: string;
  description: string;
  host: string;
  organizerName: string;
  organizerEmail: string;
  venue: string;
  map: string;
  regLink: string;
  eventDate: string;
  finished: boolean;
  canceled: boolean;
  publishStatus: string;

  constructor(id: number, 
  title: string, 
  description: string
  host: string,
  organizerName: string,
  organizerEmail: string,
  venue: string,
  map: string,
  regLink: string,
  eventDate: string,
  finished: boolean,
  canceled: boolean,
  publishStatus: string ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.host = host;
    this.organizerName = organizerName;
    this.organizerEmail = organizerEmail;
    this.venue = description;
    this.map = map;
    this.eventDate = eventDate;
    this.finished = finished;
    this.canceled = canceled;
    this.publishStatus = publishStatus;
  }
}
