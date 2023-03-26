import React,{useState} from 'react';
import "../styles/form.css"
function MyForm(){
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[lastname,setLastname] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    var phonepattern = /^[0-9]+$/;
    // var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("It works!")
    }
    function handleEmailChange(n){
        setEmail(n.target.value)
    }
    function handleNameChange(n){
        setName(n.target.value)
    }
    function handleLastNameChange(n){
        setLastname(n.target.value)
    }
    function handlePhonenumberChange(n){
        if(n.target.value.match(phonepattern)){
            setPhone(n.target.value)
        }else{
            setPhone("")
        }
    }
    function handlePasswordChange(n){
        setPassword(n.target.value)
    }
    return(
        <div className="form">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email Address:
                    <input type="text" name="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                    </label>
                    <br/>
                    <label>
                    Name:
                    <input type="text" name="name" pattern="\^[a-z][A-Z]$\" placeholder="Enter name" value={name} onChange={handleNameChange} required />
                    </label>
                    <br/>
                    <label>
                    Lastname:
                    <input type="text" name="lastname"  pattern="\^[a-z][A-Z]$\" placeholder="Enter lastname" value={lastname} onChange={handleLastNameChange} required />
                    </label>
                    <br/>
                    <label>
                    Phone Number
                    <input type="tel" pattern="^\d{10}$" name="phone" placeholder="Enter Phone Number" value={phone} onChange={handlePhonenumberChange}required/>
                    </label>
                    <br/>
                    <label>
                    Password:
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                    <br/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default MyForm;