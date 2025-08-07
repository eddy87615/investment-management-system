import SideBar from "../components/SideBar";
import ClientGroupSetting from "../components/ClientGroupSetting";
import { useMenuStore } from "../store/menuStore";

export default function Dashboard() {
  const { selectedMenuItem, setSelectedMenuItem } = useMenuStore();

  const renderMainContent = () => {
    switch (selectedMenuItem) {
      case 'clientGroupSetting':
        return <ClientGroupSetting />;
      default:
        return (
          <div className="p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold dark:text-(--color-white) mb-2">
                歡迎使用投資管理系統
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                請從左側選單選擇功能
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden pt-[50px] pb-[24px] flex bg-(--color-white) dark:bg-(--color-bg-dark)">
      <SideBar onMenuItemClick={setSelectedMenuItem} />
      <div className="w-full p-2">
        <div className="bg-white dark:bg-(--color-win-dark) h-full rounded-lg border border-(--color-light-border) dark:border-(--color-bg-dark)">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
}
