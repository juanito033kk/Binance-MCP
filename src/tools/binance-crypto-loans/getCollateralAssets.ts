// src/tools/binance-crypto-loans/getCollateralAssets.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanGetCollateralAssets(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanGetCollateralAssets",
        "Get collateral assets data for crypto loans.",
        {
            collateralCoin: z.string().optional().describe("Collateral coin (e.g., BTC)"),
            vipLevel: z.number().optional().describe("VIP level")
        },
        async ({ collateralCoin, vipLevel }) => {
            try {
                const params: any = {};
                if (collateralCoin) params.collateralCoin = collateralCoin;
                if (vipLevel !== undefined) params.vipLevel = vipLevel;
                
                const response = await cryptoLoanClient.restAPI.getCollateralAssetsData(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Collateral assets retrieved. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to get collateral assets: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
