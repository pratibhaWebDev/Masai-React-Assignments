// src/components/NotificationList.jsx
import { useNotification } from '../context/NotificationContext'

const NotificationList = () => {
  const { notifications } = useNotification()

  return (
    <div className="p-4 border rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul>
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`p-2 border-b ${!n.read ? 'font-bold bg-yellow-100' : ''}`}
            >
              {n.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NotificationList
