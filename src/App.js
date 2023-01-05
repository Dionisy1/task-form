import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
    const infoRef = useRef();
    const [values, setValues] = useState({
        name: '',
        password: '',
        employees: '0',
        discription: '',
        sphere: 'front',
        userType: 'corporate',
        tac: false,
        pin: '',
        uic: '',
    });

    useEffect(() => {
        if (values.name && values.employees) {
            infoRef.current.value`${values.name} ${values.employees}`;
        }
    }, [values.name, values.employees]);


    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <h1>Trading Companies</h1>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input id="company" type="text" name='company' value={values.company} onChange={changeHandler} required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" name='password' value={values.password} onChange={changeHandler} required />
                    </div>
                    <div>
                        <label htmlFor="employees">Number of Employees:</label>
                        <input id="employees" type="number" name='employees' value={values.employees} onChange={changeHandler} required />
                    </div>
                    <div>
                        <label htmlFor="discription">Discription:</label>
                        <textarea name='discription' id='discription' cols='20' rows='5' value={values.discription} onChange={changeHandler} required />
                    </div>
                    <div>
                        <label htmlFor="sphere">Sphere of Activity:</label>
                        <select name="sphere" id="sphere" value={values.sphere} onChange={changeHandler}>
                            <option value="front">Front End</option>
                            <option value="back">Back End</option>
                            <option value="designe">Designe</option>
                            <option value="cloud">Cloud</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="individual-user-type">Individual:</label>
                        <input type="radio" name='userType' value="individual" id='individual-user-type' onChange={changeHandler} checked={values.userType === 'individual'} />
                        <label htmlFor="corporate-user-type">Corporate:</label>
                        <input type="radio" name='userType' value="corporate" id='corporate-user-type' onChange={changeHandler} checked={values.userType === 'corporate'} />
                    </div>
                    <div>
                        <label htmlFor="identifier">{values.userType === 'individual' ? 'PIN' : 'UIC'}</label>

                        {values.userType === 'individual'
                            ? <input type="text" id="Identifier" name="pin" value={values.pin} onChange={changeHandler} required />
                            : <input type="text" id="Identifier" name="uic" value={values.uic} onChange={changeHandler} required />
                        }
                    </div>
                    <div>
                        <label htmlFor="tac">Terms and Conditions</label>
                        <input type="checkbox" name='tac' id='tac' checked={values.tac} onChange={changeHandler} required />
                    </div>
                    <div>
                        <input id='button' type="submit" value="Login" />
                        {/* <button type="submit">Login</button> */}
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
