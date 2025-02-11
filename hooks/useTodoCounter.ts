import { useEffect, useState } from "react"
import { useDebounce } from "./useDebounce"
import localforage from "localforage"
import { useParams } from "next/navigation"

interface ITodoCounter {
  [key: string]: number
}

interface ITodoCounterResult {
  total: number
  projectId: string
}

export const useTodoCounter = () => {
  return {}
}
