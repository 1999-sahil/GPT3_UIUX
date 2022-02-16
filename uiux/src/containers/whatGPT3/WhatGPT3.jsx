import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Using only a few snippets of example code text, GPT-3 can create workable code that can be run without error, as programming code is just a form of text. GPT-3 has also been used to powerful effect to mock up websites. Using just a bit of suggested text, one developer has combined the UI prototyping tool Figma with GPT-3 to create websites just by describing them in a sentence or two. GPT-3 has even been used to clone websites by providing a URL as suggested text" />
        <Feature title="knowledgebase" text="OpenAI and others are working on even more powerful and large models. There are a number of open source efforts in play to provide a free and non-licensed model as a counterweight to the Microsoft exclusive ownership. OpenAI is planning larger and more domain-specific versions of its models trained on different and more diverse kinds of texts. Others are looking at different use cases and applications of the GPT-3 model. However, Microsoft's exclusive license poses challenges for those looking to embed the capabilities in their applications." />
        <Feature title="Education" text="GPT-3 is a language prediction model. This means that it has a neural network machine learning model that can take input text as an input and transform it into what it predicts the most useful result will be. This is accomplished by training the system on the vast body of internet text to spot patterns. More specifically, GPT-3 is the third version of a model that is focused on text generation based on being pre-trained on a huge amount of text." />
      </div>
    </div>
  )
}

export default WhatGPT3