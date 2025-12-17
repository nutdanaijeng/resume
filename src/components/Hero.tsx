import React from 'react';
import { Button, Typography } from 'antd';
import { GithubOutlined, DownloadOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-blue-50/50">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                        {resumeData.personalInfo.title}
                    </div>

                    <Title className="!text-5xl md:!text-7xl !font-extrabold text-gray-900 !mb-4 tracking-tight">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            {resumeData.personalInfo.name.split(' ')[0]}
                        </span>
                    </Title>

                    <Paragraph className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto !mb-8">
                        {resumeData.personalInfo.summary}
                    </Paragraph>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            type="primary"
                            size="large"
                            icon={<DownloadOutlined />}
                            href="/resume.pdf"
                            target="_blank"
                            className="h-12 px-8 text-lg font-medium shadow-lg shadow-blue-500/30"
                        >
                            Download Resume
                        </Button>
                        <Button
                            size="large"
                            icon={<GithubOutlined />}
                            href={resumeData.personalInfo.social.github}
                            target="_blank"
                            className="h-12 px-8 text-lg font-medium"
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
