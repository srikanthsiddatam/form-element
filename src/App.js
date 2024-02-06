import {useState} from 'react'
const App = () =>
{
  // const [email,setemail]=useState()
  // const [pwd,setpwd]=useState()

  // const [error,seterror] = useState({
  //   email:'',
  //   pwd:" "
  // })


  // const handleSubmit = () =>
  // {

  //   if(email ===  ""){
  //     seterror({...error,email:"enter email address"})
  //   }
  //   else{
  //     seterror({...error,email:""})
  //   }


  // }


const [email,setemail]=useState("")
const [pwd,setpwd]=useState("")
const [error,seterror]=useState("")

const handleSubmit = (e) => {
  e.preventDefalut();
  if(email===""){
    seterror("please email")
  }
  else{
  console.log("email",email)
  // console.log("password",pwd)

  // reset field

  // setemail("")
  // setpwd("")
  }
}


  return(
    <>
    {/* <div className='w-50 m-auto border mt-5'>
      <h1 > login Form </h1>
      <div>
      <label for="user" className='form-label '> User</label>
      <input type="email" className='form-control mt-3' value={email}
      onChange={((e)=>{
        setemail(e.target.value)
      })}
      placeholder='Enter Email'/>

      {error.email && <span className='text-danger'>{error.email}</span>}
      </div>
      <div>
      <label for="user" className='form-label '> Password</label>
      <input type="password" className='form-control mt-3' value={pwd}
      onChange={((e)=>{
        setpwd(e.target.value)
      })}
       placeholder='Enter Password'/>

{error.pwd && <span className='text-danger'>{error.pwd}</span>}




      </div>

      <div>
        <button className='bg-primary mt-3 ' onClick={handleSubmit}>sign in </button>
      </div>

    </div>
    
     */}



     <form>
      <label>Email</label>
      <input type="email" placeholder='enter Email' value={email}
      onChange={(event)=>{
        setemail(event.target.value)

      }}
      
      ></input>
      {error && <p style={{color:"red"}}>{error}</p>}
      <br></br><br></br>
      <label>Password</label>
      <input type="password" placeholder="Enter Password" value={pwd}
      onChange={(event)=>{
        setpwd(event.target.value)
      }}



      /> <br></br><br></br>

      <button onClick={handleSubmit}>Submit</button>

      <button type="button" onClick={()=>{
        setemail("")
        setpwd("")
      }}>reset</button>
     </form>
     






    </>
  )

}
export default App