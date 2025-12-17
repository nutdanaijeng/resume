import React from 'react';
import { Typography, Timeline, Card, Tag } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title } = Typography;

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Tag color="purple" className="mb-2 px-3 py-1">Career</Tag>
                    <Title level={2} className="!mt-0">Work Experience</Title>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Timeline
                        items={resumeData.experience.map((exp) => ({
                            dot: <div className="p-2 bg-blue-100 rounded-full text-blue-600"><LaptopOutlined /></div>,
                            children: (
                                <Card className="ml-4 mb-8 shadow-sm hover:shadow-md transition-all border-gray-200">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <Title level={4} className="!mb-0 text-blue-600">{exp.role}</Title>
                                        <Tag color="default" className="w-fit mt-2 md:mt-0">{exp.period}</Tag>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                                        {exp.companyWebsite && (
                                            <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                                                {exp.companyWebsite}
                                            </a>
                                        )}
                                    </div>

                                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </Card>
                            )
                        }))}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
