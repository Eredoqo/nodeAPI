const vatCalculator = require('../src/utilities/vatCalculator')


describe("VAT Calculator", ()=>{
    test("Should return the corret VAT excluded amount for 20% of VAT", ()=>{
        const result = vatCalculator.calculateVAT(16.67)
        expect(result).toBe(3.33)
    })

    test("Should return the correct gross amount of 20% VAT", ()=>{
        const result = vatCalculator.calculateGrossAmount(16.67)
        expect(result).toBe(20)
    })

    test("Should return the correct net amount of 20% VAT", ()=>{
        const result = vatCalculator.calculateNetAmount(20)
        expect(result).toBe(16.67)
    })
   
} )