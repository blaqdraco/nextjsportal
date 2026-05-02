import Link from "next/link";

const NavLink = ({ href, title, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        "relative block px-3 py-3 text-sm font-medium tracking-wide text-slate-400 transition-colors duration-200 hover:text-cyan-300 " +
        className
      }
    >
      <span className="relative z-10">{title}</span>
      {/* cyan underline on hover */}
      <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
};

export default NavLink;
