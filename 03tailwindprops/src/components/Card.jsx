import React from 'react'

function Card({name}) {
    console.log(name);
    
  const profiles = [
    {
      name: "Alexandra Smith",
      role: "CEO & Founder",
      image: "https://picsum.photos/200?random=30",
      bio: "Leading innovation in tech for over 15 years",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ]

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Profile Cards
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-lg transition-shadow"
          >
            <img
              src={profile.image}
              className="rounded-full w-32 h-32 mb-4 mx-auto object-cover"
              alt={profile.name}
            />
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
              {profile.role}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {profile.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
