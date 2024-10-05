/* eslint-disable no-unused-vars */
import React from 'react';
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center justify-center sm:justify-start">
                            <span className="text-3xl font-bold">Sakito<span className="text-emerald-400">Enterprices</span>.</span>
                        </div>
                        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-400 sm:max-w-xs sm:text-left">
                            Discover your dream home with our expert real estate services. We&apos;re committed to finding the perfect property for you.
                        </p>
                        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                            <li>
                                <a href="#" className="text-emerald-400 transition hover:text-emerald-500">
                                    <span className="sr-only">Facebook</span>
                                    <Facebook className="h-6 w-6"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-400 transition hover:text-emerald-500">
                                    <span className="sr-only">Instagram</span>
                                    <Instagram className="h-6 w-6"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-emerald-400 transition hover:text-emerald-500">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Company</p>
                            <nav aria-label="Footer Company Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            Meet the Team
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            History
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Helpful Links</p>
                            <nav aria-label="Footer Helpful Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            Support
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-gray-300 transition hover:text-emerald-400" href="#">
                                            Live Chat
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Contact Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="#">
                                        <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
                                        <span className="text-gray-300">+2 (547) 123-4567</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="#">
                                        <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
                                        <span className="text-gray-300">contact@sakitoenterprices.com</span>
                                    </a>
                                </li>
                                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                                    <MapPin className="h-5 w-5 shrink-0 text-emerald-400" />
                                    <address className="not-italic text-gray-300">
                                        123 Kenyatta St,<br />
                                        Nakuru, KE 12345
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-400">
                            <span className="block sm:inline">All rights reserved.</span>
                            <a className="inline-block text-emerald-400 underline transition hover:text-emerald-500" href="#">
                                Terms & Conditions
                            </a>
                            <span>&middot;</span>
                            <a className="inline-block text-emerald-400 underline transition hover:text-emerald-500" href="#">
                                Privacy Policy
                            </a>
                        </p>
                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; {new Date().getFullYear()} Sakito Enterprices
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;