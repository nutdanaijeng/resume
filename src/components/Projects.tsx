import React from 'react';
import { Typography, Tag } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title, Paragraph } = Typography;

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <Tag color="magenta" className="mb-2 px-3 py-1 font-semibold uppercase tracking-wider">Portfolio</Tag>
                    <Title level={2} className="!mt-0 !text-4xl">Featured Projects</Title>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <RocketOutlined className="text-xl" />
                                </div>
                                {index < 2 && (
                                    <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs font-bold uppercase rounded-md">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-50">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md border border-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
