import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState({firstName:"", lastName:""});
  function handel(e){
      e.preventDefault();
      console.log({name})
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({...name, firstName: e.target.value })}
          type="text"
          value={name.ferstName}
        /> <br />
        <input
          onChange={(e) => setName({...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        /> <br />
        <button onClick={(e)=>handel(e)} >submit</button>
      </form>
    </div>
  );
}
