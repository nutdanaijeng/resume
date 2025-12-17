import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, GithubOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
import { resumeData } from '../data/resumeData';

const navItems = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 h-16 flex items-center shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="font-bold text-lg md:text-xl text-gray-800 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    Nutdanai
                </div>

                <div className="hidden lg:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-gray-600 hover:text-blue-600 text-sm font-medium cursor-pointer transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="w-px h-6 bg-gray-200 mx-2"></div>
                    <Button
                        type="text"
                        icon={<GithubOutlined />}
                        href={resumeData.personalInfo.social.github}
                        target="_blank"
                    />
                    <Button type="primary" size="small" icon={<DownloadOutlined />}>
                        Resume
                    </Button>
                </div>

                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    className="lg:hidden"
                    onClick={() => setOpen(true)}
                />

                <Drawer title="Menu" placement="right" onClose={() => setOpen(false)} open={open}>
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;
