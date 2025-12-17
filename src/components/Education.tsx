import React from 'react';
import { Typography, Card, Tag } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title, Text } = Typography;

const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Tag color="orange" className="mb-2 px-3 py-1">Academic</Tag>
                    <Title level={2} className="!mt-0">Education</Title>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {resumeData.education.map((edu, index) => (
                        <Card key={index} className="border-l-4 border-l-orange-400 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3 mb-4">
                                <ReadOutlined className="text-2xl text-orange-400 mt-1" />
                                <div>
                                    <Title level={5} className="!mb-1 !mt-0">{edu.degree}</Title>
                                    <Text className="text-gray-500">{edu.institution}</Text>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                <Tag color="default">{edu.period}</Tag>
                                <div className="font-semibold text-gray-700">GPA: {edu.gpa}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
