// src/App.jsx
import NotificationList from './components/NotificationList'
import { NotificationProvider, useNotification } from './context/NotificationContext'

const Controls = () => {
  const { markAllAsRead, stopNotifications } = useNotification()

  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={markAllAsRead}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Mark All as Read
      </button>
      <button
        onClick={stopNotifications}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Stop Notifications
      </button>
    </div>
  )
}

const App = () => {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
        <NotificationList />
        <Controls />
      </div>
    </NotificationProvider>
  )
}

export default App
