// src/tools/binance-crypto-loans/borrow.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanBorrow(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanBorrow",
        "Crypto loan borrow.",
        {
            loanCoin: z.string().describe("Loan coin (e.g., USDT)"),
            collateralCoin: z.string().describe("Collateral coin (e.g., BTC)"),
            loanTerm: z.number().describe("Loan term in days (7, 14, 30, 90, 180)"),
            loanAmount: z.number().optional().describe("Loan amount"),
            collateralAmount: z.number().optional().describe("Collateral amount")
        },
        async ({ loanCoin, collateralCoin, loanTerm, loanAmount, collateralAmount }) => {
            try {
                const params: any = { loanCoin, collateralCoin, loanTerm };
                if (loanAmount !== undefined) params.loanAmount = loanAmount;
                if (collateralAmount !== undefined) params.collateralAmount = collateralAmount;
                
                const response = await cryptoLoanClient.restAPI.borrow(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Crypto loan borrowed successfully. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to borrow: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
