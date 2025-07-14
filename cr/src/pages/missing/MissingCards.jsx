import React from "react";
import { BadgeCheck, Search, CheckCircle } from "lucide-react";

const dummyMissingPersons = [
  {
    id: 1,
    name: "Rohit Sharma",
    age: 22,
    location: "Lucknow, UP",
    lastSeen: "Near Charbagh Station",
    status: "Verified",
    image: "/pics/person1.jpg", // place your local dummy images
  },
  {
    id: 2,
    name: "Sana Fatima",
    age: 16,
    location: "Delhi",
    lastSeen: "Connaught Place Metro",
    status: "Pending",
    image: "/pics/person2.jpg",
  },
  {
    id: 3,
    name: "Manoj Verma",
    age: 35,
    location: "Bhopal, MP",
    lastSeen: "Bus Stand Sector 3",
    status: "Found",
    image: "/pics/person3.jpg",
  },
];

const statusBadge = {
  Verified: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Found: "bg-blue-100 text-blue-700",
};

const MissingCards = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Reported Missing Persons
        </h2>
        <p className="text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-2xl mx-auto">
          These are publicly visible reports. You can filter, search, and help by sharing or providing leads.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
          {dummyMissingPersons.map((person) => (
            <div
              key={person.id}
              className="rounded-xl overflow-hidden border shadow hover:shadow-md bg-white transition-all"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left space-y-2">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {person.name}, {person.age}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  <span className="font-medium">Last Seen:</span> {person.lastSeen}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  <span className="font-medium">Location:</span> {person.location}
                </p>
                <div
                  className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${statusBadge[person.status]}`}
                >
                  {person.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissingCards;
