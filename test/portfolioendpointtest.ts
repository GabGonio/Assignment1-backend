import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/portfolio/performance", () => {
    
    it("should return status 200 and correct JSON when given valid numbers", async () => {
        const response = await request(app).get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000");
        
        expect(response.status).toBe(200);
        
        expect(response.body.profitOrLoss).toBe(6000);
        expect(response.body.percentageChange).toBe(60);
        expect(response.body.performanceSummary).toBe("Excellent performance! Your investments are doing great.");
    });

});