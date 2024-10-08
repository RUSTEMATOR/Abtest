import { test } from '@playwright/test';
import { Methods } from '../src/methods/methods';
import { LOCATIONS, CANADA_LINKS, EXPECTED_CANADA_LINKS, GERMANY_LINKS, EXPECTED_GERMANY_LINKS, EXPECTED_QUERY } from '../src/Data/constants';
import VpnController from '../src/methods/vpnController';
import { qase } from 'playwright-qase-reporter';





test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    let counter = 0;

test.beforeAll(() => {
    vpnController.vpnConnnect(LOCATIONS.Canada)
})

    for(let link of CANADA_LINKS){

        for (let i: number = 0; i < 5; i++){
            counter+=1

            
            test(`CA open page and check if the correct page has been opened ${counter}`, async ({page}) => {
                const methods = new Methods(page)  

                
                await methods.visitPage(link)
                
                const baseCurrentUrl = await methods.formBaseLink()
                const receivedParameters = await methods.formQueryParameters()

                await methods.checkUrl(baseCurrentUrl, EXPECTED_CANADA_LINKS.expectedUrlOne, EXPECTED_CANADA_LINKS.expectedUrlTwo)
                await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryCA)

                await page.waitForTimeout(5000)
                qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_CANADA_LINKS.expectedUrlOne}\n${EXPECTED_CANADA_LINKS.expectedUrlTwo}
                    \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryCA}\n Received parameters: ${receivedParameters}`)
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

    test.beforeAll(() => {
        vpnController.vpnConnnect(LOCATIONS.Germany)
    })

        for(let link of GERMANY_LINKS){

            for (let i: number = 0; i < 5; i++){
                counter+=1
                
                test(`DE open page and check if the correct page has been opened, ${counter}`, async ({page}) => {
                    const methods = new Methods(page)  

                    await methods.visitPage(link)
                    
                    const baseCurrentUrl = await methods.formBaseLink()
                    const receivedParameters = await methods.formQueryParameters()

                    await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.expectedUrlOne, EXPECTED_GERMANY_LINKS.expectedUrlTwo)
                    await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expectedQueryDE)

                    await page.waitForTimeout(5000)
                    
                    

                    qase.comment(`Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.expectedUrlOne}\n${EXPECTED_GERMANY_LINKS.expectedUrlTwo}
                        \n\n Expected parameters: ${EXPECTED_QUERY.expectedQueryDE}\n Received parameters: ${receivedParameters}`)
                })
            }
        }

    test.afterAll(() => {
        vpnController.vpnDisconnect()
    })

})