import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';

const SettingsPage = () => {
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  // Mock data - replace with actual API data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254 712 345 678',
    role: 'Chairperson',
  };

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Profile & Security</Typography>
              </Box>
              <TextField
                fullWidth
                label="Full Name"
                defaultValue={user.name}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue={user.email}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                defaultValue={user.phone}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Role"
                defaultValue={user.role}
                disabled
                sx={{ mb: 3 }}
              />
              <Button variant="outlined" color="primary"
                onClick={() => setOpenPasswordDialog(true)}
                sx={{ bgcolor: 'primary' }}
                > Change Password
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NotificationsIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Notifications</Typography>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive updates via email"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.email}
                      onChange={() => handleNotificationChange('email')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Push Notifications"
                    secondary="Receive push notifications"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.push}
                      onChange={() => handleNotificationChange('push')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="SMS Notifications"
                    secondary="Receive updates via SMS"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PaymentIcon sx={{ mr: 1 }} />
                <Typography variant="h6">My Payment Methods </Typography>
              </Box>
              <Alert severity="info" sx={{ mb: 2 }}>
                Your payment information is encrypted and secure
              </Alert>
              <TextField
                fullWidth
                label="M-Pesa Number"
                defaultValue="+254 712 345 678"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Bank Account Number"
                defaultValue="1234567890"
                sx={{ mb: 2 }}
              />
              <Button variant="outlined" color="primary">
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Language Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LanguageIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Language & Region</Typography>
              </Box>
              <TextField
                select
                fullWidth
                label="Language"
                defaultValue="en"
                sx={{ mb: 2 }}
              >
                <option value="en">English</option>
                <option value="sw">Swahili</option>
              </TextField>
              <TextField
                select
                fullWidth
                label="Time Zone"
                defaultValue="eat"
                sx={{ mb: 2 }}
              >
                <option value="eat">East Africa Time (EAT)</option>
                <option value="gmt">GMT</option>
              </TextField>
              <TextField
                select
                fullWidth
                label="Currency"
                defaultValue="kes"
              >
                <option value="kes">Kenyan Shilling (KES)</option>
                <option value="usd">US Dollar (USD)</option>
              </TextField>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Change Password Dialog */}
      <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="password"
            label="Current Password"
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="New Password"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm New Password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPasswordDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => setOpenPasswordDialog(false)}
            sx={{ bgcolor: '#1a237e' }}
          >
            Update Password
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SettingsPage;
