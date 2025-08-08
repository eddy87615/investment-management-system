import React, { useState, useEffect } from "react";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import Pagination from "./Pagination";

interface Group {
  id: number;
  name: string;
  description: string;
}

const ClientAddModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(219,219,219,50%)] rounded-lg flex justify-center items-center">
      <div className="w-[80%] h-fit bg-(--color-white) p-8 flex flex-col gap-4">
        <h3>新增客戶群組</h3>
        <label>
          群組名稱
          <input type="text" />
        </label>
        <label>
          群組描述
          <input type="text" />
        </label>
        <button>新增</button>
      </div>
    </div>
  );
};

export default function ClientGroupSetting() {
  const [groups, setGroups] = useState<Group[]>([
    { id: 1, name: "VIP客戶", description: "高淨值客戶群組" },
    { id: 2, name: "一般客戶", description: "標準客戶群組" },
    { id: 3, name: "企業客戶", description: "企業客戶群組" },
    { id: 4, name: "新客戶", description: "新註冊客戶群組" },
    { id: 5, name: "潛在客戶", description: "潛在客戶群組" },
    { id: 6, name: "高頻交易", description: "高頻交易客戶群組" },
    { id: 7, name: "低風險", description: "低風險偏好客戶群組" },
    { id: 8, name: "高風險", description: "高風險偏好客戶群組" },
    { id: 9, name: "退休客戶", description: "退休規劃客戶群組" },
    { id: 10, name: "年輕投資者", description: "年輕投資者群組" },
    { id: 11, name: "機構投資", description: "機構投資客戶群組" },
    { id: 12, name: "低風險", description: "低風險偏好客戶群組" },
    { id: 13, name: "高風險", description: "高風險偏好客戶群組" },
    { id: 14, name: "退休客戶", description: "退休規劃客戶群組" },
    { id: 15, name: "年輕投資者", description: "年輕投資者群組" },
    { id: 16, name: "機構投資", description: "機構投資客戶群組" },
    { id: 17, name: "低風險", description: "低風險偏好客戶群組" },
    { id: 18, name: "高風險", description: "高風險偏好客戶群組" },
    { id: 19, name: "退休客戶", description: "退休規劃客戶群組" },
    { id: 20, name: "年輕投資者", description: "年輕投資者群組" },
    { id: 21, name: "機構投資", description: "機構投資客戶群組" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  // 計算過濾後的群組
  const filteredGroups =
    searchTerm.trim() === ""
      ? groups
      : groups.filter(
          (group) =>
            group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            group.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGroups = filteredGroups.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 當搜尋詞改變時重置到第一頁
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="relative p-10 h-full overflow-auto flex flex-col justify-between">
      <ClientAddModal />
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className=" dark:text-(--color-white)">客戶群組設定</h1>
          <div className="flex items-center gap-2">
            <button
              className="w-[75px] h-[35px] bg-(--color-white) text-(--color-text) border border-solid border-(--color-text) text-button rounded-[4px]
            hover:bg-(--color-light-hover)
            "
            >
              +新增
            </button>
            <input
              type="text"
              placeholder="搜尋客戶群組"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[35px] rounded-[4px] border border-solid border-(--color-text) p-4"
            />
          </div>
        </div>
      </div>

      <div className="h-full">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="border-b border-solid border-(--color-light-border)">
                <th className="p-4 text-left w-[20%]">
                  <h3>群組名稱</h3>
                </th>
                <th className="p-4 text-left w-[60%]">
                  <h3>描述</h3>
                </th>
                <th className="p-4 text-right w-[20%]">
                  <h3>操作</h3>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {currentGroups.map((group) => (
                <tr key={group.id}>
                  <td className="p-4 text-left">{group.name}</td>
                  <td className="p-4 text-left">{group.description}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="w-[35px] h-[35px] border border-solid border-(--color-text) rounded-[4px] flex justify-center items-center hover:bg-(--color-light-hover)">
                      <CiEdit className="w-[20px] h-[20px]" />
                    </button>
                    <button className="w-[35px] h-[35px] border border-solid border-(--color-text) rounded-[4px] flex justify-center items-center hover:bg-(--color-light-hover)">
                      <CiTrash className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
