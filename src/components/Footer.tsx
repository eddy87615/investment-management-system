export default function Footer() {
  return (
    <>
      <div className="fixed flex justify-center items-center bottom-0 left-0 w-screen h-[24px] bg-(--color-white) dark:bg-(--color-text) border-t border-solid border-(--color-light-border) dark:border-(--color-bg-dark)">
        <small className="text-(--color-text) dark:text-(--color-white)">
          copyright
        </small>
      </div>
    </>
  );
}
