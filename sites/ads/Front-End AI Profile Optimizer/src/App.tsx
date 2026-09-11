import DashboardHeader from './components/DashboardHeader';
import StatsGrid from './components/StatsGrid';
import OptimizerCta from './components/OptimizerCta';
import InfoCards from './components/InfoCards';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <DashboardHeader />
        <StatsGrid />
        <div className="grid grid-cols-1 gap-6">
          <OptimizerCta />
          <InfoCards />
        </div>
      </div>
    </div>
  );
}
