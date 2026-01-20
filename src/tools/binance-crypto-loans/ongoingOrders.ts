// src/tools/binance-crypto-loans/ongoingOrders.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanOngoingOrders(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanOngoingOrders",
        "Get loan ongoing orders.",
        {
            orderId: z.number().optional().describe("Order ID"),
            loanCoin: z.string().optional().describe("Loan coin (e.g., USDT)"),
            collateralCoin: z.string().optional().describe("Collateral coin (e.g., BTC)"),
            current: z.number().optional().describe("Current page"),
            limit: z.number().optional().describe("Page size, max 100")
        },
        async ({ orderId, loanCoin, collateralCoin, current, limit }) => {
            try {
                const params: any = {};
                if (orderId !== undefined) params.orderId = orderId;
                if (loanCoin) params.loanCoin = loanCoin;
                if (collateralCoin) params.collateralCoin = collateralCoin;
                if (current !== undefined) params.current = current;
                if (limit !== undefined) params.limit = limit;
                
                const response = await cryptoLoanClient.restAPI.ongoingOrders(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Ongoing orders retrieved. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to get ongoing orders: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
