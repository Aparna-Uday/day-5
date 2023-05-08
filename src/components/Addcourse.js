import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Addcourse = () => {
    const {register,handleSubmit}=useForm();
    const createCourse=(val)=>{
        axios.post("http://localhost:5000/course/create",val)
       .then((response)=>{
     console.log(response.data);
     alert("Course Successfully Created");
       })
    }
  return (
    <div>
      <Typography variant='h3'>Add Course</Typography>
      <TextField  name="courseName"{...register("courseName")}variant='outlined' label="Course Name" fullWidth></TextField><br></br>
      <TextField  name="courseDesc"{...register("courseDesc")}variant='outlined' label="Course Description" fullWidth></TextField><br></br>
      <TextField name="courseDuration"{...register("courseDuration")} variant='outlined' label="Course Duration" fullWidth></TextField><br></br>
      <TextField  type='date' name="courseStartDate" {...register("courseStartDate")}variant='outlined' label="Course StartDate" fullWidth></TextField>
     <Button onClick={handleSubmit(createCourse)}variant="contained" color='success'>Add Course</Button>
    </div>
  )
}

export default Addcourse
