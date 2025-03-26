import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/signup/page"
import PersonalInfoPage from "./pages/personal-info/page"
import FinancialGoalsPage from "./pages/financial-goals/page"
import OnboardingSuccessPage from "./pages/onboarding-success/page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/financial-goals" element={<FinancialGoalsPage />} />
        <Route path="/personalinfo" element={<PersonalInfoPage />} />
        <Route path="/onboarding-success" element={<OnboardingSuccessPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
