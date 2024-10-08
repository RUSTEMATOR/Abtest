interface ILocation {
    Canada: string,
    Germany: string 
}

interface ICanadaLinks {
    expectedUrlOne: string
    expectedUrlTwo: string
}


export const LOCATIONS: ILocation = {
    Canada: 'Canada - Montreal',
    Germany: 'Germany - Frankfurt '
}

export const CANADA_LINKS: string[] = ['https://refer.kingtraf.com/a020bc42f',
                                'https://ia.kbtraf.com/C.ashx?btag=a_2401b_1172c_&affid=17&siteid=2401&adid=1172&c=']



export const EXPECTED_CANADA_LINKS: ICanadaLinks = {
    expectedUrlOne: 'https://www.kingbillycasino11.com/land/en-CA/kings_welcome_pack_1',
    expectedUrlTwo: 'https://www.kingbillycasino11.com/land/en-CA/kings_land_1'
}

