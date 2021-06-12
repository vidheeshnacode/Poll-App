import React from "react";
import { useHistory } from "react-router-dom";

const ListPolls = ({ polls }) => {
  let history = useHistory();
  const showPoll = id => {
    history.push(`poll/${id}/show`);
  };
  return (
    <div >
      
        
        <div class="container mt-4 mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {polls?.map(poll => (
            <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <div class="m-3">
                <div
                  onClick={() => showPoll(poll.id)}
                  key={poll.id}
                >
                <h2 class="text-lg mb-2">{poll.title}</h2>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
          
        
      
    </div>
  );
};

export default ListPolls;
