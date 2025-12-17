import React from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href={resumeData.personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 text-2xl transition-colors"
                    >
                        <GithubOutlined />
                    </a>
                    <a
                        href={`mailto:${resumeData.personalInfo.social.email}`}
                        className="text-gray-400 hover:text-blue-600 text-2xl transition-colors"
                    >
                        <MailOutlined />
                    </a>
                </div>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
