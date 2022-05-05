import WeiEtherCalculator from '../components/WeiEtherCalculator';
import GweiEtherCalculator from '../components/GweiEtherCalculator';
import UnitEtherCalculator from '../components/UnitEtherCalculator';
import AmountFormatify from '../components/AmountFormatify';

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-around w-full my-12 md:h-screen md:my-0 gap-14">
      <WeiEtherCalculator />

      <UnitEtherCalculator />

      <GweiEtherCalculator />

      <AmountFormatify />
    </div>
  )
}
