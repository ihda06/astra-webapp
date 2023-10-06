import Airtable from 'airtable';

const BASE_ID = process.env.NEXT_PUBLIC_BASE_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

const Airtables = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

export default Airtables