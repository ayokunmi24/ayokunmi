import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import LeadwayHealthDetail from "./pages/projects/LeadwayHealthDetail";
import RecovaRedesignDetail from "./pages/projects/RecovaRedesignDetail";
import VendorManagementDetail from "./pages/projects/VendorManagementDetail";
import AnkaraInsuranceDetail from "./pages/projects/AnkaraInsuranceDetail";
import LeadwayInvestmentDetail from "./pages/projects/LeadwayInvestmentDetail";
import CreditCheckDetail from "./pages/projects/CreditCheckDetail";
import MultiBankDebitDetail from "./pages/projects/MultiBankDebitDetail";
import TransitaDetail from "./pages/projects/TransitaDetail";
import HydraApiDetail from "./pages/projects/HydraApiDetail";
import AgencyBankingDetail from "./pages/projects/AgencyBankingDetail";
import LeadwaySuperAppDetail from "./pages/projects/LeadwaySuperAppDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects/leadway-health" element={<LeadwayHealthDetail />} />
        <Route path="/projects/recova-redesign" element={<RecovaRedesignDetail />} />
        <Route path="/projects/vendor-management" element={<VendorManagementDetail />} />
        <Route path="/projects/ankara-insurance" element={<AnkaraInsuranceDetail />} />
        <Route path="/projects/leadway-investment" element={<LeadwayInvestmentDetail />} />
        <Route path="/projects/creditcheck" element={<CreditCheckDetail />} />
        <Route path="/projects/multi-bank-debit" element={<MultiBankDebitDetail />} />
        <Route path="/projects/transita" element={<TransitaDetail />} />
        <Route path="/projects/hydra-api" element={<HydraApiDetail />} />
        <Route path="/projects/agency-banking" element={<AgencyBankingDetail />} />
        <Route path="/projects/leadway-superapp" element={<LeadwaySuperAppDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
