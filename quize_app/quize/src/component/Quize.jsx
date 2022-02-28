import React , {useState, useEffect}from 'react'

function Quize( data , setTimeOut, questionNumber , setQuestionNumber) {

      const [question , setQuestion] = useState(null);

      useEffect(() => {
        setQuestion( data[questionNumber - 1])
          
      }, [data , questionNumber])
    





    return (
        <div className ="quize">
            <div className="question">{question?.ques}</div>
            <div className="answeres">
                {question?. answeres.map((e) =>(
                    <div className="answer">{e.text}</div>
                ))}
                
                
            </div>
            
        </div>
    )
}

export default Quize
