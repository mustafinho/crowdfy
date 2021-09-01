//recordar importar el contrato


const compareDates = (deadline: string) => {
    if (Date.parse(deadline) < Date.parse(new Date().toString())) return true
    else return false
}
const compareAddress = (beneficiaryAddress: string, actualAddress: string) => {
    if (beneficiaryAddress.toString().toLowerCase()
        ===
        actualAddress.toString().toLowerCase()) return true
    else return false
}

/**
 * 
 * @param campaignName the name of the campaign
 * @param foundingGoal the minimun that the campaign have to achive to be succesfull
 * @param foundingCap the maximum value that the campaign can handle
 * @param deadline the deadline of the campaign
 * @param beneficiary the beneficiary who is going to recive the found of the campaign(if succesfull)
 */
export const createCampaign = async (
    campaignCreator: string,
    campaignName: string,
    foundingGoal: number,
    foundingCap: number,
    deadline: number,
    beneficiary: string) => {



    try {
        const instance = await FabricContract.methods.createCampaign().send({ from: campaignCreator })
    }
    catch (err) {
        alert(err)
    }

}

/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy campaign contract
 * @param beneficiary the beneficiary of the campaign 
 * @param actualAddress the actual account of metamask used by the user
 * use to call the wirthdraw method once the campaign was finished succesfull
 * 
 * @dev compares the beneficiary of the campaign and the actual account user => only the beneficiary can call this function
 */
export const withdraw = async (beneficiary: string,
    actualAddress: string,
    crowdfyInstance) => {

    if (compareAddress(beneficiary, actualAddress)) {
        try {
            await crowdfyInstance.methods.withdraw().send({ from: beneficiary });
        }
        catch (err) {
            alert(err)
        }
    }
    else {
        alert('Only beneficiary can call this function')
    }

}


/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy contract
 * @param currentAddress the actual account of metamask of the user
 * @returns boolean 
 */
export const getRefound = async (currentAddress: string, crowdfyInstance) => {
    try {
        await crowdfyInstance.methods.getRefound().send({
            from: currentAddress
        });
    }
    catch (err) {
        alert(err)
        return false
    }
    return true
}


/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy campaign value
 * @param deadline the deadline of the campaign
 * @param currentAddress the actual account user 
 * @returns boolean
 */
export const makeContribution = async (
    currentAddress: string,
    deadline: string,
    crowdfyInstance) => {

    if (compareDates(deadline)) {
        try {
            await crowdfyInstance.methods.contribute().send({
                from: currentAddress
            })
        }
        catch (err) {
            alert(err)
        }
    }
    return true
}