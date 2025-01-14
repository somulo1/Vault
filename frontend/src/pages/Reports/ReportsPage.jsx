import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const ReportsPage = () => {
  const [reportType, setReportType] = useState('financial');
  const [timeRange, setTimeRange] = useState('month');

  // Mock data - replace with actual API data
  const financialData = [
    { month: 'Jan', contributions: 50000, loans: 30000, investments: 20000 },
    { month: 'Feb', contributions: 55000, loans: 35000, investments: 25000 },
    { month: 'Mar', contributions: 45000, loans: 25000, investments: 30000 },
    { month: 'Apr', contributions: 60000, loans: 40000, investments: 35000 },
  ];

  const activityLog = [
    {
      id: 1,
      date: '2025-01-12',
      action: 'Payment Received',
      user: 'John Doe',
      details: 'Monthly contribution - KES 5,000',
    },
    {
      id: 2,
      date: '2025-01-11',
      action: 'Loan Approved',
      user: 'Jane Smith',
      details: 'Business Loan - KES 50,000',
    },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Typography variant="h4" component="h1">
          Reports & Analytics
        </Typography>
          </Box>
    <Box>
    <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{ bgcolor: '#1a237e' }}
        >
          Export Report
        </Button>
    </Box>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={9} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Report Type</InputLabel>
                    <Select
                      value={reportType}
                      label="Report Type"
                      onChange={(e) => setReportType(e.target.value)}
                    >
                      <MenuItem value="financial">Financial Report</MenuItem>
                      <MenuItem value="membership">Membership Report</MenuItem>
                      <MenuItem value="activity">Activity Log</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={9} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Time Range</InputLabel>
                    <Select
                      value={timeRange}
                      label="Time Range"
                      onChange={(e) => setTimeRange(e.target.value)}
                    >
                      <MenuItem value="week">Last Week</MenuItem>
                      <MenuItem value="month">Last Month</MenuItem>
                      <MenuItem value="quarter">Last Quarter</MenuItem>
                      <MenuItem value="year">Last Year</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {reportType === 'financial' && (
          <>
            <Grid item xs={9} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Contributions
                  </Typography>
                  <Typography variant="h4">
                    KES {financialData.reduce((acc, item) => acc + item.contributions, 0).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={9} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Loans
                  </Typography>
                  <Typography variant="h4">
                    KES {financialData.reduce((acc, item) => acc + item.loans, 0).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={9} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Investments
                  </Typography>
                  <Typography variant="h4">
                    KES {financialData.reduce((acc, item) => acc + item.investments, 0).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Financial Overview
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Month</TableCell>
                          <TableCell align="right">Contributions</TableCell>
                          <TableCell align="right">Loans</TableCell>
                          <TableCell align="right">Investments</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {financialData.map((row) => (
                          <TableRow key={row.month}>
                            <TableCell>{row.month}</TableCell>
                            <TableCell align="right">KES {row.contributions.toLocaleString()}</TableCell>
                            <TableCell align="right">KES {row.loans.toLocaleString()}</TableCell>
                            <TableCell align="right">KES {row.investments.toLocaleString()}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {reportType === 'activity' && (
          <Grid item xs={9}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activityLog.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{log.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ReportsPage;
