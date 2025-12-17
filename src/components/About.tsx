import React from 'react';
import { Typography, Card, Tag } from 'antd';
import { resumeData } from '../data/resumeData';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Tag color="cyan" className="mb-2 px-3 py-1">Introduction</Tag>
                    <Title level={2} className="!mt-0">About Me</Title>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Paragraph className="text-lg text-gray-600 leading-relaxed mb-6">
                            {resumeData.about.background}
                        </Paragraph>
                        <Paragraph className="text-lg text-gray-600 leading-relaxed">
                            {resumeData.about.interests}
                        </Paragraph>
                    </div>

                    <div className="space-y-4">
                        <Card className="bg-gray-50 border-gray-100 shadow-sm">
                            <Title level={5} className="!mt-0 !mb-2">Location</Title>
                            <div className="text-gray-600">{resumeData.personalInfo.location}</div>
                        </Card>
                        <Card className="bg-gray-50 border-gray-100 shadow-sm">
                            <Title level={5} className="!mt-0 !mb-2">Languages</Title>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.personalInfo.languages.map(lang => (
                                    <Tag key={lang} className="bg-white border-gray-200 text-gray-600">{lang}</Tag>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
