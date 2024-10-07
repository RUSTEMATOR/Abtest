import { test, expect } from '@playwright/test';
import { Methods } from '../src/methods/methods';
import LOCATIONS from '../src/Data/constants'



test.describe('A/B test Canada', async () => {
    const methods = new Methods();
    let counter = 0;
    for (let i: number = 0; i < 5; i++){
        counter+=1
        
        test(`open page and check if the correct page has been opened, ${counter}`, async () => {
            await methods.vpnConnnect(LOCATIONS.Canada)
        })
    }

    await methods.vpnDisconnect()

})