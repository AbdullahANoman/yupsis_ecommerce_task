'use client';

import Link from "next/link";
import { useEffect } from "react";

const menu = [
  { name: "Home", path: "/" },
];

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0  ]"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div
        className={`fixed w-screen bg-white left-0 right-0 z-[200] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out text-textColor border-t border-t-primary`}
        style={{ height: "calc(100vh - 6rem)", top: "6rem" }}
      >
        {menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              onClick={onClose}
              className="w-full py-4 font-bold border-b border-b-primary hover:bg-accent hover:text-white flex justify-center items-center"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;