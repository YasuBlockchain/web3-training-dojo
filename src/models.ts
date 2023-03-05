import {BigNumber} from "ethers";
import {EventData} from "web3-eth-contract";

export interface WalletModel {
    address?: string
    balanceInWei?: string
    chain?: ChainModel
}

export interface ChainModel {
    id: number
    name?: string
    symbol?: string
    explorer?: string
    rpc?: string
}

export interface ERC20Model {
    name?: string,
    symbol?: string,
    balanceOfConnectedAccount?: string
    totalSupply?: string
    events?: {
        transferFrom?: EventData[],
        transferTo?: EventData[],
    }
}

