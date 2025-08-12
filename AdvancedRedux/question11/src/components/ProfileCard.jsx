import React, { useState } from "react";

// ProfileCard.jsx
// A simple, reusable React component (Tailwind) with image, name, bio, follow/unfollow

export default function ProfileCard({
  name = "Pratibha Yadav",
  title = "JavaScript Developer",
  bio = "Building cool web apps. Learner. Coffee enthusiast.",
  avatar = "https://via.placeholder.com/160",
  initialFollowers = 246,
  initiallyFollowing = false,
}) {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing);
  const [followers, setFollowers] = useState(initialFollowers);
  const [loading, setLoading] = useState(false);

  function toggleFollow() {
    // emulate small async action
    setLoading(true);
    setTimeout(() => {
      setIsFollowing((s) => {
        const next = !s;
        setFollowers((f) => (next ? f + 1 : f - 1));
        return next;
      });
      setLoading(false);
    }, 350);
  }

  return (
    <div className="max-w-sm w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-5 flex items-center gap-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border-2 border-gray-100"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-lg font-semibold text-slate-900 truncate">{name}</div>
              <div className="text-sm text-slate-500">{title}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFollow}
                disabled={loading}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 focus:outline-none 
                  ${isFollowing ? "bg-slate-100 text-slate-700 border" : "bg-blue-600 text-white"}`}
              >
                {loading ? "..." : isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>

          <p className="mt-2 text-sm text-slate-600 line-clamp-2">{bio}</p>

          <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 8a4 4 0 118 0 4 4 0 01-8 0zm9 2a6 6 0 10-12 0v1a2 2 0 002 2h8a2 2 0 002-2v-1z" />
              </svg>
              <span>{followers.toLocaleString()} followers</span>
            </div>

            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              <span className="capitalize">1 mutual</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button className="text-sm px-3 py-1 rounded-lg bg-white/70 border">Message</button>
          <button className="text-sm px-3 py-1 rounded-lg bg-white/70 border">Visit</button>
        </div>

        <div className="text-xs text-slate-500">Joined May 2024</div>
      </div>
    </div>
  );
}
