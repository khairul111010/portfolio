import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";

type DropdownProps = {
  className?: string;
  toggleWrapperClassName?: string;
  dropdownPanelClassName?: string;
  children?: ReactNode;
  renderToggle: ReactNode;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
};

const Dropdown: FC<DropdownProps> = ({
  className = "",
  toggleWrapperClassName = "",
  dropdownPanelClassName = "",
  renderToggle,
  children,
  position = "bottom-left",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown state
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close dropdown if clicked outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  // Add/Remove event listeners for outside click
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // Dropdown position classes
  const positionClasses = {
    "bottom-left": "top-full left-0",
    "bottom-right": "top-full right-0",
    "top-left": "bottom-full left-0",
    "top-right": "bottom-full right-0",
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <div
        className={`cursor-pointer ${toggleWrapperClassName}`}
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        role="button"
      >
        {renderToggle}
      </div>
      {isOpen && (
        <div
          className={`absolute border dark:border-[#313336] border-gray-100 bg-white dark:bg-[#1A1D24] rounded-md shadow-lg overflow-hidden z-[20] transition-all ease-out duration-200 
                        ${positionClasses[position]} 
                        ${dropdownPanelClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
