import WeiEtherCalculator from '../components/WeiEtherCalculator';
import GweiEtherCalculator from '../components/GweiEtherCalculator';
import UnitEtherCalculator from '../components/UnitEtherCalculator';

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-around w-full my-12 md:h-screen md:my-0">
      <div>
        <WeiEtherCalculator />
      </div>

      <div className="my-10 md:my-0">
        <UnitEtherCalculator />
      </div>

      <div>
        <GweiEtherCalculator />
      </div>
    </div>
  )
}
