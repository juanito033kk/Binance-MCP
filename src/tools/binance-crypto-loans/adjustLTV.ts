// src/tools/binance-crypto-loans/adjustLTV.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanAdjustLTV(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanAdjustLTV",
        "Crypto loan adjust LTV (Loan-to-Value).",
        {
            orderId: z.number().describe("Order ID"),
            amount: z.number().describe("Adjustment amount"),
            direction: z.enum(["ADDITIONAL", "REDUCED"]).describe("Direction: ADDITIONAL = add collateral, REDUCED = reduce collateral")
        },
        async ({ orderId, amount, direction }) => {
            try {
                const params: any = { orderId, amount, direction };
                
                const response = await cryptoLoanClient.restAPI.adjustLTV(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `LTV adjusted successfully. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to adjust LTV: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
