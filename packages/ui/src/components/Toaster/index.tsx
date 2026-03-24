"use client"
import { useRef } from "react"
import { useSooner } from "@repo/stores"
import { cn } from "../../lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const baseClass =
  "border bg-card p-3 rounded-md fixed top-10 left-1/2 -translate-x-1/2 min-w-sm max-w-md opacity-0 translate-y-[-50px]"
export const Toaster = () => {
  const value = useSooner((state) => state.value)
  const clear = useSooner((state) => state.clear)
  const toastRef = useRef<HTMLDivElement>(null)

  const toastType = {
    success: "bg-green-700 text-green-50",
    error: "bg-red-500 text-red-50",
    warning: "bg-yellow-500 text-yellow-50",
    info: "bg-blue-500 text-blue-50",
  }
  const toastValue = toastType?.[value?.type || "info"]

  const toastTimeLine = gsap.timeline({ paused: false })

  useGSAP(
    () => {
      if (!value || !toastRef.current) return
      toastTimeLine
        .from(toastRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(toastRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(toastRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          delay: 1,
          ease: "power2.out",
          onComplete: clear,
        })
    },
    { scope: toastRef, dependencies: [value] },
  )
  if (!value) return null
  return (
    <div ref={toastRef} className={cn(baseClass, toastValue)}>
      <p className="text-sm">{value?.title}</p>
      <p className="text-sm">{value?.description}</p>
    </div>
  )
}
