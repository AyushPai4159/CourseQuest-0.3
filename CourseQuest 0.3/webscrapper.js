const puppeteer = require('puppeteer') //is a promise/asynch function, meaning that it will take time before the function executes
const fs = require('fs/promises')

async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://catalog.unc.edu/courses/comp/")

    // await page.screenshot({path: "amazing.png", fullPage: true}) allows you to take full page screenshot of page
   
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent) //maps all of the elements that have a strong font
    })
    await fs.writeFile("names.txt", names.join("\r\n"))

    await page.click("#clickme") //id of button on the page
    const clickedData = await page.$eval("#data", el => el.textContent)
    console.log(clickedData)

    
    const photos = await page.$$eval("img", (imgs) => {
        return imgs.map(x => x.src)
    })

    for (const photo of photos){ // of allows for await syntax
        const imagepage = await page.goto(photo)
        await fs.writeFile(photo.split("/").pop(), await imagepage.buffer()) // split("/").pop() is supposed to get contents after the last "/" in the path
        // what is a buffer?
    }
    

   
    await browser.close()
}



//what is the difference between client-sided and server-sided java script




start()