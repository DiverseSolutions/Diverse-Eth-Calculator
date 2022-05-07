import WeiEtherCalculator from '../components/WeiEtherCalculator';
import GweiEtherCalculator from '../components/GweiEtherCalculator';
import UnitEtherCalculator from '../components/UnitEtherCalculator';
import AmountFormatify from '../components/AmountFormatify';
import CheckAddress from '../components/CheckAddress';

export default function Home() {
  return (
    <div className="my-10 grid grid-cols-3 gap-y-24">
      <WeiEtherCalculator />

      <UnitEtherCalculator />

      <GweiEtherCalculator />

      <AmountFormatify />

      <CheckAddress />
    </div>
  )
}
