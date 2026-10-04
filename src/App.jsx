import React from 'react'

const App = () => {
  function dhirajjadhav(){
    alert("this is dhiraj jadhav")
  }
  function dhiru(){
    alert("para ke upar mouse leke aye ho")
  }
  function dhirajj(e){
    console.log("the value till now",e.target.value)

  }
  function onSubmit(e){
    e.preventDefault();
    console.log(alert("this is dhirajjadhav practise"))

  }
  return (
    <div>
      <button onClick={()=>alert("this is dhirajjadhav")}>click me</button>
     
<p onMouseOver={dhiru}>para</p>

<form onSubmit={onSubmit}>
  <input onChange={dhirajj}></input>
  <button type="submit">submit</button>
</form>
</div>


  )
}

    
  


export default App