import React, { useState, useEffect } from "react";
import { Grid, TextField, Container, FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import useForm from "./useForm";

// const styles = theme => ({
//     textfield: {
//         width: theme.width(400)
//     }
// })

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smallMargin: {
        margin: theme.spacing(1),
    }
})


const InitialFieldValues = {
    fullName: '/',
    mobile: '/',
    email: '/',
    age: '/',
    bloodGroup: '/',
    address: '/'
}



const DCandidateForm = ({ classes, ...props }) => {


    const {
        values,
        Setvalues,
        handleOnChanged
    } = useForm(InitialFieldValues)


    // const {
    //     values,
    //     Setvalues,
    //     error,
    //     setError,
    //     handleOnChanged
    // } = useForm(InitialFieldValues);

    // const validate = () =>{
    //     let temp ={}
    //     temp.fullName = values.fullName?"":"This field is required."
    //     temp.mobile = values.mobile?"":"This field is required."
    //     temp.bloodGroup = values.bloodGroup?"":"This field is required."
    //     temp.email = (/^&|.+@.+..+/).test(values.email)? "":"Email is not valid."
    //     setError({
    //         ...temp
    //     })
    //     return Object.values(temp).every(x => x == "")
    // }






    // const handleOnChanged = event => {
    //     const { name, value } = event.target
    //     Setvalues({
    //         ...values, [name]: value
    //     })
    // }   

    const inputLabel = React.useRef(null);

    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        // if(validate())
        // {
        //     window.alert('validation succeeded');
        // }
    }

    return (
        <form autocomplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleOnChanged}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleOnChanged}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                        <Select
                            name="bloodGroup"
                            value={values.bloodGroup}
                            onChange={handleOnChanged}
                            labelWidth={labelWidth}>
                            <MenuItem value="">Select Blood Group</MenuItem>
                            <MenuItem value="A">A</MenuItem>
                            <MenuItem value="B">B</MenuItem>
                            <MenuItem value="O">O</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleOnChanged}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        onChange={handleOnChanged}
                    />
                    <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleOnChanged}
                    />
                    <div>
                        <button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smallMargin}>
                            Submit
                        </button>
                        <button
                            variant="contained"
                            color="primary"
                            type="reset"
                            className={classes.smallMargin}>
                            Reset
                        </button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles)(DCandidateForm);