import React, {useState} from 'react';
import './App.css';
import Quize from './component/Quize';

function App() {



  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);


  const data = [
    {
      id:1,
      ques: "Rolex is a what type of Company",
      answeres: [
        {
          text: "phone",
          correct: false,
        },

        {
          text: "watch",
          correct: true,
        },

        {
          text: "food",
          correct: false,
        },

        {
          text: "cosmetic",
          correct: false,
        },
      ]
    },

    {
      id:2,
      ques: "when facebook invented",
      answeres: [
        {
          text: "2004",
          correct: true,
        },

        {
          text: "2005",
          correct: false,
        },

        {
          text: "2006",
          correct: false,
        },

        {
          text: "2007",
          correct: false,
        },
      ]
    },

    {
      id:3,
      ques: " how many day have january ",
      answeres: [
        {
          text: "29",
          correct: false,
        },

        {
          text: "31",
          correct: true,
        },

        {
          text: "14",
          correct: false,
        },

        {
          text: "28",
          correct: false,
        },
      ]
    },


  ];



  
          
   const moneyPyramid = [
     {id : 1 , amount: "$ 100"},
     {id : 2 , amount: "$ 200"},
     {id : 3, amount: "$ 300"},
     {id : 4 , amount: "$ 500"},
     {id : 5 , amount: "$ 1000"},
     {id : 6 , amount: "$ 2000"},
     {id : 7 , amount: "$ 4000"},
     {id : 8, amount: "$ 9000"},
     {id : 9 , amount: "$ 16000"},
     {id : 10 , amount: "$ 32000"},
     {id : 11 , amount: "$ 64000"},
     {id : 12, amount: "$ 125000"},
     {id : 13 , amount: "$ 250000"},
     {id : 14 , amount: "$ 350000"},
     {id : 15 , amount: "$ 500000"},
     {id : 16 , amount: "$ 1000000"},
   ].reverse()



  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          
          <Quize data ={data}
           setTimeOut = {setTimeOut}
           setQuestionNumber ={setQuestionNumber}
           questionNumber ={questionNumber}

          />

        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m => (

              <li className ={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                 <span className =" moneyListItemNumber">{m.id}</span>
                 <span className =" moneyListItemAmount">{m.amount}</span>
              </li>

          ))}
          
          
        </ul>
      </div>
    </div>
  );
}

export default App;
