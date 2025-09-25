import Link from "next/link";

const NavLink = ({ href, title, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        "relative block px-3 py-3 text-sm sm:text-base tracking-wide text-slate-300 transition hover:text-white " +
        className
      }
    >
      <span className="relative z-10">{title}</span>
      {/* underline */}
      <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
};

export default NavLink;
