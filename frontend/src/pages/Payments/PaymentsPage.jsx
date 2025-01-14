import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const PaymentsPage = () => {
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [paymentType, setPaymentType] = useState('mpesa');

  // Mock data - replace with actual API data
  const transactions = [
    { id: 1, date: '2025-01-12', type: 'Mpesa', amount: 5000, status: 'Completed', reference: 'MPE123456' },
    { id: 2, date: '2025-01-11', type: 'Bank', amount: 10000, status: 'Pending', reference: 'BNK789012' },
  ];

  const handleNewPayment = () => {
    setOpenPaymentDialog(true);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h1">
          Payments
        </Typography>
       
      </Box>
 <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleNewPayment}
          sx={{ bgcolor: '#1a237e' }}
        >
          New Payment
        </Button>
      <Grid container spacing={3} sx={{ maxWidth: '1200px', margin: '0 auto', mx: 'auto' }}>
        <Grid item xs={8} md={4}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6">Total Payments</Typography>
              <Typography variant="h4">
                KES {transactions.reduce((acc, trans) => acc + trans.amount, 0).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} md={4}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6">Pending Payments</Typography>
              <Typography variant="h4">
                KES {transactions
                  .filter(trans => trans.status === 'Pending')
                  .reduce((acc, trans) => acc + trans.amount, 0)
                  .toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} md={4}>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6">Completed Payments</Typography>
              <Typography variant="h4">
                KES {transactions
                  .filter(trans => trans.status === 'Completed')
                  .reduce((acc, trans) => acc + trans.amount, 0)
                  .toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <TableContainer component={Paper} sx={{ overflowX: { xs: 'auto', sm: 'none' } }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Reference</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>KES {transaction.amount.toLocaleString()}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                     <TableCell>{transaction.reference}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog open={openPaymentDialog} onClose={() => setOpenPaymentDialog(false)}>
        <DialogTitle>New Payment</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <FormControl widthauto sx={{ mb: 2 }}>
              <InputLabel>Payment Type</InputLabel>
              <Select
                value={paymentType}
                label="Payment Type"
                onChange={(e) => setPaymentType(e.target.value)}
              >
                <MenuItem value="mpesa">M-Pesa</MenuItem>
                <MenuItem value="bank">Bank Transfer</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              sx={{ mb: 2 }}
            />
            {paymentType === 'mpesa' ? (
              <TextField
                fullWidth
                label="Phone Number"
                sx={{ mb: 2 }}
              />
            ) : (
              <>
                <TextField
                  fullWidth
                  label="Bank Name"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Account Number"
                  sx={{ mb: 2 }}
                />
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPaymentDialog(false)}>Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: '#1a237e' }}>
            Make Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PaymentsPage;
