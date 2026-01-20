// src/tools/binance-crypto-loans/repay.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanRepay(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanRepay",
        "Crypto loan repay.",
        {
            orderId: z.number().describe("Order ID"),
            amount: z.number().describe("Repay amount"),
            type: z.enum(["1", "2"]).optional().describe("Repay type: 1 = repay with loan coin, 2 = repay with collateral"),
            collateralReturn: z.boolean().optional().describe("Whether to return collateral")
        },
        async ({ orderId, amount, type, collateralReturn }) => {
            try {
                const params: any = { orderId, amount };
                if (type) params.type = type;
                if (collateralReturn !== undefined) params.collateralReturn = collateralReturn;
                
                const response = await cryptoLoanClient.restAPI.repay(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Loan repaid successfully. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to repay loan: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
