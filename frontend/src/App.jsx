import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { SearchProvider } from './context/SearchContext'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard'
import PaymentsPage from './pages/Payments/PaymentsPage'
import ChatPage from './pages/Chat/ChatPage'
import NoticeboardPage from './pages/Noticeboard/NoticeboardPage'
import LearningPage from './pages/Learning/LearningPage'
import ReportsPage from './pages/Reports/ReportsPage'
import SettingsPage from './pages/Settings/SettingsPage'
import ChamasListPage from './pages/Chamas/ChamasListPage'
import CreateChama from './pages/Chamas/CreateChama';
import ChamaDashboardLayout from './pages/Chamas/ChamaDashboard/ChamaDashboardLayout'
import ChamaHome from './pages/Chamas/ChamaDashboard/Home/ChamaHome'
import MembershipPage from './pages/Chamas/ChamaDashboard/Membership/MembershipPage'
import MeetingsPage from './pages/Chamas/ChamaDashboard/Meetings/MeetingsPage'
import VaultInuaLoan from './pages/Chamas/ChamaDashboard/Loans/VaultInuaLoan'
import AccountsPage from './pages/Chamas/ChamaDashboard/Accounts/AccountsPage'
import SoftLoansPage from './pages/Chamas/ChamaDashboard/SoftLoans/SoftLoansPage'
import MerryGoRoundPage from './pages/Chamas/ChamaDashboard/MerryGoRound/MerryGoRoundPage'
import SharesPage from './pages/Chamas/ChamaDashboard/Shares/SharesPage'
import WelfarePage from './pages/Chamas/ChamaDashboard/Welfare/WelfarePage'
import GoalsPage from './pages/Chamas/ChamaDashboard/Goals/GoalsPage'
import NotificationsPage from './pages/Chamas/ChamaDashboard/Notifications/NotificationsPage'
import BillingPage from './pages/Chamas/ChamaDashboard/Billing/BillingPage'
import NewModule from './pages/Chamas/ChamaDashboard/NewModule/NewModule';
import ChamaSettingsPage from './pages/Chamas/ChamaDashboard/Settings/SettingsPage'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/chamas" element={<ChamasListPage />} />
              <Route path="pages/Chamas/CreateChama" element={<CreateChama />} />
              <Route path="/CreateChama" element={<CreateChama />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/noticeboard" element={<NoticeboardPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="/chama/:chamaId/*" element={<ChamaDashboardLayout />}>
              <Route path="home" element={<ChamaHome />} />
              <Route path="membership" element={<MembershipPage />} />
              <Route path="meetings" element={<MeetingsPage />} />
              <Route path="accounts" element={<AccountsPage />} />
              <Route path="Loans" element={<VaultInuaLoan />} />
              <Route path="soft-loans" element={<SoftLoansPage />} />
              <Route path="merry-go-round" element={<MerryGoRoundPage />} />
              <Route path="shares" element={<SharesPage />} />
              <Route path="welfare" element={<WelfarePage />} />
              <Route path="goals" element={<GoalsPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="billing" element={<BillingPage />} />
              <Route path="NewModule" element={<NewModule />} />
              <Route path="settings" element={<ChamaSettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  )
}

export default App
