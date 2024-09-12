'use client'

import { useEffect, useState } from 'react'

interface VideoStatsProps {
  initialViews: number
  initialHoursWatched: number
  initialCompletions: number
}

export default function VideoStats({ initialViews, initialHoursWatched, initialCompletions }: VideoStatsProps) {
  const [views, setViews] = useState(initialViews)
  const [hoursWatched, setHoursWatched] = useState(initialHoursWatched)
  const [completions, setCompletions] = useState(initialCompletions)

  useEffect(() => {
    // 模拟实时更新
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 3))
      setHoursWatched(prev => +(prev + Math.random() * 0.1).toFixed(2))
      setCompletions(prev => prev + Math.floor(Math.random() * 2))
    }, 5000) // 每5秒更新一次

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-gray-600 items-center flex-wrap justify-center flex gap-4 bg-zinc-50 p-4 rounded-lg">
      <div className="items-center cursor-pointer py-1 px-1 flex rounded-md">
        <svg className="w-4 h-4" fill="rgb(75, 85, 99)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="rgb(75, 85, 99)" />
          <path clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" fill="rgb(75, 85, 99)" fillRule="evenodd" />
        </svg>
        <span className="text-xs ml-1">{views} views</span>
      </div>
      <div className="items-center cursor-pointer py-1 px-1 flex rounded-md">
        <svg className="w-4 h-4" fill="rgb(75, 85, 99)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" fill="rgb(75, 85, 99)" fillRule="evenodd" />
        </svg>
        <span className="text-xs ml-1">{hoursWatched.toFixed(2)} hours watched</span>
      </div>
      <div className="items-center cursor-pointer py-1 px-1 flex rounded-md">
        <svg className="w-4 h-4" fill="rgb(75, 85, 99)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" fill="rgb(75, 85, 99)" fillRule="evenodd" />
        </svg>
        <span className="text-xs ml-1">{completions} completions</span>
      </div>
    </div>
  )
}