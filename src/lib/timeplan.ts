export type schoolLessonNames =
  | "Utvikling"
  | "Samfunnskunnskap"
  | "Brukerstøtte"
  | "Driftsstøtte"
  | "Yrkesfaglig fordypning"
  | "Norsk"
  | "Kroppsøving";

export type schoolLessonRoomNumbers =
  | "2060"
  | "2061"
  | "2044"
  | "2065"
  | "2066"
  | "IDR3"
  | "3057";

export type schoolLessonTypes = "lesson" | "break" | "lunch";

export type schoolDayDays =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export type schoolLesson = {
  name?: schoolLessonNames;
  roomNumber?: schoolLessonRoomNumbers;
  type: schoolLessonTypes;
  starts: string;
  ends: string;
};

export type schoolDay = {
  day: schoolDayDays;
  lessons: schoolLesson[];
};

export type schoolTimetable = {
  days: schoolDay[];
};

export const IT1_Timetable: schoolTimetable = {
  days: [
    {
      day: "Mon",
      lessons: [
        {
          name: "Utvikling",
          roomNumber: "2060",
          type: "lesson",
          starts: "08:00",
          ends: "08:45",
        },
      ],
    },
  ],
};

export const IT2_Timetable: schoolTimetable = {
  days: [
    {
      day: "Mon",
      lessons: [
        {
          name: "Utvikling",
          roomNumber: "2060",
          type: "lesson",
          starts: "08:00",
          ends: "08:45",
        },
        {
          type: "break",
          starts: "08:45",
          ends: "08:50",
        },
        {
          name: "Utvikling",
          roomNumber: "2060",
          type: "lesson",
          starts: "08:50",
          ends: "09:35",
        },
        {
          type: "break",
          starts: "09:35",
          ends: "09:45",
        },
        {
          name: "Utvikling",
          roomNumber: "2060",
          type: "lesson",
          starts: "09:45",
          ends: "10:30",
        },
        {
          type: "break",
          starts: "10:30",
          ends: "10:35",
        },
        {
          name: "Utvikling",
          roomNumber: "2060",
          type: "lesson",
          starts: "10:35",
          ends: "11:20",
        },
        {
          type: "lunch",
          starts: "11:20",
          ends: "12:00",
        },
        {
          name: "Samfunnskunnskap",
          roomNumber: "2061",
          type: "lesson",
          starts: "12:00",
          ends: "12:45",
        },
        {
          type: "break",
          starts: "12:45",
          ends: "12:50",
        },
        {
          name: "Samfunnskunnskap",
          roomNumber: "2061",
          type: "lesson",
          starts: "12:50",
          ends: "13:35",
        },
        {
          type: "break",
          starts: "13:35",
          ends: "13:40",
        },
        {
          name: "Samfunnskunnskap",
          roomNumber: "2061",
          type: "lesson",
          starts: "13:40",
          ends: "14:25",
        },
      ],
    },
    {
      day: "Tue",
      lessons: [
        {
          name: "Brukerstøtte",
          roomNumber: "2044",
          type: "lesson",
          starts: "08:50",
          ends: "09:35",
        },
        {
          type: "break",
          starts: "09:35",
          ends: "09:45",
        },
        {
          name: "Brukerstøtte",
          roomNumber: "2044",
          type: "lesson",
          starts: "09:45",
          ends: "10:30",
        },
        {
          type: "break",
          starts: "10:30",
          ends: "10:35",
        },
        {
          name: "Brukerstøtte",
          roomNumber: "2044",
          type: "lesson",
          starts: "10:35",
          ends: "11:20",
        },
        {
          type: "lunch",
          starts: "11:20",
          ends: "12:00",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2065",
          type: "lesson",
          starts: "12:00",
          ends: "12:45",
        },
        {
          type: "break",
          starts: "12:45",
          ends: "12:50",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2065",
          type: "lesson",
          starts: "12:50",
          ends: "13:35",
        },
        {
          type: "break",
          starts: "13:35",
          ends: "13:40",
        },
        {
          name: "Yrkesfaglig fordypning",
          roomNumber: "2066",
          type: "lesson",
          starts: "13:40",
          ends: "14:25",
        },
        {
          type: "break",
          starts: "14:25",
          ends: "14:30",
        },
        {
          name: "Yrkesfaglig fordypning",
          roomNumber: "2066",
          type: "lesson",
          starts: "14:30",
          ends: "15:15",
        },
      ],
    },
    {
      day: "Wed",
      lessons: [
        {
          name: "Norsk",
          roomNumber: "2061",
          type: "lesson",
          starts: "08:00",
          ends: "08:45",
        },
        {
          type: "break",
          starts: "08:45",
          ends: "08:50",
        },
        {
          name: "Norsk",
          roomNumber: "2061",
          type: "lesson",
          starts: "08:50",
          ends: "09:35",
        },
        {
          type: "break",
          starts: "09:35",
          ends: "09:45",
        },
        {
          name: "Norsk",
          roomNumber: "2061",
          type: "lesson",
          starts: "09:45",
          ends: "10:30",
        },
        {
          type: "break",
          starts: "10:30",
          ends: "10:35",
        },
        {
          name: "Norsk",
          roomNumber: "2061",
          type: "lesson",
          starts: "10:35",
          ends: "11:20",
        },
      ],
    },
    {
      day: "Thu",
      lessons: [
        {
          name: "Driftsstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "08:00",
          ends: "08:45",
        },
        {
          type: "break",
          starts: "08:45",
          ends: "08:50",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "08:50",
          ends: "09:35",
        },
        {
          type: "break",
          starts: "09:35",
          ends: "09:45",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "09:45",
          ends: "10:30",
        },
        {
          type: "break",
          starts: "10:30",
          ends: "10:35",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "10:35",
          ends: "11:20",
        },
        {
          type: "lunch",
          starts: "11:20",
          ends: "12:00",
        },
        {
          name: "Utvikling",
          roomNumber: "2061",
          type: "lesson",
          starts: "12:00",
          ends: "12:45",
        },
        {
          type: "break",
          starts: "12:45",
          ends: "12:50",
        },
        {
          name: "Utvikling",
          roomNumber: "2061",
          type: "lesson",
          starts: "12:50",
          ends: "13:35",
        },
        {
          type: "break",
          starts: "13:35",
          ends: "13:40",
        },
        {
          name: "Kroppsøving",
          roomNumber: "IDR3",
          type: "lesson",
          starts: "13:40",
          ends: "14:25",
        },
        {
          type: "break",
          starts: "14:25",
          ends: "14:30",
        },
        {
          name: "Kroppsøving",
          roomNumber: "IDR3",
          type: "lesson",
          starts: "14:30",
          ends: "15:15",
        },
      ],
    },
    {
      day: "Fri",
      lessons: [
        {
          name: "Brukerstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "08:00",
          ends: "08:45",
        },
        {
          type: "break",
          starts: "08:45",
          ends: "08:50",
        },
        {
          name: "Brukerstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "08:50",
          ends: "09:35",
        },
        {
          type: "break",
          starts: "09:35",
          ends: "09:45",
        },
        {
          name: "Brukerstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "09:45",
          ends: "10:30",
        },
        {
          type: "break",
          starts: "10:30",
          ends: "10:35",
        },
        {
          name: "Driftsstøtte",
          roomNumber: "2066",
          type: "lesson",
          starts: "10:35",
          ends: "11:20",
        },
        {
          type: "lunch",
          starts: "11:20",
          ends: "12:00",
        },
        {
          name: "Yrkesfaglig fordypning",
          roomNumber: "3057",
          type: "lesson",
          starts: "12:00",
          ends: "12:45",
        },
        {
          type: "break",
          starts: "12:45",
          ends: "12:50",
        },
        {
          name: "Utvikling",
          roomNumber: "3057",
          type: "lesson",
          starts: "12:50",
          ends: "13:35",
        },
      ],
    },
  ],
};
