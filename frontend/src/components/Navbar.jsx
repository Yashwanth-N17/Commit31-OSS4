import { useState } from "react";
import { NavLink } from "react-router-dom";

const C = {
  primary:    "#0B1F3B",
  secondary:  "#1E3A8A",
  accent:     "#00D4FF",
  background: "#0F172A",
  textPrimary:"#E2E8F0",
  muted:      "#94A3B8",
};

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Login",    to: "/login" },
  { label: "Register", to: "/register" },
  { label: "Profile",  to: "/profile" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-desktop   { display: flex !important; align-items: center; gap: 1.75rem; }
        .nav-hamburger { display: none !important; }
        .nav-mobile-menu { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; flex-direction: column; justify-content: center; align-items: center; gap: 5px; }
          .nav-mobile-menu { display: flex !important; }
        }
      `}</style>

      <nav style={{
        backgroundColor: C.primary,
        borderBottom: `1px solid ${C.secondary}`,
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}>

        <div style={{
          width: "100%",
          padding: "0 2.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}>

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}
          >
            <span style={{
              width: "36px", height: "36px", flexShrink: 0,
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${C.secondary}, ${C.accent})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: "17px",
            }}>
              S
            </span>
            <span style={{ color: C.textPrimary, fontWeight: 700, fontSize: "1.1rem", whiteSpace: "nowrap" }}>
              Student Develpor<span style={{ color: C.accent }}> Platform</span>
            </span>
          </NavLink>

          <div className="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  whiteSpace: "nowrap",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "0.4rem 1.25rem",
                  transition: "color 0.2s ease, text-decoration-color 0.2s ease",
                  color:                  isActive ? C.accent : C.muted,
                  textDecoration:         isActive ? "underline" : "none",
                  textDecorationColor:    C.accent,
                  textDecorationThickness:"2px",
                  textUnderlineOffset:    "5px",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="nav-hamburger"
            style={{
              background: "transparent", border: "none", cursor: "pointer",
              flexDirection: "column", justifyContent: "center",
              alignItems: "center", gap: "5px", padding: "8px",
              borderRadius: "8px", flexShrink: 0,
            }}
          >
            <span style={{ display: "block", width: "20px", height: "2px", backgroundColor: C.textPrimary, borderRadius: "2px" }} />
            <span style={{ display: "block", width: "20px", height: "2px", backgroundColor: C.textPrimary, borderRadius: "2px" }} />
            <span style={{ display: "block", width: "20px", height: "2px", backgroundColor: C.textPrimary, borderRadius: "2px" }} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{
              backgroundColor: C.primary,
              borderTop: `1px solid ${C.secondary}`,
              padding: "0.75rem 1.5rem 1.25rem",
              flexDirection: "column",
              gap: "0.375rem",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "0.7rem 1rem",
                  transition: "color 0.2s ease, text-decoration-color 0.2s ease",
                  color:                  isActive ? C.accent : C.muted,
                  textDecoration:         isActive ? "underline" : "none",
                  textDecorationColor:    C.accent,
                  textDecorationThickness:"2px",
                  textUnderlineOffset:    "5px",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
