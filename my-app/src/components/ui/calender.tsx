"use client"
import * as React from "react"

interface CalendarProps {
  mode?: "single"
  selected?: Date
  defaultMonth?: Date
  onSelect: (date: Date) => void
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years"
  className?: string
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getWeekdayHeaders() {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
}

function isSameDay(d1?: Date, d2?: Date) {
  if (!d1 || !d2) return false
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export function Calendar({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mode = "single",
  selected,
  defaultMonth,
  onSelect,
  captionLayout = "dropdown",
  className,
}: CalendarProps) {
  const today = defaultMonth ?? new Date()
  const [year, setYear] = React.useState(today.getFullYear())
  const [month, setMonth] = React.useState(today.getMonth())

  React.useEffect(() => {
    if (defaultMonth) {
      setYear(defaultMonth.getFullYear())
      setMonth(defaultMonth.getMonth())
    }
  }, [defaultMonth])

  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfWeek = new Date(year, month, 1).getDay()

  const years = Array.from({ length: 50 }, (_, i) => 1970 + i)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const renderCaption = () => {
    if (captionLayout === "dropdown") {
      return (
        <div className="flex justify-between mb-2">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="border rounded px-2 py-1 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            {months.map((name, i) => (
              <option key={i} value={i}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border rounded px-2 py-1 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      )
    } else if (captionLayout === "dropdown-months") {
      return (
        <div className="mb-2">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="border rounded px-2 py-1 w-full bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            {months.map((name, i) => (
              <option key={i} value={i}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )
    } else if (captionLayout === "dropdown-years") {
      return (
        <div className="mb-2">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border rounded px-2 py-1 w-full bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      )
    }
    return null
  }

  return (
    <div
      className={`p-3 select-none w-64 rounded-lg border shadow-sm
        bg-white text-gray-900
        dark:bg-gray-800 dark:text-gray-100
        ${className ?? ""}`}
    >
      {renderCaption()}

      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 dark:text-gray-400 mb-1">
        {getWeekdayHeaders().map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const d = i + 1
          const dateObj = new Date(year, month, d)
          const selectedClass = isSameDay(selected, dateObj)
            ? "bg-blue-600 text-white rounded dark:bg-blue-500 dark:text-white"
            : "hover:bg-blue-100 cursor-pointer rounded dark:hover:bg-blue-700 dark:text-gray-300"

          return (
            <div
              key={d}
              className={`py-1 text-sm ${selectedClass}`}
              onClick={() => onSelect(dateObj)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelect(dateObj)
                }
              }}
              role="button"
              aria-pressed={isSameDay(selected, dateObj)}
            >
              {d}
            </div>
          )
        })}
      </div>
    </div>
  )
}
