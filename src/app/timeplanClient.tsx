"use client";

import {
  IT1_Timetable,
  IT2_Timetable,
  schoolDay,
  schoolDayDays,
  schoolLesson,
  schoolLessonNames,
  schoolLessonRoomNumbers,
  schoolLessonTypes,
  schoolTimetable,
} from "@/lib/timeplan";
import { useEffect, useState } from "react";

export default function TimeplanClient() {
  const [selectedTimetable, setSelectedTimetable] =
    useState<schoolTimetable>(IT1_Timetable);
  const [selectedTimetableString, setSelectedTimetableString] = useState("IT1");
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [showPauses, setShowPauses] = useState(false);
  const [showRoomNumberNicknames, setShowRoomNumberNicknames] = useState(false);

  useEffect(() => {
    let timetableItem = localStorage.getItem("timetable");
    let showPausesItem = localStorage.getItem("showPauses");
    let showRoomNumberNicknamesItem = localStorage.getItem(
      "showRoomNumberNicknames"
    );

    if (timetableItem) {
      if (timetableItem != "IT1" && timetableItem != "IT2") {
        localStorage.setItem("timetable", "IT1");
        timetableItem = localStorage.getItem("timetable");
      }

      setSelectedTimetableString((prev) => (prev = timetableItem!));
      setSelectedTimetable(
        //@ts-ignore
        (prev) =>
          //@ts-ignore
          (prev =
            (timetableItem == "IT1" && IT1_Timetable) ||
            (timetableItem == "IT2" && IT2_Timetable))
      );
    }

    if (showPausesItem) {
      if (showPausesItem != "yes" && showPausesItem != "no") {
        localStorage.setItem("showPauses", "no");
        showPausesItem = localStorage.getItem("showPauses");
      }

      setShowPauses((prev) => (prev = showPausesItem == "yes" ? true : false));
    }

    if (showRoomNumberNicknamesItem) {
      if (
        showRoomNumberNicknamesItem != "yes" &&
        showRoomNumberNicknamesItem != "no"
      ) {
        localStorage.setItem("showRoomNumberNicknames", "no");
        showRoomNumberNicknamesItem = localStorage.getItem(
          "showRoomNumberNicknames"
        );
      }

      setShowRoomNumberNicknames(
        (prev) => (prev = showRoomNumberNicknamesItem == "yes" ? true : false)
      );
    }
  }, []);

  return (
    <>
      <div className="w-fit max-w-[85%] mx-auto mt-[5dvh] justify-center flex flex-wrap gap-[3dvh]">
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = new Date().getDay()))}
        >
          I dag
        </button>
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = 1))}
        >
          Mandag
        </button>
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = 2))}
        >
          Tirsdag
        </button>
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = 3))}
        >
          Onsdag
        </button>
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = 4))}
        >
          Torsdag
        </button>
        <button
          className="bg-slate-200 rounded-md px-[20px] py-[4px] shadow-md text-sm lg:text-base"
          onClick={() => setSelectedDay((prev) => (prev = 5))}
        >
          Fredag
        </button>
      </div>

      <h2 className="text-xl lg:text-2xl font-bold text-white text-center mt-[5dvh]">
        {getDayNumberInString(selectedDay).toUpperCase()}
      </h2>

      <div className="flex flex-wrap gap-[10px] w-fit max-w-[85%] mx-auto mt-[2dvh]">
        <div className="flex gap-[5px]">
          <select
            value={selectedTimetableString}
            className="rounded-md w-fit outline-none"
            onChange={(event) => {
              localStorage.setItem("timetable", event.target.value);
              setSelectedTimetableString((prev) => (prev = event.target.value));
              setSelectedTimetable(
                //@ts-ignore
                (prev) =>
                  //@ts-ignore
                  (prev =
                    (event.target.value == "IT1" && IT1_Timetable) ||
                    (event.target.value == "IT2" && IT2_Timetable))
              );
            }}
          >
            <option value="IT1">IT1</option>
            <option value="IT2">IT2</option>
          </select>
          <label className="text-sm lg:text-base text-white">Timeplan</label>
        </div>
        <div className="flex gap-[5px]">
          <input
            checked={showPauses}
            onChange={() => {
              setShowPauses((prev) => {
                localStorage.setItem("showPauses", !prev ? "yes" : "no");

                return !prev;
              });
            }}
            type="checkbox"
            className="w-[25px] cursor-pointer"
          />
          <label className="text-sm lg:text-base text-white">Pauser</label>
        </div>
        <div className="flex gap-[5px]">
          <input
            checked={showRoomNumberNicknames}
            onChange={() => {
              setShowRoomNumberNicknames((prev) => {
                localStorage.setItem(
                  "showRoomNumberNicknames",
                  !prev ? "yes" : "no"
                );

                return !prev;
              });
            }}
            type="checkbox"
            className="w-[25px] cursor-pointer"
          />
          <label className="text-sm lg:text-base text-white">
            Rom kallenavn
          </label>
        </div>
      </div>

      <div className="w-[85%] mx-auto flex flex-col gap-[2dvh] items-center mt-[3dvh] mb-[5dvh]">
        {getTimetableSchoolDay(selectedTimetable, selectedDay) ? (
          getTimetableSchoolDay(selectedTimetable, selectedDay)?.lessons.map(
            (schoolLesson, schoolLessonIndex) => {
              if (schoolLesson.type != "lesson" && !showPauses) {
                return;
              }

              //add outline around current lesson outline outline-[4px]
              //add a "next lesson" feature

              return (
                <div
                  className={`${
                    isCurrentLesson(
                      //@ts-ignore
                      getTimetableSchoolDay(selectedTimetable, selectedDay),
                      schoolLesson
                    ) && "outline outline-[4px]"
                  } bg-slate-200 p-[10px] rounded-md w-[350px] max-w-[100%] shadow-md flex gap-[10px]`}
                  key={schoolLessonIndex}
                >
                  <div
                    className={`${getSchoolLessonColor(
                      schoolLesson.name ?? undefined,
                      schoolLesson.type
                    )} w-[15px] h-[15px] rounded-[50%]`}
                  />
                  <div className="w-full">
                    <h4 className="text-sm lg:text-base font-bold">
                      {(schoolLesson.type == "lesson" && schoolLesson.name) ||
                        (schoolLesson.type == "break" && "Pause") ||
                        (schoolLesson.type == "lunch" && "Lunsj")}
                    </h4>
                    <div className="flex">
                      <h5>{`${schoolLesson.starts} - ${schoolLesson.ends}`}</h5>
                      {schoolLesson.type == "lesson" && (
                        <h5 className="ml-auto">
                          {showRoomNumberNicknames
                            ? getRoomNumberNickname(schoolLesson.roomNumber!)
                            : schoolLesson.roomNumber}
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <h4 className="text-gray-100 text-lg lg:text-xl">
            Her var det tomt...
          </h4>
        )}
      </div>
    </>
  );
}

function getDayNumberInString(dayNumber: number): string {
  switch (dayNumber) {
    case 1: {
      return "Mandag";
    }
    case 2: {
      return "Tirsdag";
    }
    case 3: {
      return "Onsdag";
    }
    case 4: {
      return "Torsdag";
    }
    case 5: {
      return "Fredag";
    }
    case 6: {
      return "Lørdag";
    }
    case 7: {
      return "Søndag";
    }
    default: {
      return "Invalid day number";
    }
  }
}

function getSchoolLessonColor(
  lessonName: schoolLessonNames | undefined,
  lessonType: schoolLessonTypes
): string | undefined {
  if (
    lessonName == "Utvikling" ||
    lessonName == "Brukerstøtte" ||
    lessonName == "Driftsstøtte" ||
    lessonName == "Yrkesfaglig fordypning"
  ) {
    return "bg-yellow-500";
  } else if (lessonName == "Samfunnskunnskap") {
    return "bg-blue-500";
  } else if (lessonName == "Norsk") {
    return "bg-green-500";
  } else if (lessonName == "Kroppsøving") {
    return "bg-red-500";
  }

  if (lessonType != "lesson") {
    return "bg-gray-500";
  }
}

function getLessonTimeInDate(lessonTime: string): Date {
  const [hours, minutes] = lessonTime.split(":").map(Number);
  let newDate = new Date();
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
}

function getRoomNumberNickname(roomNumber: schoolLessonRoomNumbers): string {
  switch (roomNumber) {
    case "2060": {
      return "War Room";
    }
    case "2061": {
      return "Colosseum";
    }
    case "2062": {
      return "Akvariet";
    }
    case "2065": {
      return "Casino";
    }
    case "2066": {
      return "Lab";
    }
    default: {
      return roomNumber;
    }
  }
}

function getDayNumberInStringShort(
  dayNumber: number
): schoolDayDays | "Invalid day number" {
  switch (dayNumber) {
    case 1: {
      return "Mon";
    }
    case 2: {
      return "Tue";
    }
    case 3: {
      return "Wed";
    }
    case 4: {
      return "Thu";
    }
    case 5: {
      return "Fri";
    }
    case 6: {
      return "Sat";
    }
    case 7: {
      return "Sun";
    }
    default: {
      return "Invalid day number";
    }
  }
}

function getTimetableSchoolDay(
  timetable: schoolTimetable,
  day: number
): schoolDay | null {
  let schoolDayFound = timetable.days.find(
    (schoolDay) => schoolDay.day == getDayNumberInStringShort(day)
  );

  return schoolDayFound ? schoolDayFound : null;
}

function isCurrentLesson(
  schoolDay: schoolDay,
  schoolLesson: schoolLesson
): boolean {
  const dateNow = new Date();
  const schoolLessonStartsDate = getLessonTimeInDate(schoolLesson.starts);
  const schoolLessonEndsDate = getLessonTimeInDate(schoolLesson.ends);

  if (schoolDay.day != getDayNumberInStringShort(dateNow.getDay())) {
    return false;
  }

  if (
    dateNow.getTime() >= schoolLessonStartsDate.getTime() &&
    dateNow.getTime() <= schoolLessonEndsDate.getTime()
  ) {
    return true;
  }

  return false;
}
