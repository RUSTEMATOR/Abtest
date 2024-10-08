import { test } from '@playwright/test';
import { Methods } from '../src/methods/methods';
import { LOCATIONS, CANADA_LINKS, EXPECTED_CANADA_LINKS } from '../src/Data/constants';
import VpnController from '../src/methods/vpnController';




test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    let counter = 0;

test.beforeAll(() => {
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

    for(let link of CANADA_LINKS){

        for (let i: number = 0; i < 5; i++){
            counter+=1

            
            test(`CA open page and check if the correct page has been opened, ${counter}`, async ({page}) => {
                const methods = new Methods(page)  

                await methods.visitPage(link)
                
                const baseCurrentUrl = await methods.formBaseLink()

                await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlOne, EXPECTED_CANADA_LINKS.expectedUrlTwo)

                await page.waitForTimeout(5000)
            })
        }
    }
test.afterAll(() => {
    vpnController.vpnDisconnect()
})
})



test.describe('A/B test Germany', () => {
    const vpnController = new VpnController()
    let counter = 0;

    for(let link of CANADA_LINKS){

        for (let i: number = 0; i < 5; i++){
            counter+=1

        }
    }



})