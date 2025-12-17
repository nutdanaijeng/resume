import React from 'react';
import { Typography, Card, Tag } from 'antd';
import { CodeOutlined, DatabaseOutlined, ToolOutlined, LaptopOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title } = Typography;

const getIcon = (title: string) => {
    if (title.includes('Frontend')) return <LaptopOutlined />;
    if (title.includes('Backend')) return <CodeOutlined />;
    if (title.includes('Database')) return <DatabaseOutlined />;
    return <ToolOutlined />;
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <Tag color="blue" className="mb-2 px-3 py-1">Tech Stack</Tag>
                    <Title level={2} className="!mt-0">Skills & Expertise</Title>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resumeData.skills.map((category) => (
                        <Card
                            key={category.title}
                            className="shadow-sm hover:shadow-md transition-shadow border-gray-200 h-full"
                        >
                            <div className="flex items-center gap-2 mb-4 text-blue-600 text-xl">
                                {getIcon(category.title)}
                                <h3 className="text-lg font-bold text-gray-900 m-0">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <Tag
                                        key={skill.name}
                                        className="text-sm px-3 py-1 bg-gray-50 border-gray-200 text-gray-700 m-0"
                                    >
                                        {skill.name}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
