import Link from 'next/link';

export default function Nav(){
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="https://www.dsolutions.mn/">
            <a className="text-xl normal-case btn btn-ghost"><span className="mr-1 text-blue-600">Diverse</span> Solutions</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="p-0 menu menu-horizontal">
            <li>
              <label for="social" class="drawer-button text-xl btn btn-ghost">💻</label>
            </li>
          </ul>
        </div>
      </div>

      <div class="drawer drawer-end">
        <input id="social" type="checkbox" class="drawer-toggle"/>
          <div class="drawer-side">
            <label for="social" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <Link href="https://dsolutions.mn/">
                  <a>Website</a>
                </Link>
              </li>

              <li>
                <Link href="https://github.com/DiverseSolutions">
                  <a>Github</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
  )
}
