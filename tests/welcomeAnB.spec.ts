import {test} from 'playwright/test';

import { LOCATIONS } from '../src/Data/constants';
import Recursions from '../src/methods/recursions'
import VpnController from '../src/methods/vpnController';






test.describe('A/B test Canada', () => {
    const vpnController = new VpnController()
    const recursions = new Recursions()
    

    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Canada)
    })
        
        test(`Landing WP Stag check page and params`, async () => {
            await recursions.recursiveTestWelcomeStag()
            })
        
        test(`Landing Land Stag check page and params`, async () => {
            await recursions.recursiveTestLandStag()
            })

        test(`Landing WP Btag check page and params`, async () => {
            await recursions.recursiveTestWelcomeBtag()
            })
        
        test(`Landing Land Btag check page and params`, async () => {
            await recursions.recursiveTestLandBtag()
            })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
       
        })
    })



test.describe('A/B test GermanyWP', () => {
    const vpnController = new VpnController()
    const recursions = new Recursions()


    test.beforeAll(async () => {

        await vpnController.vpnConnnect(LOCATIONS.Germany)
    
        
    })

        test(`Landing WP DE Stag check page and params`, async () => {
            await recursions.recursiveTestWelcomeDEStag()
        })

        test(`Landing WP DE Btag check page and params`, async () => {
            await recursions.recursiveTestWelcomeDEBtag()
        })

        test(`Landing Land DE Stag check page and params`, async () => {
            await recursions.recursiveTestLandDEStag()
        })

        test(`Landing Land DE Btag check page and params`, async () => {
            await recursions.recursiveTestLandDEBtag()
        })



    test.afterAll(async () => {
        await vpnController.vpnDisconnect()
      
    })

})


test.describe('A/B NDB Australia', () => {
    const vpnController = new VpnController()
    const recursions = new Recursions()


    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Australia)
        

    })

    test('Landing No Dep Australia', async () => {
        await recursions.recursiveTestAUNoDep()
    })

    test('Landing NDB', async () => {
        await recursions.recursiveTestAUNDB()
    })


    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })
})


test.describe('A/B NDB Germany', () => {
    const vpnController = new VpnController()
    const recursions = new Recursions()


    test.beforeAll(async () => {
        vpnController.vpnConnnect(LOCATIONS.Germany)
        

    })

    test('Landing No Dep Germany', async () => {
        await recursions.recursiveTestDENoDep()
    })

    test('Landing NDB', async () => {
        await recursions.recursiveTestDENDB()
    })

    test.afterAll(async () => {
        vpnController.vpnDisconnect()
        
    })
})
