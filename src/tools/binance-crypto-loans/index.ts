// src/tools/binance-crypto-loans/index.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// Standard Crypto Loans
import { registerBinanceCryptoLoanGetLoanableAssets } from "./getLoanableAssets.js";
import { registerBinanceCryptoLoanGetCollateralAssets } from "./getCollateralAssets.js";
import { registerBinanceCryptoLoanGetCollateralRepayRate } from "./getCollateralRepayRate.js";
import { registerBinanceCryptoLoanCustomizeMarginCall } from "./customizeMarginCall.js";
import { registerBinanceCryptoLoanBorrow } from "./borrow.js";
import { registerBinanceCryptoLoanBorrowHistory } from "./borrowHistory.js";
import { registerBinanceCryptoLoanOngoingOrders } from "./ongoingOrders.js";
import { registerBinanceCryptoLoanRepay } from "./repay.js";
import { registerBinanceCryptoLoanRepayHistory } from "./repayHistory.js";
import { registerBinanceCryptoLoanAdjustLTV } from "./adjustLTV.js";
import { registerBinanceCryptoLoanLTVAdjustmentHistory } from "./ltvAdjustmentHistory.js";

// V2 / Flexible Loans
import { registerBinanceCryptoLoanGetLoanableAssetsDataV2 } from "./getLoanableAssetsData.js";
import { registerBinanceCryptoLoanGetCollateralAssetsDataV2 } from "./getCollateralAssetsData.js";
import { registerBinanceCryptoLoanFlexibleLoanBorrow } from "./flexibleLoanBorrow.js";
import { registerBinanceCryptoLoanFlexibleLoanOngoingOrders } from "./flexibleLoanOngoingOrders.js";
import { registerBinanceCryptoLoanFlexibleLoanBorrowHistory } from "./flexibleLoanBorrowHistory.js";
import { registerBinanceCryptoLoanFlexibleLoanRepay } from "./flexibleLoanRepay.js";
import { registerBinanceCryptoLoanFlexibleLoanRepayHistory } from "./flexibleLoanRepayHistory.js";
import { registerBinanceCryptoLoanFlexibleLoanAdjustLTV } from "./flexibleLoanAdjustLTV.js";
import { registerBinanceCryptoLoanFlexibleLoanLTVAdjustmentHistory } from "./flexibleLoanLTVAdjustmentHistory.js";
import { registerBinanceCryptoLoanFlexibleLoanCollateralAssets } from "./flexibleLoanCollateralAssets.js";

export function registerBinanceCryptoLoansTools(server: McpServer) {
    // Fixed-Term Loan - Info
    registerBinanceCryptoLoanGetLoanableAssets(server);
    registerBinanceCryptoLoanGetCollateralAssets(server);
    registerBinanceCryptoLoanGetCollateralRepayRate(server);
    
    // Fixed-Term Loan - Trading
    registerBinanceCryptoLoanBorrow(server);
    registerBinanceCryptoLoanRepay(server);
    registerBinanceCryptoLoanAdjustLTV(server);
    registerBinanceCryptoLoanCustomizeMarginCall(server);
    
    // Fixed-Term Loan - History
    registerBinanceCryptoLoanOngoingOrders(server);
    registerBinanceCryptoLoanBorrowHistory(server);
    registerBinanceCryptoLoanRepayHistory(server);
    registerBinanceCryptoLoanLTVAdjustmentHistory(server);
    
    // Flexible Loan - Info
    registerBinanceCryptoLoanGetLoanableAssetsDataV2(server);
    registerBinanceCryptoLoanGetCollateralAssetsDataV2(server);
    registerBinanceCryptoLoanFlexibleLoanCollateralAssets(server);
    
    // Flexible Loan - Trading
    registerBinanceCryptoLoanFlexibleLoanBorrow(server);
    registerBinanceCryptoLoanFlexibleLoanRepay(server);
    registerBinanceCryptoLoanFlexibleLoanAdjustLTV(server);
    
    // Flexible Loan - History
    registerBinanceCryptoLoanFlexibleLoanOngoingOrders(server);
    registerBinanceCryptoLoanFlexibleLoanBorrowHistory(server);
    registerBinanceCryptoLoanFlexibleLoanRepayHistory(server);
    registerBinanceCryptoLoanFlexibleLoanLTVAdjustmentHistory(server);
}
