import globe from "@/public/common/globe.svg";
import user from "@/public/common/user.svg";
import database from "@/public/about/database.svg";
import gear from "@/public/common/gear.svg";
import empower from "@/public/landing-page/empower.svg";
import automateTask from "@/public/landing-page/automate-task.svg";
import maximizePotential from "@/public/landing-page/maximize-potential.svg";
import { SolutionsFeaturesData, SolutionsHeroData } from "@/types";
import chatbotImg from "@/public/solutions/chatbot/chatbot.jpg";
import computerVisionImg from "@/public/solutions/computer-vision/computer-vision.jpg";
import recommendationImg from "@/public/solutions/recommondation/recommendation.png";

import availability from "@/public/solutions/chatbot/availability.svg";
import multiChannel from "@/public/solutions/chatbot/multi-channel.svg";
import nlp from "@/public/solutions/chatbot/nlp.svg";

import dataInsight from "@/public/solutions/computer-vision/data-insights.svg";
import realTime from "@/public/solutions/computer-vision/real-time.svg";
import documentAnalysis from "@/public/solutions/computer-vision/document-analysis.svg";

import personalization from "@/public/solutions/recommondation/personalization.svg";
import productFeatures from "@/public/solutions/recommondation/product-features.svg";
import contentDiscovery from "@/public/solutions/recommondation/content-discovery.svg";

import textGeneration from "@/public/solutions/content-generation/text-generation.svg";
import imageGeneration from "@/public/solutions/content-generation/image-generation.svg";
import videoGeneration from "@/public/solutions/content-generation/video-generation.svg";
import contentGeneration from "@/public/solutions/content-generation/ai-content-generation.png";

import Image from "next/image";

const approachData = [
  {
    image: {
      src: user,
      alt: "User icon",
    },

    title: "Identify Problems and Inefficiencies",
    body: "At Linkt, our approach is rooted in a commitment to solve real problems. We believe understanding our customers' needs is the first step in creating value. We work closely with our customers to identify problems and inefficiencies in their platforms. This allows us to build AI models that are tailored to their specific needs, ensuring that our products are not only innovative but also aligned with the real-world needs.",
    leftAlign: false,
  },
  {
    image: {
      src: database,
      alt: "Database icon",
    },

    title: "Data Quality Above All Else",
    body: "In steering the course of our product development, we rely on data-driven decision-making processes. AI models are only as good as the data used to train them. Just as a Michelin star restaurant has to start their day by ordering the best ingredients, we build each model using high quality data. This meticulous approach allows us to iterate with precision, enhancing user engagement and satisfaction continually.",
    leftAlign: true,
  },
  {
    image: {
      src: globe,
      alt: "Globe icon",
    },

    title: "Ethical AI Development",
    body: "Central to our mission is the responsible cultivation of Ethical AI. In an industry where data is as sensitive as it is powerful, we uphold the highest standards of data integrity and privacy. Our AI models are rigorously designed to eliminate biases and promote fairness, ensuring that the transformative potential of AI in education is realized ethically and equitably. It's not just about what AI can do; it's about ensuring it's done right.",
    leftAlign: false,
  },
];

const valuesData = [
  {
    image: {
      src: gear,
      alt: "Gear icon",
    },

    title: "Pioneering Originality",
    body: "We champion the creation of unprecedented products and solutions. Our aim is to break new ground, delivering pioneering tools that redefine educational possibilities.",
  },
  {
    image: {
      src: globe,
      alt: "Globe icon",
    },

    title: "Unwavering Ethics",
    body: "At the heart of our operations lies a steadfast commitment to ethics. From data selection to model training, we ensure integrity guides our pursuit of technological advancement.",
  },
  {
    image: {
      src: user,
      alt: "User icon",
    },

    title: "Value Creation",
    body: "The goal of Linkt is to delight and enable our customers to do things they never thought possible. We are committed to creating value for our customers, and we will work tirelessly to ensure that our products are doing just that.",
  },
];

const valueCardsData = [
  {
    title: "Individualized Models",
    body: "While Artificial Intelligence is still in a nascent stage, we know that the “one size fits all” approach won't work. We design each model from the ground up, to ensure that you are receiving the best possible model for your use case.",
    image: {
      src: gear,
      alt: "Gear icon",
    },
  },

  {
    title: "Ethics First Focus",
    body: "As the world of AI continues to rapidly grow, the importance of ethical building practices are becoming more apparent. We strive not only to follow industry best practices, but to also question the ethical implications of every feature we build into our models. ",
    image: {
      src: globe,
      alt: "Globe icon",
    },
  },

  {
    title: "Value Creation",
    body: "The goal of Linkt is to delight and enable our customers to do things they never thought possible. We are committed to creating value for our customers, and we will work tirelessly to ensure that our products are doing just that.",
    image: {
      src: user,
      alt: "User icon",
    },
  },
];

