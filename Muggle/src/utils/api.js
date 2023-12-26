//const puppeteer = require('puppeteer');
const fs = require('fs').promises;
import axios from "axios";
const cheerio = require('cheerio');

import { xmlToJson, getDateString } from "./util";
import { SERVICE_KEY } from "./OAuth";
import { kopisURL } from "./OAuth";
import { MUSICAL_THEATER_URL } from "./OAuth";
import { MUSICAL_SEAT_URL } from "./OAuth";

// 상단 슬라이더
export const getMonthMusical = () =>
    fetch(
        `${kopisURL}/boxoffice?service=${SERVICE_KEY}&ststype=month&date=${getDateString()}&catecode=GGGA&area=11`
    )
        .then((res) => res.text())
        .then((data) => xmlToJson(data))
        .catch((error) => console.log(error));

// 뮤지컬 상세 정보
export const getMusicalData = (params) => {
    const [_, musicalId] = params.queryKey;
    return fetch(`${kopisURL}/pblprfr/${musicalId}?service=${SERVICE_KEY}`)
        .then((res) => res.text())
        .then((data) => xmlToJson(data))
        .catch((error) => console.log(error));
}

// 공연장 목록
export const getHTML = async() => {
    try {
        return await axios.get(`${MUSICAL_THEATER_URL}`);
    } catch (error) {
        console.log(error);
    }
}

export const getTheaterList = async() =>  {
    const html = await getHTML();

    const $ = cheerio.load(html.data);

    const $child = $(".theater-right>div>a");

    let dataArr = [];

    $child.each((idx, node) => {
        const title = $(node).text();
        const link = $(node).attr("href");

        if (title == "") {
            return;
        }

        const param = link.split('/');

        //오브젝트 형식으로 배열 담기
        dataArr.push({
            title: title,
            musicalId: param[2]
        })
    });

    return dataArr;

    // return fetch(url)
    //     .then((res) => {
    //         console.log(res.status);

    //     if (res.status == 200) {
    //         let crawledTheaterList = [];
    //         const $ = cheerio.load(res.data);
    //         const $theaterList = $('.theater-right');

    //         $theaterList.each(function(i) {
    //             console.log(i)
    //         })

    //         //console.log(crawledTheaterList);
    //     } else {
    //         console.log("server response error");
    //     }
    //     })

    // try {
    //     const pageNum = 1;
    //     const browser = await puppeteer.launch();
    //     const page =await browser.newPage();
    //     await page.goto(`${MUSICAL_THEATER_URL}`, {
    //         waitUntil: 'networkidle0'
    //     });
    //     const html = await page.content();
    //     await fs.writeFile('reactstorefront.html', html);
    //     await browser.close();
    // } catch (err) {
    //     console.error(err);
    // }
}

export const GetSeat = async(params) => {

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