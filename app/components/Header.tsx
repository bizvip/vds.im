import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { ChevronDown, Globe, Menu, Phone, ShoppingCart } from "lucide-react";

interface NavDropdownProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface MenuItem {
  label: string;
  href: string;
}

interface DropdownContentProps {
  items: MenuItem[];
}

const DropdownContent = ({ items }: DropdownContentProps) => (
  <div className="grid gap-4">
    {items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className="text-gray-700 hover:text-blue-600"
      >
        {item.label}
      </Link>
    ))}
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const websitesMenuItems = [
    { label: "Website Builder", href: "/websites/builder" },
    { label: "WordPress", href: "/websites/wordpress" },
  ];

  const domainsMenuItems = [
    { label: "Domain Search", href: "/domains/search" },
    { label: "Transfer Domains", href: "/domains/transfer" },
  ];

  return (
    <div className="relative">
      {/* Top bar */}
      <div className="w-full bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-4 h-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            prefetch="intent"
            className="text-blue-600 font-bold text-lg"
          >
            VDS Center
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="tel:+14806242500"
              className="flex items-center gap-1 text-sm"
            >
              <Phone size={16} />
              (480) 624-2500
            </a>
            <button className="flex items-center gap-1 text-sm">
              <Globe size={16} />
              United States - English
              <ChevronDown size={16} />
            </button>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Help
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-600" : "text-gray-700"}`
              }
            >
              Sign In
            </NavLink>
            <button
              className="text-gray-700 hover:text-gray-900"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 py-2">
          <div className="flex items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-900 hover:text-gray-900 font-semibold ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavDropdown
                title="Domains"
                isActive={activeDropdown === "Domains"}
                onClick={() => handleDropdownClick("Domains")}
              />
              <NavDropdown
                title="Websites"
                isActive={activeDropdown === "Websites"}
                onClick={() => handleDropdownClick("Websites")}
              />
              <NavDropdown
                title="Hosting"
                isActive={activeDropdown === "Hosting"}
                onClick={() => handleDropdownClick("Hosting")}
              />
              <NavDropdown
                title="Security"
                isActive={activeDropdown === "Security"}
                onClick={() => handleDropdownClick("Security")}
              />
              <NavDropdown
                title="Marketing"
                isActive={activeDropdown === "Marketing"}
                onClick={() => handleDropdownClick("Marketing")}
              />
              <NavDropdown
                title="Email"
                isActive={activeDropdown === "Email"}
                onClick={() => handleDropdownClick("Email")}
              />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4">{/* Mobile menu items */}</div>
          )}
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {activeDropdown && (
        <>
          <button
            aria-label="Close dropdown menu"
            className="fixed inset-0 bg-transparent cursor-default"
            onClick={() => setActiveDropdown(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setActiveDropdown(null);
              }
            }}
          />
          <div className="absolute left-0 right-0 border-b bg-white shadow-lg">
            <div className="max-w-[1600px] mx-auto px-4 py-6">
              {activeDropdown === "Websites" && (
                <DropdownContent items={websitesMenuItems} />
              )}
              {activeDropdown === "Domains" && (
                <DropdownContent items={domainsMenuItems} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const NavDropdown = ({ title, isActive, onClick }: NavDropdownProps) => (
  <div className="relative">
    <button
      onClick={onClick}
      className={`flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium ${
        isActive ? "text-blue-600" : ""
      }`}
    >
      {title}
      <ChevronDown
        size={16}
        className={`transform transition-transform duration-200 ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </button>
  </div>
);

export default Header;