const buildData = [
  {
    title: "Define Your Problem",
    body: "Discuss your problem with our team. We will help design custom models for your usecase to ensure that you're getting the most out of your platform.",
  },
  {
    title: "Building Your Model",
    body: "We will get to work building your custom model. We will keep iterating until it is right for you. Linkt prides itself in overdelivering for our customers. ",
  },
  {
    title: "Implement and Scale",
    body: "Our team will help you implement your model into your infrastructure, with solutions that best fit your needs. We will make our products work with any platform. ",
  },
];

const featureCardsData = [
  {
    image: {
      src: empower,
      alt: "Empower team Icon",
    },
    title: "Empower your Team",
    body: "Enable your team to focus on what matters most. Increase efficiency, delight your customers.",
  },
  {
    image: {
      src: automateTask,
      alt: "Automate tasks Icon",
    },
    title: "Automate Tasks",
    body: "There is no need to waste time on repetitive tasks! AI can do them for you.",
  },
  {
    image: {
      src: maximizePotential,
      alt: "Maximize potential icon",
    },
    title: "Maximize Potential",
    body: " Train models on a wealth of domain knowledge to maximize your platform's potential.",
  },
];

const faqData = [
  {
    question: "How much does Linkt charge?",
    answer: `<p>Our services are dependant on the size of the job. We serve individuals all the way to enterprise customers. The best way to get a quote is book a meeting or reach out.</p>
    `,
  },
  {
    question: "How does Linkt ensure the effectiveness of its AI models?",
    answer: `
      <p>Linkt follows a problem-resolution approach and recognizes that the <span class='italic font-bold'>"one size fits all"</span> approach to AI won't work. The company designs each model from the ground up, tailoring it to specific use cases. Additionally, a strong emphasis is placed on ethics, with a commitment to ethical building practices and a focus on the value created for clients. This ensures that the AI models are not only innovative but also aligned with real-world needs.</p>
    `,
  },
  {
    question:
      "What is the development process for implementing AI solutions with Linkt?",
    answer: `
      <p class="mb-4">The process with Linkt involves three key steps:</p>
      <ol class="space-y-6">
        <li><span class='font-bold'>Define Your Problem:</span> Discuss your problem with the Linkt team to design custom models for your use case, ensuring optimal outcomes for your platform.</li>
        <li><span class='font-bold'>Building Your Model:</span> Linkt will build your custom model, iterating until it meets your requirements, with a priority on solving a real-world problem.</li>
        <li><span class='font-bold'>Implement and Scale:</span> Linkt's team assists in implementing the model into your infrastructure, providing solutions tailored to your needs and ensuring compatibility with any platform.</li>
      </ol>
      <p>These steps reflect Linkt's commitment to making the AI implementation process straightforward and effective for its customers.</p>
    `,
  },
];

const solutionsHeroData: SolutionsHeroData = {
  chatbots: {
    title:
      "Elevate Your Customer Service with <span className='text-primary block'>AI-Powered Chatbots</span>",
    description:
      "Linkt&apos;s Chatbots provide a complete solution, leveraging advanced Large Language Models(LLM) for human-like conversations. Enhance customer engagement, streamline internal processes, and revolutionize your business interactions across various messaging channels",
    image: {
      src: chatbotImg,
      alt: "Chatbot working demo",
    },
  },

  "computer-vision": {
    title:
      "Revolutionize insights and visual analytics with our <span className='text-primary block'>Computer Vision Solutions</span>",
    description:
      "Empower your applications with advanced Computer Vision solutions, enabling you to analyze, and visualize valuable insights from visual data with remarkable ease.",
    image: {
      src: computerVisionImg,
      alt: "Computer vision application demo",
    },
  },

  recommendation: {
    title:
      "Personalize user experiences through our <span className='text-primary block'>Recommendation Systems</span>",
    description:
      "Unlock the power of tailored recommendations with  advanced Recommendation Engine. Elevate user experiences, boost engagement, and drive conversions by delivering personalized suggestions that resonate with each individual's preferences and behaviors.",
    image: {
      src: recommendationImg,
      alt: "Recommendation system application demo",
    },
  },

  "content-generation": {
    title:
      "Make your content unique with AI-powered <span className='text-primary block'>content generation</span>",
    description:
      "Revolutionize your content creation with advanced AI-driven solutions. From generating engaging written content to crafting captivating image and video content.",
    image: {
      src: contentGeneration,
      alt: "AI chip processor on the center surrounded with fewer and smaller AI, text icons, video icons with a black background and bright red orange accent color ",
    },
  },
};

