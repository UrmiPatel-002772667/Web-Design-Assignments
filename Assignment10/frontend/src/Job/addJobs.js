import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AddJobs = () => {
    const [jobData, setJobData] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/admin/create/job', jobData);
            alert('Job successfully added!');
            setJobData({ companyName: '', jobTitle: '', description: '', salary: '' });
        } catch (error) {
            alert('Failed to add job.');
        }
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', p: 4, bgcolor: '#B5E4F8' }} height={'560px'}>
            <Typography variant="h4"  align='center' color={'#1E6F91'} gutterBottom>
                Add New Job
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={jobData.companyName}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Job Title"
                    name="jobTitle"
                    value={jobData.jobTitle}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={jobData.description}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                />
                <TextField
                    fullWidth
                    label="Salary"
                    name="salary"
                    value={jobData.salary}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </form>
        </Box>
    );
};

export default AddJobs;