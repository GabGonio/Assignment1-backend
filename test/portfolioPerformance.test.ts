import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    

    // 02 - Gain
    it("should calculate 30% gain", () => {
        const result = calculatePortfolioPerformance(10000, 13000);
        expect(result.profitOrLoss).toBe(3000);
        expect(result.percentageChange).toBe(30);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.");
    });


    // 04 - Gain
    it("should calculate 10% gain", () => {
        const result = calculatePortfolioPerformance(10000, 11000);
        expect(result.profitOrLoss).toBe(1000);
        expect(result.percentageChange).toBe(10);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.");
    });

    // 05 - Gain
    it("should calculate 9.998999999999997% gain", () => {
        const result = calculatePortfolioPerformance(10000, 10999.9);
        expect(result.profitOrLoss).toBe(999.8999999999996);
        expect(result.percentageChange).toBe(9.998999999999997);
        expect(result.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.");
    });



    // 07 - No Change
    it("should calculate exactly 0% change", () => {
        const result = calculatePortfolioPerformance(10000, 10000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe("No change. Your potfolio is holding steady."); 
    });


    // 09 - Loss
    it("should calculate a minor loss", () => {
        const result = calculatePortfolioPerformance(10000, 9000);
        expect(result.profitOrLoss).toBe(-1000);
        expect(result.percentageChange).toBe(-10);
        expect(result.performanceSummary).toBe("Minor loss. Stay calm and review your options."); 
    });

    // 10 - Loss
    it("should calculate a significant loss", () => {
        const result = calculatePortfolioPerformance(10000, 8999.9);
        expect(result.profitOrLoss).toBe(-1000.1000000000004);
        expect(result.percentageChange).toBe(-10.001000000000005);
        expect(result.performanceSummary).toBe("Significant loss. Review your portfolio strategy.");
    });

});