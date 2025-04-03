import React from "react";
import { teamMembers } from "./teamData";
import TeamMember from "./components/TeamMember";

const App = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              The creative crew
            </h1>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold mb-2">Who we are</h2>
            <p className="text-gray-600">
              We are team of creatively diverse, driven, innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="[&:nth-child(2n+1)]:sm:-mt-12 [&:nth-child(3n+2)]:lg:mt-20">
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center text-gray-500 text-sm">
          created by Luis Portugal
        </footer>
      </div>
    </div>
  );
};

export default App;
