// lib/constants.ts

export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "event-1",
    location: "Amsterdam, Netherlands",
    date: "2025-11-15",
    time: "09:00",
  },
  {
    title: "HackZurich 2025",
    image: "/images/event2.png",
    slug: "event-2",
    location: "Zurich, Switzerland",
    date: "2025-09-19",
    time: "18:00",
  },
  {
    title: "JSConf Asia 2025",
    image: "/images/event3.png",
    slug: "event-3",
    location: "Singapore",
    date: "2025-12-03",
    time: "10:00",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event4.png",
    slug: "event-4",
    location: "Salt Lake City, USA",
    date: "2026-04-22",
    time: "08:30",
  },
  {
    title: "DevTernity 2025",
    image: "/images/event5.png",
    slug: "event-5",
    location: "Riga, Latvia",
    date: "2025-12-12",
    time: "09:30",
  },
];
