
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {

  const handleSignUpSubmit = e =>{
    e.preventDefault();
}
  
  const handleUpdateProfile = e =>{
    e.preventDefault();
  }
  return (
    <>
      <h1>Vite + React</h1>
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update'></ReusableForm>
    </>
  )
}

export default App
