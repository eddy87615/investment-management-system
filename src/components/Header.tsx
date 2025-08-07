import ModeToggler from "./ModeToggler";

export default function Header() {
  return (
    <>
      <div className="fixed flex justify-between items-center p-4 top-0 left-0 w-screen h-[50px] border-b border-solid border-(--color-light-border) dark:border-(--color-bg-dark) bg-(--color-white) dark:bg-(--color-win-dark) dark:text-(--color-white) z-[99999]">
        <div className="h-full flex justify-center items-start gap-1">
          <img src="/logoB.svg" className="h-full dark:hidden" />
          <img src="/logoW.svg" className="h-full hidden dark:block" />
          <p className="text-[12px] font-bold text-(--color-text) dark:text-(--color-white)">
            MANAGEMENT
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ModeToggler />
          <div>
            <button className="text-p">登出</button>
          </div>
        </div>
      </div>
    </>
  );
}
