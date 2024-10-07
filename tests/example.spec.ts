import { test, expect } from '@playwright/test';
import { Methods } from '../src/methods/methods';
import LOCATIONS from '../src/Data/constants'
import { fail } from 'assert';

let canadaLinks: string[] = ['https://google.com',
    'https://refer.kingtraf.com/a020bc42f',
                            'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1172c_&affid=17&siteid=2401&adid=1172&c='
]

test.describe('A/B test Canada', async () => {
    const methods = new Methods();
    let counter = 0;
    const expectedUrlOne = 'https://www.kingbillycasino10.com/land/en-CA/kings_welcome_pack_1'
    const expectedUrlTwo = 'https://www.kingbillycasino10.com/land/en-CA/kings_land_1'
    
    test.beforeAll(async () => {
        await methods.vpnConnnect(LOCATIONS.Canada)
    })

        for(let link of canadaLinks){
            

            for (let i: number = 0; i < 5; i++){
                counter+=1
                
                test(`open page and check if the correct page has been opened, ${counter}`, async ({page}) => {

                    await page.waitForTimeout(7000)

                    await page.goto(link)
                    
                    const fullUrl = await page.url()
                    
                    const url = new URL(fullUrl)

                    const baseCurrentUrl = `${url.origin}${url.pathname}`

                    console.log(baseCurrentUrl)

                    if (baseCurrentUrl === expectedUrlOne) {

                        expect(baseCurrentUrl).toBe(expectedUrlOne);
                        console.log(`${expectedUrlOne}\n`)

                      } else if (baseCurrentUrl === expectedUrlTwo) {

                        expect(baseCurrentUrl).toBe(expectedUrlTwo);
                        console.log(`${expectedUrlTwo}\n`)

                      } else {
                        // Explicitly fail the test if the URL doesn't match any expected value
                        console.log(`${expectedUrlOne}\n${expectedUrlTwo}`)
                        throw new Error();
                      }
                    })
                 }
             }

    test.afterAll(async () => {
        await methods.vpnDisconnect()
    } )
})
