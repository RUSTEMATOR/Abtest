import {expect, type Page } from '@playwright/test';


export class Methods {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
 
    async formBaseLink(){
        const fullUrl = await this.page.url()

        const url = new URL(fullUrl)

        const baseCurrentUrl = `${url.origin}${url.pathname}`

        console.log(baseCurrentUrl)

        return baseCurrentUrl
    }
        
    async visitPage(link: string){
        await this.page.waitForTimeout(2000)

        await this.page.goto(link)

        await this.page.waitForTimeout(7000)
    }

    async checkUrl(baseCurrentUrl: string, expectedUrlOne: string, expectedUrlTwo: string){
        if (baseCurrentUrl == expectedUrlOne) {

            console.log(`${expectedUrlOne}\n`)

          } else if (baseCurrentUrl == expectedUrlTwo) {

            console.log(`${expectedUrlTwo}\n`)

          } else {
            // Explicitly fail the test if the URL doesn't match any expected value
            console.log(`${expectedUrlOne}\n${expectedUrlTwo}`)
            throw new Error();
          }
        }
}
