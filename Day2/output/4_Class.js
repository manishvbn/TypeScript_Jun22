"use strict";
var BankAccount = (function () {
    function BankAccount(_accNumber, _accName) {
        this._accNumber = _accNumber;
        this._accName = _accName;
    }
    Object.defineProperty(BankAccount.prototype, "BankName", {
        get: function () {
            return BankAccount._bankName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount, "BankName", {
        set: function (value) {
            BankAccount._bankName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "AccountHolderName", {
        get: function () {
            return this._accName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "AccountNumber", {
        get: function () {
            return this._accNumber;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount._bankName = "HDFC";
    return BankAccount;
}());
BankAccount.BankName = "ICICI";
var a1 = new BankAccount(1, "Manish");
console.log("\nBank Name: " + a1.BankName);
console.log("Account Number: " + a1.AccountNumber);
console.log("Account Holder Name: " + a1.AccountHolderName);
var a2 = new BankAccount(2, "Abhijeet");
console.log("\nBank Name: " + a2.BankName);
console.log("Account Number: " + a2.AccountNumber);
console.log("Account Holder Name: " + a2.AccountHolderName);
