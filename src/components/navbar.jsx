/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Menu, X, Home, MapPinHouse, Briefcase, DollarSign,Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', icon: Home },
        { name: 'Properties', icon: MapPinHouse },
        { name: 'Services', icon: Briefcase },
        { name: 'Pricing', icon: DollarSign },
        { name: 'Contact', icon: Phone },
    ];

    return (
        <nav className=" p-4 shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-emerald-700 ">RealEstate</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href="#"
                                className="text-emerald-700 hover:underline hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center space-x-1"
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-emerald-700 hover:underline hover:bg-opacity-20 p-2 rounded-md transition duration-300 ease-in-out"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className="text-emerald-700 hover:underline hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out flex items-center space-x-2"
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;