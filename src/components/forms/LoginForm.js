import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const LoginForm  = (props) => {
const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // const [username, setUsername] = useState(')

    //Another way to do handlesubmit with a trycatch
//     const handleSubmit = async(e) => {
//         e.preventDefault()
//             console.log(formData)
// try {
//     const res = await axios.post('http://localhost:5000/users', formData)
//             .then(
//         res => console.log(res))
        
            
//         } catch (error) {
//             console.error(error)
            
//         }
//     }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    axios.post('http://localhost:5000/auth', formData)
            .then((res) => {console.log(res.data)
       if(res.data.token && res.data.user ){
        localStorage.setItem('userToken', res.data.token)
        props.setUser(res.data.user)
        history.push('/home')
       }else{
        console.error(res.data)
       }
    })
    }
    return (
        
            <form onSubmit={handleSubmit}>

               <div className="mb-3">
               <label  className="form-label" htmlFor='email'>Email</label>
                <input className="form-control" type='text' id='email' name='email' value={formData.email}
                onChange={(e) => setFormData({...formData, [e.target.id]:e.target.value})}/>
               </div>

                <div className="mb-3">
                <label className="form-label" htmlFor='password'>Password</label>
                <input className="form-control" type='password' id='password' name='password' value={formData.password}
                onChange={(e) => setFormData({...formData, [e.target.id]:e.target.value})}/>
                </div>
                <input type='submit' className="btn btn-info"/>
                
            </form>
        
    )
}

export default LoginForm;