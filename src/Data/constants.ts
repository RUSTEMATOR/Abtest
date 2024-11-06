interface ILocation {
    Canada: string,
    Germany: string
    Australia: string
}

interface ILinks {
    UrlStag: string
    UrlBtag: string
}

interface IExpectedLinks {
    expectedUrlWelcome: string
    expectedUrlLand: string
}

interface IExpectedLinksNDB {
    expectedUrlNDB: string
    expectedUrlNoDep: string
}

interface IExpectedQuery {
    expectedQueryDE: string,
    expectedQuerryDENDB: string
    expectedQueryCA: string, 
    expectedQueryAU: string,

}


export const LOCATIONS: ILocation = {
    Canada: 'Canada - Montreal',
    Germany: 'Germany - Frankfurt - 1',
    Australia: 'Australia - Melbourne',
}


export const CANADA_LINKS: ILinks = {
    UrlStag: 'https://refer.kingtraf.com/a020bc42f',
    UrlBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1172c_&affid=17&siteid=2401&adid=1172&c='}



export const EXPECTED_CANADA_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino11.com/land/en-CA/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino11.com/land/en-CA/kings_land_1'
}


export const GERMANY_LINKS: ILinks = {
    UrlStag: 'https://refer.kingtraf.com/a6ac25b2b', 
    UrlBtag: 'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1424c_&affid=17&siteid=2401&adid=1424&c='}



export const EXPECTED_GERMANY_LINKS: IExpectedLinks = {
    expectedUrlWelcome: 'https://www.kingbillycasino11.com/land/de/kings_welcome_pack_1',
    expectedUrlLand: 'https://www.kingbillycasino11.com/land/de/kings_land_1'
}

export const AUSTRALIA_LINK: string = 'https://ia.kbtraf.com/C.ashx?btag=a_227b_1460c_&affid=114&siteid=227&adid=1460&c='


export const EXPECTED_AUSTRALIA_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillywin19.com/land/en-AU/ndb_1',
    expectedUrlNoDep: 'https://www.kingbillywin19.com/land/en-AU/kings_no_dep_1'

}

export const GERMANY_LINK_NDB: string = 'https://refer.kingtraf.com/a1668db2e'

export const EXPECTED_GERMANY_NDB_LINKS: IExpectedLinksNDB = {
    expectedUrlNDB: 'https://www.kingbillycasino11.com/land/de/ndb_1',
    expectedUrlNoDep: 'https://www.kingbillycasino11.com/land/de/kings_no_dep_1'
}


export const EXPECTED_QUERY: IExpectedQuery = {
    expectedQueryDE: "utm_source=Welcome&utm_medium=DE&utm_campaign=w1&utm_content=02_10_24&utm_term=Original",
    expectedQuerryDENDB: "utm_source=NDB&utm_medium=DE&utm_campaign=n1&utm_content=10_10_24&utm_term=Original",
    expectedQueryCA: "utm_source=Welcome&utm_medium=CA&utm_campaign=w1&utm_content=02_10_24&utm_term=Original",
    expectedQueryAU: "utm_source=NDB&utm_medium=AU&utm_campaign=n1&utm_content=10_10_24&utm_term=Original"
}
