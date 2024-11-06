import { test, chromium, type Browser, type BrowserContext } from '@playwright/test';
import { Methods } from './methods';
import { LOCATIONS, CANADA_LINKS, EXPECTED_CANADA_LINKS, GERMANY_LINKS, EXPECTED_GERMANY_LINKS, EXPECTED_QUERY, EXPECTED_AUSTRALIA_NDB_LINKS, AUSTRALIA_LINK, GERMANY_LINK_NDB, EXPECTED_GERMANY_NDB_LINKS } from '../Data/constants'
import { qase } from 'playwright-qase-reporter';


let browser: Browser

async function startBrowser() {
    if (!browser) {
        browser = await chromium.launch();
    }
    return browser;
  }


export default class Recursions {

    constructor(){}

    async recursiveTestWelcomeStag(): Promise<boolean>{
        
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)  
    
        await methods.sleep(1000)
        await methods.visitPage(CANADA_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_CANADA_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlWelcome, EXPECTED_CANADA_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryCA)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_CANADA_LINKS.expectedUrlWelcome}\n${EXPECTED_CANADA_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryCA}\n Received parameters: ${receivedParameters}`)

                // await page.screenshot({path: './screenshots/screeenshot.png'})
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            // await page.screenshot({path: './screenshots/screeenshot.png'})
            await ctx.close();
            return this.recursiveTestWelcomeStag();
        }
    }

    async recursiveTestWelcomeBtag(): Promise<boolean>{
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)  
    
        await methods.sleep(1000)
        await methods.visitPage(CANADA_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_CANADA_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlWelcome, EXPECTED_CANADA_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryCA)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_CANADA_LINKS.expectedUrlWelcome}\n${EXPECTED_CANADA_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryCA}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeBtag();
        }
    }



    async recursiveTestLandStag(): Promise<boolean> {


        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)  
    
        await methods.sleep(1000)
        await methods.visitPage(CANADA_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_CANADA_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlWelcome, EXPECTED_CANADA_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryCA)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_CANADA_LINKS.expectedUrlWelcome}\n${EXPECTED_CANADA_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryCA}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandStag();
        }

    }



    async recursiveTestLandBtag(): Promise<boolean> {


        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)  
    
        await methods.sleep(7000)
        await methods.visitPage(CANADA_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()
    
        if (baseCurrentUrl === EXPECTED_CANADA_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()
    
            await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlWelcome, EXPECTED_CANADA_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryCA)
    
            await page.waitForTimeout(1000)
            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_CANADA_LINKS.expectedUrlWelcome}\n${EXPECTED_CANADA_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryCA}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandStag();
        }

    }


    async recursiveTestWelcomeDEStag(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(1000)
        await methods.visitPage(GERMANY_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeDEStag();
        }

    }

    async recursiveTestWelcomeDEBtag(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(1000)
        await methods.visitPage(GERMANY_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlWelcome){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestWelcomeDEBtag();
        }

    }


    async recursiveTestLandDEStag(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(1000)
        await methods.visitPage(GERMANY_LINKS.UrlStag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandDEStag();
        }

    }

    async recursiveTestLandDEBtag(): Promise<boolean> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(1000)
        await methods.visitPage(GERMANY_LINKS.UrlBtag)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.expectedUrlLand){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlWelcome, EXPECTED_GERMANY_LINKS.expectedUrlLand)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlWelcome}\n${EXPECTED_GERMANY_LINKS.expectedUrlLand}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestLandDEBtag();
        }

    }

    async recursiveTestAUNoDep(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(1000)
        await methods.visitPage(AUSTRALIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNoDep();
        }

    }

    async recursiveTestAUNDB(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(3000)
        await methods.visitPage(AUSTRALIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()


        if (baseCurrentUrl === EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB){
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB, EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryAU)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_AUSTRALIA_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryAU}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestAUNDB();
        }

    }


    async recursiveTestDENDB(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(3000)
        await methods.visitPage(GERMANY_LINK_NDB)

        const baseCurrentUrl = await methods.formBaseLink()
        
        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB){


            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENDB();
        }

    }


    async recursiveTestDENoDep(): Promise<boolean> {
        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        await methods.sleep(3000)
        await methods.visitPage(GERMANY_LINK_NDB)

        const baseCurrentUrl = await methods.formBaseLink()

        console.log(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)
        qase.comment(`Expecting ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB} or ${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}`)

        if (baseCurrentUrl === EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep){

 
            
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB, EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep)

            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQuerryDENDB)

            await page.waitForTimeout(1000)
            
            

            qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNoDep}\n${EXPECTED_GERMANY_NDB_LINKS.expectedUrlNDB}
                \n\n Expected parameters: ${EXPECTED_QUERY.expectedQuerryDENDB}\n Received parameters: ${receivedParameters}`)
    
                await ctx.close();
    
                
                return true;
        } else {
            await methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestDENoDep();
        }

    }
}