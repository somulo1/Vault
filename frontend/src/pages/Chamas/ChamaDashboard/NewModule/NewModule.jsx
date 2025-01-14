import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Snackbar,
  Alert,
} from '@mui/material';

const NewModule = () => {
  const [ModuleName, setModuleName] = useState('');
  const [ModuleDescription, setModuleDescription] = useState('');
  const [ModuleType, setModuleType] = useState('');
  const [ModuleRules, setModuleRules] = useState('');
  const [ModuleIcon, setModuleIcon] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to create a new Chama goes here
    setSnackbarMessage('Module created successfully!');
    setOpenSnackbar(true);
    // Reset form fields
    setModuleName('');
    setModuleDescription('');
    setModuleType('');
    setModuleRules('');
    setModuleIcon(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Chama Module
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Module Name"
          fullWidth
          required
          value={ModuleName}
          onChange={(e) => setModuleName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          required
          value={ModuleDescription}
          onChange={(e) => setModuleDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <InputLabel>module Type</InputLabel>
          <Select
            value={ModuleType}
            onChange={(e) => setModuleType(e.target.value)}
          >
            <MenuItem value="savings">Savings</MenuItem>
            <MenuItem value="investment">Investment</MenuItem>
            <MenuItem value="Welafare">Welfare</MenuItem>
            <MenuItem value="Welafare">others</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth required sx={{ mb: 2 }}>
          <InputLabel>Currency</InputLabel>
          <Select
            value={ModuleType.toString()}
            onChange={(e) => setModuleType(e.target.value)}
          >
            <MenuItem value="USD $">USD $</MenuItem>
            <MenuItem value="KSH">KSH</MenuItem>
            <MenuItem value="Euro £">Euro £</MenuItem>
            <MenuItem value="Nyra ₦">Nyra ₦</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Module Rules"
          fullWidth
          multiline
          rows={4}
          required
          value={ModuleRules}
          onChange={(e) => setModuleRules(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Button variant="auto" component="label" sx={{ mb: 2 }}>
          Upload Icon
          <input
            type="file"
            hidden
            onChange={(e) => setModuleIcon(e.target.files[0])}
          />
          
        </Button >
        <Button type="submit" variant="contained" color="primary">
          Create Module
        </Button>
        </Box>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewModule;
