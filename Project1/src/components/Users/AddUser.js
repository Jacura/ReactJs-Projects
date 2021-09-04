import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {

    const [entererdUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState('')
    const [error,setError] = useState()


    const addUserHandler = (event) => {
        // console.log(entererdUsername,"djjjjjjj")
        event.preventDefault();
        if (entererdUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Invalid Input",
                message:"Enter a valid Age or username"

            })
            return;
        }
        //plus sign is bez to convert type to no. here
        if (+enteredAge < 1) {
            setError({
                title:"Invalid Age",
                message:"Enter a valid Age"

            })
            return;
        }
        console.log(enteredAge, entererdUsername)
        props.onAddUser(entererdUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const errorHandler = ()=>{
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input id="username" type="text" value={entererdUsername} onChange={(e) => setEnteredUsername(e.target.value)} />
                    <label htmlFor="age">
                        Age (Years)
                    </label>
                    <input id="age" type="number" value={enteredAge} onChange={(e) => setEnteredAge(e.target.value)} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>

        </div>

    )
}

export default AddUser
