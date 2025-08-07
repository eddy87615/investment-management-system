import { CiBrightnessUp } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useThemeStore } from "../store/themeStore";

export default function ModeToggler() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <div>
        <button
          onClick={toggleTheme}
          className="flex justify-center items-center gap-2 p-2 rounded-xs text-(--color-text) dark:text-(--color-white) bg-(--color-white) dark:bg-(--color-text) border border-solid border-(--color-light-border) dark:border-(--color-white)"
        >
          {theme === "dark" ? <CiDark /> : <CiBrightnessUp />}
          {/* {darkMode ? "黑暗模式" : "明亮模式"} */}
        </button>
      </div>
    </>
  );
}
