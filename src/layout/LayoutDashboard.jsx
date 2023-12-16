import { useState } from 'react';
import { Sidebar } from '@/components';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className='dark:bg-boxdark-2 dark:text-bodydark'>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className='flex h-screen overflow-hidden'>
          {/* <!-- ===== Sidebar Start ===== --> */}

          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-blue-gray-50'>
            {/* <!-- ===== Header Start ===== --> */}
            {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default LayoutDashboard;
