import React, { useState } from "react";

export default function ClientGroupSetting() {
  const [groups, setGroups] = useState([
    { id: 1, name: "VIP客戶", description: "高淨值客戶群組" },
    { id: 2, name: "一般客戶", description: "標準客戶群組" },
  ]);

  return (
    <div className="p-6 h-full overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-(--color-white) mb-2">
          客戶群組設定
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          管理客戶群組分類和設定
        </p>
      </div>

      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          新增群組
        </button>
      </div>

      <div className="bg-white dark:bg-(--color-win-dark) border border-(--color-light-border) dark:border-(--color-bg-dark) rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-(--color-bg-dark)">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  群組名稱
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  描述
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {groups.map((group) => (
                <tr key={group.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-(--color-white)">
                    {group.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {group.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      編輯
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      刪除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}