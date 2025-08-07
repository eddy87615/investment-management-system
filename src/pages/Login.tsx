// src/pages/Login.tsx
import { CiUser } from "react-icons/ci";

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-(--color-white) dark:bg-(--color-bg-dark) bg-cover">
      <form className="flex flex-col gap-12 justify-center items-center bg-(--color-white) p-8 rounded-lg shadow-[1px_1px_4px_rgba(51,51,51,25%)] w-[30%] max-w-[500px] h-[80%] max-h-[650px] dark:bg-(--color-win-dark) dark:text-(--color-white)">
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-[100px] border border-solid border-(--color-text) dark:border-0 dark:bg-(--color-bg-dark)">
          <CiUser className="w-[50px] h-auto" />
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          {/* <label className="block mb-2 text-p">帳號</label> */}
          <input
            placeholder="請輸入帳號"
            type="email"
            className="w-[300px] px-3 py-2 border-b-1 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark:placeholder:text-gray-100"
            required
          />

          {/* <label className="block mb-2 font-semibold text-sm">密碼</label> */}
          <input
            placeholder="請輸入密碼"
            type="password"
            className="w-[300px] px-3 py-2 border-b-1 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark:placeholder:text-gray-100"
            required
          />

          <small className="text-right w-full text-(--color-text) dark:text-(--color-white)">
            <a>忘記密碼</a>
          </small>
        </div>

        <button
          type="submit"
          className="w-[110px] max-w-[150px] bg-(--color-white) dark:bg-(--color-win-dark) text-(--color-text) dark:text-(--color-white) py-2 rounded-sm border border-solid border-(--color-text) dark:border-(--color-white) hover:bg-(--color-text) dark:hover:bg-(--color-white) hover:text-(--color-white) dark:hover:text-(--color-text) transition-colors"
        >
          登入
        </button>
      </form>
    </div>
  );
}
