import React from 'react';
import { Typography, Button, Card } from 'antd';
import { MailOutlined, GithubOutlined } from '@ant-design/icons';
import { resumeData } from '../data/resumeData';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <Title level={2} className="!text-white !mb-6">Let's Work Together!</Title>

                <Paragraph className="!text-blue-100 text-lg mb-10 leading-relaxed">
                    I am eager to bring my skills in React, Node.js, and Full-Stack development to your team.
                    Please feel free to reach out via email or check my code on GitHub.
                </Paragraph>

                <Card className="border-0 shadow-2xl rounded-2xl p-2 bg-white/10 backdrop-blur-md">
                    <div className="bg-white rounded-xl p-8 flex flex-col gap-4">
                        <Button
                            type="primary"
                            size="large"
                            icon={<MailOutlined />}
                            href={`mailto:${resumeData.personalInfo.social.email}`}
                            className="h-14 text-lg w-full"
                        >
                            Send Email
                        </Button>
                        <Button
                            size="large"
                            icon={<GithubOutlined />}
                            href={resumeData.personalInfo.social.github}
                            target="_blank"
                            className="h-14 text-lg w-full"
                        >
                            View GitHub Profile
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
