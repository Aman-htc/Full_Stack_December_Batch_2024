

import { SideBarHeader, SideBarLink, UpgraadeButton } from './main/index'

function SideBar() {

    return (
        <div className="border-end pe-3 pt-2 ps-1 bg-color d-flex flex-column h-100">
            <div className=''>

                <SideBarHeader />
          
            
                <SideBarLink />
            </div>


            <div className="mt-auto">
                <UpgraadeButton />
            </div>

        </div>
    );
}

export default SideBar;









