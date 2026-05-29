import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import ProjectCase from "./pages/ProjectCase.tsx";
import PortfolioObjectOrRoomResolver from "./pages/PortfolioRoomRedirect.tsx";
import Services from "./pages/Services.tsx";
import Process from "./pages/Process.tsx";
import Contacts from "./pages/Contacts.tsx";
import AiViz from "./pages/AiViz.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";
import { QuizProvider } from "./components/quiz/QuizContext";
import QuizDialog from "./components/quiz/QuizDialog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuizProvider>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioObjectOrRoomResolver />} />
          <Route path="/portfolio/:objectId/:roomId" element={<ProjectCase />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/ai-viz" element={<AiViz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <QuizDialog />
        </QuizProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
