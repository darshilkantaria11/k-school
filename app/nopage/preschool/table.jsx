const DevelopmentTable = () => {
    return (
      <div className="max-w-6xl mt-8 mx-auto p-4 lv">
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-g1 text-white">
                <th className="p-4 text-left font-bold">Key Areas of Focus</th>
                <th className="p-4 text-left font-bold">Program Elements</th>
                <th className="p-4 text-left font-bold">Benefits for Children</th>
              </tr>
            </thead>
            <tbody>
              {/* Sensory Exploration */}
              <tr className="border-b bg-t1 border-tb1">
                <td className="p-4 font-bold text-g4">Early Literacy</td>
                <td className="p-4 text-gray-700">
                Phonics games, storytelling sessions, interactive read-alouds
                </td>
                <td className="p-4 text-gray-700">
                Boosts language skills, prepares for early reading, and improves communication
                </td>
              </tr>
  
              {/* Language Development */}
              <tr className="border-b bg-t2 border-tb2">
                <td className="p-4 font-bold text-g4">Basic Numeracy</td>
                <td className="p-4 text-gray-700">
                Hands-on math games, puzzles, and counting activities
                </td>
                <td className="p-4 text-gray-700">
                Encourages number recognition, counting, and problem-solving abilities
                </td>
              </tr>
  
              {/* Gross Motor Development */}
              <tr className="border-b bg-t3 border-tb3">
                <td className="p-4 font-bold text-g4">Creative Expression</td>
                <td className="p-4 text-gray-700">
                Art projects (painting, crafting), imaginative role-playing, music and dance
                </td>
                <td className="p-4 text-gray-700">
                Enhances creativity, emotional expression, and fine motor development
                </td>
              </tr>
  
              {/* Social Interactions */}
              <tr className="bg-t4 border-tb4 border-b">
                <td className="p-4 font-bold text-g4">Social and Emotional Growth</td>
                <td className="p-4 text-gray-700">
                Group games, circle time discussions, conflict resolution activities
                </td>
                <td className="p-4 text-gray-700">
                Promotes empathy, teamwork, and emotional intelligence
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DevelopmentTable;
  