const solutionsFeaturesData: SolutionsFeaturesData[] = [
  {
    chatbots: {
      title: "Natural Language Understanding",
      content:
        "As our chatbots are LLM-based they excel in understanding natural language, making interactions with users more conversational and user-friendly. This enhances the overall user experience.",
      icon: (
        <Image
          className="object-cover"
          src={nlp}
          alt="Icon expressing natural language understanding."
          width={60}
          height={60}
        />
      ),
    },
    "computer-vision": {
      title: "Data Insights and Analytics",
      content:
        "Our computer vision applications helps you generate valuable data insights by analyzing visual information.",
      icon: (
        <Image
          className="object-cover"
          src={dataInsight}
          alt="Icon expressing data insight and analytics."
          width={60}
          height={60}
        />
      ),
    },
    recommendation: {
      title: "Personalized Customer Experience",
      content:
        "Our recommendation system helps you tailor suggestions based on user preferences and behavior, providing a personalized experience that increases customer satisfaction and engagement.",
      icon: (
        <Image
          className="object-cover"
          src={personalization}
          alt="Icon expressing personalized experience."
          width={60}
          height={60}
        />
      ),
    },

    "content-generation": {
      title: "Text Generation",
      content:
        "Our AI-driven text generation enables you to efficiently create vast amounts of written content, saving time and resources. It ensures scalability for businesses needing diverse and high-volume content, from blog posts to product descriptions.",
      icon: (
        <Image
          className="object-cover"
          src={textGeneration}
          alt="Icon expressing text generation with generative AI."
          width={60}
          height={60}
        />
      ),
    },
  },
  {
    chatbots: {
      title: "24/7 Availability",
      content:
        "Our chatbots provide round-the-clock availability, allowing customers to interact with your business at any time, irrespective of time zones or working hours.",
      icon: (
        <Image
          className="object-cover flex justify-center items-center"
          src={availability}
          alt="Icon expressing 24/7 availability"
          width={60}
          height={60}
        />
      ),
    },
    "computer-vision": {
      title: "Real-Time Actionable Insights",
      content:
        "Our computer vision applications allow your businesses to derive real-time actionable insights, enabling immediate responses to dynamic situations, whether it's in retail, manufacturing, or security.",
      icon: (
        <Image
          className="object-cover"
          src={realTime}
          alt="Icon expressing Natural Language Understanding."
          width={60}
          height={60}
        />
      ),
    },
    recommendation: {
      title: "Targeted Product Features",
      content:
        "Our recommendation system helps you identify popular features or product attributes, allowing development teams to focus resources on features that align with customer preferences and market demand.",
      icon: (
        <Image
          className="object-cover"
          src={productFeatures}
          alt="Icon expressing product features."
          width={60}
          height={60}
        />
      ),
    },
    "content-generation": {
      title: "Image Generation",
      content:
        "Our AI-driven image generation streamlines the production of visual content, providing a quick and efficient way to produce high-quality images. This benefit is particularly valuable for marketing campaigns, social media posts, and other visual-centric communication needs.",
      icon: (
        <Image
          className="object-cover"
          src={imageGeneration}
          alt="Icon expressing image generation with generative AI."
          width={60}
          height={60}
        />
      ),
    },
  },
  {
    chatbots: {
      title: "Multi-Channel Integration",
      content:
        "Reach your audience on their preferred platforms. Our chatbots seamlessly integrate with various messaging channels, ensuring a consistent experience.",
      icon: (
        <Image
          className="object-cover"
          src={multiChannel}
          alt="Icon expressiing chatbot multi channel integration."
          width={60}
          height={60}
        />
      ),
    },
    "computer-vision": {
      title: "Enhanced Document Analysis",
      content:
        "Our computer vision applications automate the extraction of information from documents, reducing the risk of manual errors and enhancing the overall accuracy of data processing.",
      icon: (
        <Image
          className="object-cover"
          src={documentAnalysis}
          alt="Icon expressiing enhanced document analysis."
          width={60}
          height={60}
        />
      ),
    },
    recommendation: {
      title: "Content Discovery",
      content:
        "Our recommendation system assist users in discovering new content, whether it be movies, music, articles, or books. This keeps users engaged and encourages exploration of the platform's offerings.",
      icon: (
        <Image
          className="object-cover"
          src={contentDiscovery}
          alt="Icon expressiing content discovery."
          width={60}
          height={60}
        />
      ),
    },
    "content-generation": {
      title: "Video Generation",
      content:
        "Our AI-powered video generation allows you to create visually compelling and tailored videos. This enhances user engagement, conveying complex messages in a captivating manner. It's a powerful tool for brand communication and marketing efforts.",
      icon: (
        <Image
          className="object-cover"
          src={videoGeneration}
          alt="Icon expressing video generation with generative AI."
          width={60}
          height={60}
        />
      ),
    },
  },
];

const data = () => {
  return <></>;
};

export {
  approachData,
  valuesData,
  buildData,
  featureCardsData,
  valueCardsData,
  faqData,
  solutionsHeroData,
  solutionsFeaturesData,
};
