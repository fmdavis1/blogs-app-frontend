import RegisterForm from '../forms/RegisterForm'
import LoginForm from '../forms/LoginForm'
import {useState} from 'react'
import Giphy from '../pages/Giphy'
const Landing = (props) => {
    console.log(props)
    const [hasAccount, setHasAccount] =  useState(false)
    const {setUser} = props
    const { item } = props;
    
    return(
       
   
    //   <div>
    //     <h2>{item.title}</h2>
  
    //     <img src={item.images.original.url} alt={item.title} />
    //   </div>
    <div>
          
        <h1>Landing Page</h1>
       { hasAccount === false ?(
        <div>
            <Giphy />
             <RegisterForm setUser={setUser} />
             <p>
                Already has an Account? {''}
             <span className="btn btn-primary" onClick={() => setHasAccount(true)}>Login</span> {""}
             </p>
            </div>
       ) :(<LoginForm setUser={setUser}/>)}
    </div>
    );
};
export default Landing;