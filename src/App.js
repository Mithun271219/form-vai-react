import React from 'react'
import Form from './form';
import FormFunc from './FormFunctional';

class App extends React.Component{
  

  render(){
    return(
      <>
      <h1>Job Application</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6"><Form /></div>
          <div className="col-md-6"><FormFunc /></div>
        </div>
      </div>

      </>
    )
  }
}

export default App;
