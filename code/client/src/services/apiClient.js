import axios from 'axios';
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Determine the correct .env file based on the environment
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

// Get dirname using ES6 Module syntax (would just be a global variable __dirname in Common JS)
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Load the appropriate .env file
dotenv.config({ path: path.resolve(dirname, `../../../${envFile}`) })

const apiClient = axios.create({
  baseURL: process.env.SERVER_URL
});

export default apiClient;