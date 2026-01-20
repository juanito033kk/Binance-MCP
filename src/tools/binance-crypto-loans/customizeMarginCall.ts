// src/tools/binance-crypto-loans/customizeMarginCall.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanCustomizeMarginCall(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanCustomizeMarginCall",
        "Customize margin call for crypto loans.",
        {
            orderId: z.number().optional().describe("Order ID"),
            collateralCoin: z.string().optional().describe("Collateral coin (e.g., BTC)"),
            marginCall: z.number().describe("Margin call value")
        },
        async ({ orderId, collateralCoin, marginCall }) => {
            try {
                const params: any = { marginCall };
                if (orderId !== undefined) params.orderId = orderId;
                if (collateralCoin) params.collateralCoin = collateralCoin;
                
                const response = await cryptoLoanClient.restAPI.customizeMarginCall(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Margin call customized successfully. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to customize margin call: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
