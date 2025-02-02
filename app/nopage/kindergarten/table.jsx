const DevelopmentTable = () => {
    return (
      <div className="max-w-6xl mx-auto p-4 lv">
       
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-g1 text-white">
                <th className="p-4 text-left font-bold">Core Curriculum Areas</th>
                <th className="p-4 text-left font-bold">Learning Activities</th>
                <th className="p-4 text-left font-bold">Skills Developed</th>
              </tr>
            </thead>
            <tbody>
              {/* Sensory Exploration */}
              <tr className="border-b bg-t1 border-tb1">
                <td className="p-4 font-bold text-g4">Literacy and Phonics</td>
                <td className="p-4 text-gray-700">
                Phonics practice, guided reading sessions, early writing exercises
                </td>
                <td className="p-4 text-gray-700">
                Strong reading foundation, word recognition, and early writing skills
                </td>
              </tr>
  
              {/* Language Development */}
              <tr className="border-b bg-t2 border-tb2">
                <td className="p-4 font-bold text-g4">Math and Problem Solving</td>
                <td className="p-4 text-gray-700">
                Counting games, basic addition and subtraction, puzzles, pattern recognition
                </td>
                <td className="p-4 text-gray-700">
                Develops logical thinking, math fluency, and critical thinking
                </td>
              </tr>
  
              {/* Gross Motor Development */}
              <tr className="border-b bg-t3 border-tb3">
                <td className="p-4 font-bold text-g4">Science and Exploration</td>
                <td className="p-4 text-gray-700">
                Nature walks, simple experiments, exploration of natural phenomena
                </td>
                <td className="p-4 text-gray-700">
                Encourages curiosity, observation skills, and an understanding of the world around them
                </td>
              </tr>
  
              {/* Social Interactions */}
              <tr className="bg-t4 border-tb4 border-b">
                <td className="p-4 font-bold text-g4">Social Skills and Teamwork</td>
                <td className="p-4 text-gray-700">
                Group projects, collaborative games, conflict resolution exercises
                </td>
                <td className="p-4 text-gray-700">
                Builds cooperation, communication, and self-regulation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DevelopmentTable;
  