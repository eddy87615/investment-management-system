import React from "react";
import { useState, useEffect } from "react";

import { CiSettings } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";

type HamburgerBtnProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SideBarProps = {
  onMenuItemClick?: (itemId: string) => void;
};

const sideBarList = [
  {
    name: "設定",
    id: "setting",
    icon: <CiSettings className="w-[20px] h-[20px]" />,
    pullDownList: [],
  },
  {
    name: "全域資料設定",
    id: "globalDataSetting",
    icon: <CiGlobe className="w-[20px] h-[20px]" />,
    pullDownList: [
      {
        name: "客戶群組設定",
        id: "clientGroupSetting",
      },
      {
        name: "銀行設定",
        id: "bankSetting",
      },
      {
        name: "業務單位設定",
        id: "businessUnitSetting",
      },
      {
        name: "客戶基本資料設定",
        id: "clientBasicDataSetting",
      },
    ],
  },
  {
    name: "客戶基金總表",
    id: "clientFundTotalTable",
    icon: <CiBoxList className="w-[20px] h-[20px]" />,
    pullDownList: [
      {
        name: "客戶總表",
        id: "clientTotalTable",
      },
      {
        name: "投資紀錄",
        id: "investmentRecord",
      },
    ],
  },
  {
    name: "基金資料設定",
    id: "fundInfoSetting",
    icon: <CiMemoPad className="w-[20px] h-[20px]" />,
    pullDownList: [
      {
        name: "基金設定",
        id: "fundSetting",
      },
    ],
  },
  {
    name: "基金檔期設定",
    id: "fundScheduleSetting",
    icon: <CiCalendar className="w-[20px] h-[20px]" />,
    pullDownList: [
      {
        name: "檔期資訊設定",
        id: "ScheduleSetting",
      },
    ],
  },
  {
    name: "報表作業",
    id: "reportEditting",
    icon: <CiViewTable className="w-[20px] h-[20px]" />,
    pullDownList: [
      {
        name: "申購費報表",
        id: "purchaseFeeReport",
      },
      {
        name: "贖回統計報表",
        id: "redemptionTotalReport",
      },
      {
        name: "配息報表",
        id: "dividendReport",
      },
    ],
  },
];

const HamburgerBtn = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: HamburgerBtnProps) => {
  return (
    <div className="absolute top-[8px] right-[24.5px] translate-x-[50%] w-fit float-right">
      <button
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className="font-bold relative w-[34px] h-[16px] cursor-pointer"
      >
        <div
          className={`absolute w-[20px] h-[2px] bg-(--color-bg-dark) top-0 left-1/2 translate-x-[-50%] origin-center dark:bg-(--color-white) ${
            isSideBarOpen ? "rotate-[45deg] top-1/2 translate-y-[-50%]" : ""
          }`}
        ></div>
        <div
          className={`absolute w-[20px] h-[2px] bg-(--color-bg-dark) top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] dark:bg-(--color-white) ${
            isSideBarOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`absolute w-[20px] h-[2px] bg-(--color-bg-dark) bottom-0 left-1/2 translate-x-[-50%] origin-center dark:bg-(--color-white) ${
            isSideBarOpen ? "rotate-[-45deg] bottom-1/2 translate-y-[50%]" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default function SideBar({ onMenuItemClick }: SideBarProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [sessionTime, setSessionTime] = useState<string>("00:00:00");

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const SESSION_START_KEY = 'sessionStartTime';
    
    // 檢查是否已有計時器開始時間
    let startTime = localStorage.getItem(SESSION_START_KEY);
    
    if (!startTime) {
      // 如果沒有，設置新的開始時間
      const now = Date.now().toString();
      localStorage.setItem(SESSION_START_KEY, now);
      startTime = now;
    }

    const updateTimer = () => {
      const elapsed = Math.floor((Date.now() - parseInt(startTime!)) / 1000);
      setSessionTime(formatTime(elapsed));
    };

    // 立即更新一次
    updateTimer();
    
    // 每秒更新
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`max-w-[250px] relative top-0 left-0 h-screen
    ${isSideBarOpen ? "w-[250px]" : "w-[50px]"}`}
    >
      <div
        className={`h-full overflow-auto pb-[24px] bg-white dark:bg-(--color-win-dark) border-r border-solid border-(--color-light-border) dark:border-(--color-bg-dark) ${
          isSideBarOpen ? "w-[250px]" : "w-[50px]"
        }`}
      >
        <div className="relative w-full p-2 ">
          <HamburgerBtn
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          <div className="flex justify-start gap-2 items-start">
            <div
              className={`h-[80px] rounded-xl shrink-0 border border-solid border-(--color-text) dark:border-(--color-white) ${
                isSideBarOpen ? "w-[80px]" : "w-0 border-0"
              }`}
            >
              <img
                src="/src/assets/images/Ryan.webp"
                alt="profile pic"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`h-[80px] overflow-hidden ${
                isSideBarOpen ? "w-full" : "w-0"
              }`}
            >
              <ul className="flex flex-col justify-end h-full text-left">
                <li className="text-[16px] font-bold text-nowrap dark:text-(--color-white)">
                  Nicole
                </li>
                <li className="text-[14px] text-nowrap dark:text-(--color-white)">
                  Admin
                </li>
                <li className="text-[14px] text-nowrap dark:text-(--color-white)">
                  停留時間：{sessionTime}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul className={`${isSideBarOpen ? "" : "pointer-events-none"}`}>
            {sideBarList.map((list) => {
              return (
                <React.Fragment key={list.id}>
                  <li
                    onClick={() =>
                      list.pullDownList.length > 0 && toggleExpanded(list.id)
                    }
                    className={`relative flex justify-start items-center gap-2 p-2 h-[50px] text-left dark:text-(--color-white) hover:bg-(--color-light-hover) dark:hover:bg-(--color-bg-dark) whitespace-nowrap cursor-pointer
            after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:border-r after:border-t after:border-solid after:border-black after:top-1/2 after:right-[8px] after:transition-transform after:duration-300 after:ease-in-out dark:after:border-(--color-white)
            ${
              expandedItems.includes(list.id)
                ? "after:rotate-[135deg]"
                : "after:rotate-[45deg]"
            }
            ${list.pullDownList.length > 0 ? "cursor-pointer" : ""}
            ${isSideBarOpen ? "" : "overflow-hidden opacity-0"}
            `}
                  >
                    {list.icon}
                    <p>{list.name}</p>
                  </li>
                  {list.pullDownList && list.pullDownList.length > 0 && (
                    <ul
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedItems.includes(list.id) ? "p-0" : "h-0 p-0"
                      }`}
                      style={{
                        height: expandedItems.includes(list.id)
                          ? `${list.pullDownList.length * 50}px`
                          : "0px",
                      }}
                    >
                      {list.pullDownList.map((item) => (
                        <li
                          key={item.id}
                          onClick={() => onMenuItemClick?.(item.id)}
                          className={`relative flex justify-start items-center  gap-2 py-2 pl-12 h-[50px] text-left bg-(--color-light-sideBarPullDown) dark:bg-(--color-bg-dark) dark:text-(--color-white) hover:bg-(--color-light-hover) dark:hover:bg-(--color-win-dark) whitespace-nowrap cursor-pointer
                            ${isSideBarOpen ? "" : "w-0 p-0 opacity-0"}
                            `}
                        >
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {list.id === "setting" && (
                    <hr
                      className={`border-t border-solid border-(--color-light-border) dark:border-(--color-bg-dark) ${
                        isSideBarOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
