interface ILocation {
    Canada: string,
    Germany: string 
}

interface ICanadaLinks {
    expectedUrlOne: string
    expectedUrlTwo: string
}

interface IGermanyLinks {
    expectedUrlOne: string
    expectedUrlTwo: string
}

interface IExpectedQuery {
    expectedQueryDE: string,
    expectedQueryCA: string
}


export const LOCATIONS: ILocation = {
    Canada: 'Canada - Montreal',
    Germany: 'Germany - Frankfurt - 1'
}

export const CANADA_LINKS: string[] = ['https://refer.kingtraf.com/a020bc42f',
                                'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1172c_&affid=17&siteid=2401&adid=1172&c=']



export const EXPECTED_CANADA_LINKS: ICanadaLinks = {
    expectedUrlOne: 'https://www.kingbillycasino11.com/land/en-CA/kings_welcome_pack_1',
    expectedUrlTwo: 'https://www.kingbillycasino11.com/land/en-CA/kings_land_1'
}


export const GERMANY_LINKS: string[] = ['https://refer.kingtraf.com/a6ac25b2b', 
                                        'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1424c_&affid=17&siteid=2401&adid=1424&c=']


export const EXPECTED_GERMANY_LINKS: IGermanyLinks = {
    expectedUrlOne: 'https://www.kingbillycasino11.com/land/de/kings_welcome_pack_1',
    expectedUrlTwo: 'https://www.kingbillycasino11.com/land/de/kings_land_1'
}


export const EXPECTED_QUERY: IExpectedQuery = {
    expectedQueryDE: "utm_source=Welcome&utm_medium=DE&utm_campaign=w1&utm_content=02_10_24&utm_term=Original",
    expectedQueryCA: "utm_source=Welcome&utm_medium=CA&utm_campaign=w1&utm_content=02_10_24&utm_term=Original"
}
