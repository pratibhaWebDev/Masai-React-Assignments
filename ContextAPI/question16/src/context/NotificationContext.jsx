// src/context/NotificationContext.jsx
import { createContext, useContext, useState, useEffect, useRef } from 'react'

export const NotificationContext = createContext()

let idCounter = 1

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])
  const intervalRef = useRef(null)

  const addNotification = (message) => {
    const newNotification = {
      id: idCounter++,
      message,
      read: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
    // Play sound or toast
    alert('🔔 ' + message)
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const startNotifications = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        addNotification('You have a new message!')
      }, 5000)
    }
  }

  const stopNotifications = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  useEffect(() => {
    startNotifications()
    return () => stopNotifications()
  }, [])

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      markAllAsRead,
      stopNotifications
    }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
