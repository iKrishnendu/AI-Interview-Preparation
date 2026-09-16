require('dotenv').config();
const {GoogleGenerativeAI} = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
    try {
        console.log('Listing available models...');
        const models = await genAI.listModels();
        console.log('Available models:');
        models.forEach(model => {
            console.log('-', model.name, '- Supported:', model.supportedGenerationMethods);
        });
    } catch (error) {
        console.error('Error listing models:', error.message);
        console.error('This might mean the API key is invalid or doesn\'t have proper permissions');
    }
}

listModels();
