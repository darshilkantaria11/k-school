const DevelopmentTable = () => {
    return (
      <div className="max-w-4xl mx-auto p-4 lv">
       
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-g1 text-white">
                <th className="p-4 text-left font-bold">Key Areas of Focus</th>
                <th className="p-4 text-left font-bold">Activities</th>
                <th className="p-4 text-left font-bold">Developmental Goals</th>
              </tr>
            </thead>
            <tbody>
              {/* Sensory Exploration */}
              <tr className="border-b bg-t1 border-tb1">
                <td className="p-4 font-bold text-g4">Sensory Exploration</td>
                <td className="p-4 text-gray-700">
                  Sensory bins with sand, water, and textures; finger painting; music and rhythm sessions
                </td>
                <td className="p-4 text-gray-700">
                  Develop fine motor skills and sensory processing
                </td>
              </tr>
  
              {/* Language Development */}
              <tr className="border-b bg-t2 border-tb2">
                <td className="p-4 font-bold text-g4">Language Development</td>
                <td className="p-4 text-gray-700">
                  Storytime with interactive picture books, sing-alongs, naming objects
                </td>
                <td className="p-4 text-gray-700">
                  Enhance vocabulary, language recognition, and early communication skills
                </td>
              </tr>
  
              {/* Gross Motor Development */}
              <tr className="border-b bg-t3 border-tb3">
                <td className="p-4 font-bold text-g4">Gross Motor Development</td>
                <td className="p-4 text-gray-700">
                  Soft climbing structures, ball play, and dancing
                </td>
                <td className="p-4 text-gray-700">
                  Strengthen coordination, balance, and physical awareness
                </td>
              </tr>
  
              {/* Social Interactions */}
              <tr className="bg-t4 border-tb4 border-b">
                <td className="p-4 font-bold text-g4">Social Interactions</td>
                <td className="p-4 text-gray-700">
                  Playgroups, shared games, and role-playing activities
                </td>
                <td className="p-4 text-gray-700">
                  Build empathy, sharing, and cooperation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DevelopmentTable;
  