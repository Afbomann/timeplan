"use client";

import { timeplan, schoolDay, schoolWeek } from "@/lib/timeplan";
import { useEffect, useState } from "react";

export default function TimeplanClient() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  //@ts-ignore
  const [timeplanDay, setTimeplanDay] = useState<schoolDay>(
    //@ts-ignore
    timeplan.days.find((day) => dayStringToNumber(day.day) == selectedDay)
  );
  const [showPauses, setShowPauses] = useState(false);
  const [showRoomNumberNicknames, setShowRoomNumberNicknames] = useState(false);

  useEffect(() => {
    let showPausesItem = localStorage.getItem("showPauses");
    let showRoomNumberNicknamesItem = localStorage.getItem(
      "showRoomNumberNicknames"
    );

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

  useEffect(() => {
    let timeplanDayFound = timeplan.days.find(
      (day) => dayStringToNumber(day.day) == selectedDay
    );

    timeplanDayFound
      ? setTimeplanDay((prev) => (prev = timeplanDayFound))
      : //@ts-ignore
        setTimeplanDay((prev) => (prev = {}));
  }, [selectedDay]);

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
        {dayNumberToString(selectedDay).toUpperCase()}
      </h2>

      <div className="flex flex-wrap gap-[10px] w-fit max-w-[85%] mx-auto mt-[2dvh]">
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
          <label className="text-sm lg:text-base text-white">Vis pauser</label>
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
            Vis kallenavn
          </label>
        </div>
      </div>

      <div className="w-[85%] mx-auto flex flex-col gap-[2dvh] items-center mt-[3dvh] mb-[5dvh]">
        {timeplanDay.lessons ? (
          timeplanDay.lessons.map((lesson, lessonIndex) => {
            if (!showPauses && lesson.type != "lesson") {
              return;
            }

            return (
              <div
                className={`${
                  new Date().getTime() >
                    classTimeToDate(lesson.starts).getTime() &&
                  new Date().getTime() <
                    classTimeToDate(lesson.ends).getTime() &&
                  dayStringToNumber(timeplanDay.day) == new Date().getDay()
                    ? "bg-blue-300 "
                    : "bg-slate-200"
                } rounded-md shadow-md w-[350px] max-w-[100%] p-[10px] flex gap-[10px]`}
                key={lessonIndex}
              >
                <div
                  className={`w-[15px] h-[15px] rounded-[50%] ${
                    lesson.type == "break" && "bg-gray-500"
                  } ${lesson.type == "lunch" && "bg-gray-500"} ${
                    lesson.name == "Utvikling" && "bg-yellow-500"
                  } ${lesson.name == "Brukerstøtte" && "bg-yellow-500"} ${
                    lesson.name == "Driftsstøtte" && "bg-yellow-500"
                  } ${
                    lesson.name == "Yrkesfaglig fordypning" && "bg-yellow-500"
                  } ${lesson.name == "Samfunnskunnskap" && "bg-blue-500"} ${
                    lesson.name == "Norsk" && "bg-green-500"
                  } ${lesson.name == "Kroppsøving" && "bg-red-500"}`}
                />
                <div className="w-full">
                  <h4 className="font-bold text-sm lg:text-base">
                    {(lesson.type == "lesson" && lesson.name) ||
                      (lesson.type == "break" && "Pause") ||
                      (lesson.type == "lunch" && "Lunsj")}
                  </h4>
                  <div className="flex">
                    <h5 className="text-sm lg:text-base">{`${lesson.starts} - ${lesson.ends}`}</h5>
                    {lesson.type == "lesson" && (
                      <h5 className="ml-auto text-sm lg:text-base">
                        {showRoomNumberNicknames
                          ? roomNumberToNickname(lesson.roomNumber!)
                          : lesson.roomNumber}
                      </h5>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h4 className="text-gray-300 text-base lg:text-xl font-bold">
            Her var det tomt...
          </h4>
        )}
      </div>
    </>
  );
}

function dayNumberToString(number: number): string {
  switch (number) {
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

function dayStringToNumber(string: string): number {
  switch (string) {
    case "Mon": {
      return 1;
    }
    case "Tue": {
      return 2;
    }
    case "Wed": {
      return 3;
    }
    case "Thu": {
      return 4;
    }
    case "Fri": {
      return 5;
    }
    default: {
      return 0;
    }
  }
}

function roomNumberToNickname(
  roomNumber: "2060" | "2061" | "2044" | "2065" | "2066" | "IDR3" | "3057"
): string {
  switch (roomNumber) {
    case "2060": {
      return "War Room";
    }
    case "2061": {
      return "Colosseum";
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

function classTimeToDate(time: string): Date {
  const [hours, minutes] = time.split(":").map(Number);
  let newDate = new Date();
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
}
