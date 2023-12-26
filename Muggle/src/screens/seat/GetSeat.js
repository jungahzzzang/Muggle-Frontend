const puppeteer = require('puppeteer');
const fs = require('fs').promises;
import { MUSICAL_SEAT_URL } from '../../utils/OAuth';

const GetSeat = async() => {

    try {
        const pageNum = 1;
        const browser = await puppeteer.launch();
        const page =await browser.newPage();
        await page.goto(`${MUSICAL_SEAT_URL}/${pageNum}`, {
            waitUntil: 'networkidle0'
        });
        const html = await page.content();
        await fs.writeFile('reactstorefront.html', html);
        await browser.close();
    } catch (err) {
        console.error(err);
    }
}

export default GetSeat;