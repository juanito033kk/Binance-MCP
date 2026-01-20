// src/tools/binance-crypto-loans/getLoanableAssets.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { cryptoLoanClient } from "../../config/binanceClient.js";

export function registerBinanceCryptoLoanGetLoanableAssets(server: McpServer) {
    server.tool(
        "BinanceCryptoLoanGetLoanableAssets",
        "Get loanable assets data for crypto loans.",
        {
            loanCoin: z.string().optional().describe("Loan coin (e.g., USDT)"),
            vipLevel: z.number().optional().describe("VIP level")
        },
        async ({ loanCoin, vipLevel }) => {
            try {
                const params: any = {};
                if (loanCoin) params.loanCoin = loanCoin;
                if (vipLevel !== undefined) params.vipLevel = vipLevel;
                
                const response = await cryptoLoanClient.restAPI.getLoanableAssetsData(params);
                const data = await response.data();
                return {
                    content: [
                        {
                            type: "text",
                            text: `Loanable assets retrieved. Response: ${JSON.stringify(data)}`
                        }
                    ]
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return {
                    content: [
                        { type: "text", text: `Failed to get loanable assets: ${errorMessage}` }
                    ],
                    isError: true
                };
            }
        }
    );
}
