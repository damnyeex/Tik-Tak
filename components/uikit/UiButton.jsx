import clsx from "clsx";

/**
 * @param {{
 * children:any,
 * className:string,
 * size:'md' | 'lg',
 * variant:'primary' | 'outline'
 * }} props
 */
function UiButton({ children, size, className, variant }) {
  const buttonClassName = clsx(
    "",
    className,
    {
      md: "rounded px-6 py-2.5 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2.5 text-sm/[22px] leading-tight",
    }[size],

    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-100",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
export { UiButton };
