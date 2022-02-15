import React, { Component } from 'react';
import {nftmarketaddress,nftaddress,coinaddress} from '../../config';
import admcabi from "../../artifacts/contracts/Adamant.sol/Adamant.json";
import { BigNumber } from '@ethersproject/bignumber';
import {getContract} from '../../export/export';
import marketabi from "../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

const initData = {
    pre_heading: "Faucet",
    heading: "Send to your wallet",
    content: "Contract Balance : 0 ADMC"
}

const socialData = [
    {
        id: "1",
        link: "facebook",
        icon: "fab fa-facebook-f"
    },
    {
        id: "2",
        link: "twitter",
        icon: "fab fa-twitter"
    },
    {
        id: "3",
        link: "google-plus",
        icon: "fab fa-google-plus-g"
    }
]

class FaucetCmp extends Component {
    state = {
        initData: {},
        data: [],
        balance: 0,
        walletAddress: ''
    }
    componentDidMount = async() => {
        let bal = await this.getContractBalance();
        this.setState({
            initData: initData,
            data: socialData,
            balance: bal
        });
    }
    getContractBalance = async() => {
        let contractCoin = await getContract(coinaddress, admcabi.abi);
        let balance = await contractCoin.balanceOf(nftmarketaddress);
        balance = balance.div(BigNumber.from(Math.pow(10,9))).toNumber();
        return balance;
    }
    onSendCoin = async() => {
        if(this.state.walletAddress === "" || this.state.walletAddress === null){
            alert("please type your wallet address"); return;
        }
        let contractMarket = await getContract(nftmarketaddress, marketabi.abi);
        let transaction = await contractMarket.sendToWallet(nftaddress,this.state.walletAddress,
                                BigNumber.from(100000).mul(BigNumber.from(Math.pow(10,9))).toBigInt());
        await transaction.wait();
    }
    onChangeAddress = (evt) =>{
        this.setState({walletAddress: evt.target.value});
    }
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>Contract Balance : {this.state.balance} ADMC</p>
                            </div>
                            {/* Item Form */}
                            <div className="item-form card no-hover">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="edit" className="form-control" name="email" 
                                                    placeholder="0x14dC79964da2C08b23698B3D3cc7Ca32193d9955" 
                                                    required="required"  onChange = {this.onChangeAddress}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="button" onClick = {this.onSendCoin}>Send me 100000 ADMC</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaucetCmp;