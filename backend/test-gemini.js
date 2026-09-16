require('dotenv').config();
const {GoogleGenerativeAI} = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
    try {
        console.log('Testing Gemini API...');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Say hello");
        const response = await result.response;
        const text = response.text();
        console.log('Success! Response:', text);
    } catch (error) {
        console.error('Error:', error.message);
        console.error('Full error:', error);
    }
}

testGemini();
